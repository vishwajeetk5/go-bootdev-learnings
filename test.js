// fixed-auto-organizer.js - With working image parser from test
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
const DEFAULT_DOWNLOADS = "C:\\Users\\vishwajeetkoshti\\Downloads";
const PROJECT_PATH = "C:\\Users\\vishwajeetkoshti\\Desktop\\bootdev-go";

// WORKING PARSER - Copied directly from successful test
function parseFilename(filename) {
  console.log(`🔍 Parsing: ${filename}`);
  
  const isReadme = filename.toLowerCase().includes("readme");
  const isImage = filename.match(/\.(png|jpg|jpeg)$/i);
  
  if (isImage) {
    // Handle image files: CH3_Functions_L13_Early_Returns_quiz_result.png
    const match = filename.match(/^(.+)\.(png|jpg|jpeg)$/i);
    if (match) {
      const fullName = match[1];
      const ext = match[2];
      
      console.log(`   🖼️ Analyzing image: ${fullName}`);
      
      // EXACT same logic as the successful test
      const lessonMatch = fullName.match(/^(CH\d+_.+?)_(L\d+_.+?)_(?:quiz|result|screenshot|answer).*$/i);
      
      if (lessonMatch) {
        const chapter = lessonMatch[1];
        const lesson = lessonMatch[2];
        
        console.log(`✅ Image parsed: Chapter="${chapter}", Lesson="${lesson}"`);
        return { chapter, lesson, ext, isReadme: false, isImage: true, originalName: filename };
      } else {
        // Fallback strategy
        console.log(`   Strategy 1 failed, trying fallback...`);
        const lastLIndex = fullName.lastIndexOf('_L');
        if (lastLIndex !== -1) {
          const beforeL = fullName.substring(0, lastLIndex);
          const afterL = fullName.substring(lastLIndex + 1);
          
          console.log(`   Before L: "${beforeL}", After L: "${afterL}"`);
          const cleanAfterL = afterL.replace(/_(?:quiz|result|screenshot|answer).*$/i, '');
          
          if (cleanAfterL) {
            const chapter = beforeL;
            const lesson = 'L' + cleanAfterL;
            
            console.log(`✅ Image parsed (fallback): Chapter="${chapter}", Lesson="${lesson}"`);
            return { chapter, lesson, ext, isReadme: false, isImage: true, originalName: filename };
          }
        }
      }
      
      console.log(`❌ Could not parse image filename`);
    }
  } else if (isReadme) {
    // Handle README files
    const match = filename.match(/^(.+)_README\.md$/i);
    if (match) {
      const fullName = match[1];
      const lastLIndex = fullName.lastIndexOf('_L');
      if (lastLIndex !== -1) {
        const chapter = fullName.substring(0, lastLIndex).replace(/__/g, '_');
        const lesson = fullName.substring(lastLIndex + 1).replace(/__/g, '_');
        
        console.log(`✅ README parsed: Chapter="${chapter}", Lesson="${lesson}"`);
        return { chapter, lesson, ext: 'md', isReadme: true, isImage: false, originalName: filename };
      }
    }
  } else {
    // Handle code files
    const match = filename.match(/^(.+)\.go$/i);
    if (match) {
      const fullName = match[1];
      const parts = fullName.split('_');
      
      let lessonStartIndex = -1;
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].match(/^L\d+/)) {
          lessonStartIndex = i;
          break;
        }
      }
      
      if (lessonStartIndex !== -1) {
        const chapterParts = parts.slice(0, lessonStartIndex);
        const lessonParts = parts.slice(lessonStartIndex);
        const halfwayPoint = Math.ceil(lessonParts.length / 2);
        const lessonName = lessonParts.slice(0, halfwayPoint);
        
        const chapter = chapterParts.join('_').replace(/__/g, '_');
        const lesson = lessonName.join('_').replace(/__/g, '_');
        
        console.log(`✅ Code file parsed: Chapter="${chapter}", Lesson="${lesson}"`);
        return { chapter, lesson, ext: 'go', isReadme: false, isImage: false, originalName: filename };
      }
    }
  }
  
  console.log(`❌ Could not parse: ${filename}`);
  return null;
}

function organizeFiles() {
  const downloadsDir = path.join(PROJECT_PATH, "downloads");
  
  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
  }
  
  const files = fs.readdirSync(downloadsDir);
  let organized = false;
  let organizedCount = 0;

  console.log(`📂 Processing ${files.length} files in downloads...`);

  files.forEach((file) => {
    const fullPath = path.join(downloadsDir, file);
    if (!fs.statSync(fullPath).isFile()) return;

    const parsed = parseFilename(file);
    if (!parsed) {
      console.log(`⚠️ Skipping unparseable file: ${file}`);
      return;
    }

    const { chapter, lesson, ext, isReadme, isImage } = parsed;
    const lessonDir = path.join(PROJECT_PATH, chapter, lesson);
    
    if (!fs.existsSync(lessonDir)) {
      fs.mkdirSync(lessonDir, { recursive: true });
      console.log(`📁 Created: ${path.relative(PROJECT_PATH, lessonDir)}`);
    }

    let newFilename;
    if (isReadme) {
      newFilename = "README.md";
    } else if (isImage) {
      // Keep the descriptive part of the image name
      const originalParts = file.split('_');
      const suffix = originalParts.slice(-2).join('_'); // Get last 2 parts like "quiz_result.png"
      newFilename = suffix;
    } else {
      newFilename = `${lesson}.${ext}`;
    }
    
    const newPath = path.join(lessonDir, newFilename);

    if (fs.existsSync(newPath)) {
      console.log(`⚠️ File already exists: ${path.relative(PROJECT_PATH, newPath)}`);
      fs.unlinkSync(fullPath);
      return;
    }

    try {
      fs.renameSync(fullPath, newPath);
      organized = true;
      organizedCount++;
      console.log(`✅ Organized: ${file} → ${path.relative(PROJECT_PATH, newPath)}`);
    } catch (error) {
      console.error(`❌ Error organizing ${file}:`, error.message);
    }
  });

  return { success: organized, filesOrganized: organizedCount };
}

