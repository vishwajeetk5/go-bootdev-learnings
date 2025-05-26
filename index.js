const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const baseDir = __dirname;
const downloadsDir = path.join(baseDir, "downloads");
const targetBaseDir = baseDir;

function parseFilename(filename) {
  // First check if it's a README file
  const isReadme = filename.toLowerCase().includes("readme");
  
  // Remove _README part from filename for parsing if present
  const cleanFilename = filename.replace(/_README/i, '');
  
  // Enhanced regex to handle your specific filename format
  const match = cleanFilename.match(
    /^CH(\d+)__([^_]+(?:_[^_]+)*)_L(\d+)__([^_]+(?:_[^_]+)*)\.(go|md)$/i
  );
  
  if (!match) {
    console.log(`⚠️ Could not parse filename: ${filename}`);
    console.log(`   Cleaned filename: ${cleanFilename}`);
    return null;
  }

  const [, chNum, chName, lNum, lName, ext] = match;
  const chapter = `CH${chNum}_${chName}`;
  const lesson = `L${lNum}_${lName}`;

  console.log(`🔍 Parsed: ${filename} → Chapter: ${chapter}, Lesson: ${lesson}, README: ${isReadme}`);

  return { chapter, lesson, ext, isReadme, originalName: filename };
}

function ensureDownloadsDir() {
  if (!fs.existsSync(downloadsDir)) {
    console.log(`📁 Creating downloads directory: ${downloadsDir}`);
    fs.mkdirSync(downloadsDir, { recursive: true });
  }
}

function organizeFiles() {
  ensureDownloadsDir();
  
  const files = fs.readdirSync(downloadsDir);
  let organized = false;
  let organizedCount = 0;

  console.log(`📂 Found ${files.length} items in downloads folder`);

  files.forEach((file) => {
    const fullPath = path.join(downloadsDir, file);
    
    // Skip directories and non-files
    if (!fs.statSync(fullPath).isFile()) {
      console.log(`⏭️ Skipping non-file: ${file}`);
      return;
    }

    const parsed = parseFilename(file);
    if (!parsed) return;

    const { chapter, lesson, ext, isReadme } = parsed;

    // Create directory structure
    const lessonDir = path.join(targetBaseDir, chapter, lesson);
    if (!fs.existsSync(lessonDir)) {
      fs.mkdirSync(lessonDir, { recursive: true });
      console.log(`📁 Created directory: ${path.relative(baseDir, lessonDir)}`);
    }

    // Determine new filename
    const newFilename = isReadme ? "README.md" : `${lesson}.${ext}`;
    const newPath = path.join(lessonDir, newFilename);

    // Check if file already exists at destination
    if (fs.existsSync(newPath)) {
      console.log(`⚠️ File already exists at destination: ${path.relative(baseDir, newPath)}`);
      // You might want to handle this case differently (overwrite, skip, rename)
      return;
    }

    // Move the file
    try {
      fs.renameSync(fullPath, newPath);
      organized = true;
      organizedCount++;
      console.log(`✅ Moved: ${file} → ${path.relative(baseDir, newPath)}`);
    } catch (error) {
      console.error(`❌ Error moving ${file}:`, error.message);
    }
  });

  console.log(`📊 Successfully organized ${organizedCount} files`);
  return organized;
}

function clearDownloadsFolder() {
  console.log("🧹 Cleaning downloads folder...");
  
  const files = fs.readdirSync(downloadsDir);
  let clearedCount = 0;
  
  files.forEach((file) => {
    const filePath = path.join(downloadsDir, file);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      try {
        fs.unlinkSync(filePath);
        clearedCount++;
        console.log(`🗑️ Removed: ${file}`);
      } catch (error) {
        console.error(`❌ Error removing ${file}:`, error.message);
      }
    }
  });
  
  console.log(`🧹 Cleared ${clearedCount} files from downloads`);
}

function checkGitStatus() {
  try {
    const status = execSync("git status --porcelain", { encoding: "utf-8" });
    return status.trim().length > 0;
  } catch (error) {
    console.log("⚠️ Not a git repository or git not available");
    return false;
  }
}

function gitCommitAndPush() {
  console.log("🔍 Checking git status...");
  
  if (!checkGitStatus()) {
    console.log("ℹ️ No changes to commit");
    return;
  }

  try {
    console.log("📝 Adding files to git...");
    execSync("git add .", { stdio: "inherit" });
    
    console.log("💾 Committing changes...");
    const timestamp = new Date().toISOString().split('T')[0];
    execSync(`git commit -m "📚 Add new lessons - ${timestamp}"`, { stdio: "inherit" });
    
    console.log("🚀 Pushing to remote...");
    execSync("git push", { stdio: "inherit" });
    console.log("✅ Git commit and push completed successfully!");
    
  } catch (err) {
    const errorMessage = err.message || err.toString();
    
    if (errorMessage.includes("no upstream") || errorMessage.includes("no tracking information")) {
      console.log("⚠️ No upstream branch set. Run:");
      console.log("   git push --set-upstream origin main");
      console.log("   (or replace 'main' with your branch name)");
    } else if (errorMessage.includes("nothing to commit")) {
      console.log("ℹ️ Nothing to commit, working tree clean");
    } else {
      console.error("❌ Git operation failed:", errorMessage);
    }
  }
}

function displaySummary(organized) {
  console.log("\n" + "=".repeat(50));
  if (organized) {
    console.log("🎉 File organization completed successfully!");
    console.log("📁 Files have been organized into chapter/lesson structure");
    console.log("🧹 Downloads folder has been cleaned");
    console.log("📝 Changes have been committed and pushed to git");
  } else {
    console.log("ℹ️ No valid files found to organize");
    console.log("📂 Check the downloads folder for files matching the expected pattern:");
    console.log("   CHX__ChapterName_LX__LessonName.go");
    console.log("   CHX__ChapterName_LX__LessonName_README.md");
  }
  console.log("=".repeat(50));
}

// ---------- MAIN EXECUTION ----------
console.log("🚀 Starting file organization process...\n");

try {
  const wasOrganized = organizeFiles();
  
  if (wasOrganized) {
    clearDownloadsFolder();
    gitCommitAndPush();
  }
  
  displaySummary(wasOrganized);
  
} catch (error) {
  console.error("💥 Unexpected error:", error.message);
  process.exit(1);
}