const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const baseDir = __dirname;
const downloadsDir = path.join(baseDir, "downloads");
const targetBaseDir = baseDir;

function parseFilename(filename) {
  const match = filename.match(
    /^CH(\d+)__([\w\s()]+)_L(\d+)__([\w\s()]+)(?:_L\d+__.*)?(?:_README)?\.(go|md)$/i
  );
  if (!match) return null;

  const [, chNum, chName, lNum, lName, ext] = match;
  const chapter = `CH${chNum}_${chName.replace(/\s+/g, "_")}`;
  const lesson = `L${lNum}_${lName.replace(/\s+/g, "_")}`;
  const isReadme = filename.toLowerCase().includes("readme");

  return { chapter, lesson, ext, isReadme };
}

function organizeFiles() {
  const files = fs.readdirSync(downloadsDir);
  let organized = false;

  files.forEach((file) => {
    const fullPath = path.join(downloadsDir, file);
    if (!fs.statSync(fullPath).isFile()) return;

    const parsed = parseFilename(file);
    if (!parsed) return;

    const { chapter, lesson, ext, isReadme } = parsed;

    const lessonDir = path.join(targetBaseDir, chapter, lesson);
    if (!fs.existsSync(lessonDir)) fs.mkdirSync(lessonDir, { recursive: true });

    const newFilename = isReadme ? "README.md" : `${lesson}.${ext}`;
    const newPath = path.join(lessonDir, newFilename);

    fs.renameSync(fullPath, newPath);
    organized = true;

    console.log(`📁 Moved: ${file} → ${path.relative(baseDir, newPath)}`);
  });

  return organized;
}

function clearDownloadsFolder() {
  const files = fs.readdirSync(downloadsDir);
  files.forEach((file) => {
    const filePath = path.join(downloadsDir, file);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
    }
  });
}

function gitCommitAndPush() {
  try {
    execSync("git add .");
    execSync(`git commit -m "Add new lessons"`);
    execSync("git push", { stdio: "inherit" });
    console.log("✅ Git commit and push completed.");
  } catch (err) {
    if (err.message.includes("no upstream")) {
      console.log("⚠️ Set upstream branch first:\n  git push --set-upstream origin main");
    } else {
      console.error("❌ Git push failed:", err.message);
    }
  }
}

// ---------- RUN ----------
if (organizeFiles()) {
  clearDownloadsFolder();
  gitCommitAndPush();
} else {
  console.log("⚠️ No valid files found to organize or push.");
}