function clearDownloadsFolder() {
  const downloadsDir = path.join(PROJECT_PATH, "downloads");
  const files = fs.readdirSync(downloadsDir);
  
  files.forEach((file) => {
    const filePath = path.join(downloadsDir, file);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      try {
        fs.unlinkSync(filePath);
      } catch (error) {
        console.error(`❌ Error removing ${file}:`, error.message);
      }
    }
  });
}

function gitCommitAndPush() {
  try {
    process.chdir(PROJECT_PATH);
    
    const status = execSync("git status --porcelain", { encoding: "utf-8" });
    if (!status.trim()) {
      console.log("ℹ️ No changes to commit");
      return;
    }

    console.log("📝 Adding files to git...");
    execSync("git add .");
    
    const timestamp = new Date().toISOString().split('T')[0];
    console.log("💾 Committing changes...");
    execSync(`git commit -m "📚 Add new lessons - ${timestamp}"`);
    
    console.log("🚀 Pushing to remote...");
    execSync("git push");
    console.log("✅ Git operations completed!");
    
  } catch (error) {
    const errorMessage = error.message || error.toString();
    
    if (errorMessage.includes("no upstream")) {
      console.log("⚠️ No upstream branch set. Run: git push --set-upstream origin main");
    } else if (errorMessage.includes("nothing to commit")) {
      console.log("ℹ️ Nothing to commit, working tree clean");
    } else {
      console.error("❌ Git operation failed:", errorMessage);
    }
  }
}

function isLessonFile(filename) {
  return filename.match(/^CH\d+.*L\d+.*\.(go|md|png|jpg|jpeg)$/i);
}

function moveFromDownloads() {
  const projectDownloadsDir = path.join(PROJECT_PATH, "downloads");
  
  if (!fs.existsSync(projectDownloadsDir)) {
    fs.mkdirSync(projectDownloadsDir, { recursive: true });
  }
  
  if (!fs.existsSync(DEFAULT_DOWNLOADS)) {
    console.log(`⚠️ Downloads folder not found: ${DEFAULT_DOWNLOADS}`);
    return 0;
  }
  
  const files = fs.readdirSync(DEFAULT_DOWNLOADS);
  let movedCount = 0;
  
  files.forEach(file => {
    if (isLessonFile(file)) {
      const sourcePath = path.join(DEFAULT_DOWNLOADS, file);
      const targetPath = path.join(projectDownloadsDir, file);
      
      try {
        if (fs.existsSync(targetPath)) {
          console.log(`⚠️ File already exists in project: ${file}`);
          fs.unlinkSync(sourcePath);
          return;
        }
        
        fs.renameSync(sourcePath, targetPath);
        movedCount++;
        console.log(`📦 Moved: ${file}`);
        
      } catch (error) {
        console.error(`❌ Error moving ${file}:`, error.message);
      }
    }
  });
  
  return movedCount;
}

function runCompleteWorkflow() {
  console.log("🔄 Running complete workflow...\n");
  
  const movedCount = moveFromDownloads();
  if (movedCount === 0) {
    console.log("ℹ️ No lesson files found in Downloads");
    return;
  }
  
  console.log(`📦 Moved ${movedCount} files\n`);
  
  const orgResult = organizeFiles();
  if (!orgResult.success) {
    console.log("⚠️ No files were organized");
    return;
  }
  
  console.log(`\n📁 Organized ${orgResult.filesOrganized} files\n`);
  
  clearDownloadsFolder();
  console.log("🧹 Cleared downloads folder\n");
  
  gitCommitAndPush();
  
  console.log("\n🎉 Workflow completed successfully!");
}

function watchMode() {
  console.log("👀 Watching for lesson files...");
  console.log(`📂 Downloads: ${DEFAULT_DOWNLOADS}`);
  console.log(`📁 Project: ${PROJECT_PATH}`);
  console.log("Press Ctrl+C to stop\n");
  
  setInterval(() => {
    try {
      const files = fs.readdirSync(DEFAULT_DOWNLOADS);
      const lessonFiles = files.filter(isLessonFile);
      
      if (lessonFiles.length > 0) {
        console.log(`🔍 Found ${lessonFiles.length} lesson file(s)`);
        
        setTimeout(() => {
          runCompleteWorkflow();
          console.log("\n👀 Continuing to watch...\n");
        }, 2000);
      }
    } catch (error) {
      console.error("Error in watch mode:", error.message);
    }
  }, 3000);
}

// Main execution
const command = process.argv[2];

console.log("📚 FIXED Go Lesson Auto-Organizer\n");

switch (command) {
  case "watch":
    watchMode();
    break;
  case "sync":
    runCompleteWorkflow();
    break;
  default:
    console.log("Usage:");
    console.log("  node fixed-auto-organizer.js sync   - Organize files once");
    console.log("  node fixed-auto-organizer.js watch  - Watch and auto-organize");
    console.log("\n📁 Configuration:");
    console.log(`  Downloads: ${DEFAULT_DOWNLOADS}`);
    console.log(`  Project: ${PROJECT_PATH}`);
}