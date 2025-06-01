// Test the image parsing logic
const testImages = [
  "CH3_Functions_L2_Multiple_Parameters_quiz_result.png",
  "CH3_Functions_L4_Declaration_Syntax_quiz_result.png",
  "CH1_Variables_L5_Comments_screenshot.jpg"
];

function parseImageFilename(filename) {
  console.log(`\n🔍 Testing: ${filename}`);
  
  const match = filename.match(/^(.+)\.(png|jpg|jpeg)$/i);
  if (!match) {
    console.log(`❌ Not a valid image file`);
    return null;
  }
  
  const fullName = match[1];
  const ext = match[2];
  
  console.log(`   Full name: ${fullName}`);
  console.log(`   Extension: ${ext}`);
  
  // Split by underscore and find lesson part
  const parts = fullName.split('_');
  console.log(`   Parts: [${parts.join(', ')}]`);
  
  let chapterParts = [];
  let lessonParts = [];
  let foundLesson = false;
  
  for (let i = 0; i < parts.length; i++) {
    console.log(`   Processing part ${i}: "${parts[i]}"`);
    
    if (!foundLesson && parts[i].match(/^L\d+$/)) {
      // Found lesson number (like L2, L4)
      console.log(`     → Found lesson number: ${parts[i]}`);
      foundLesson = true;
      lessonParts.push(parts[i]);
    } else if (foundLesson) {
      // After lesson number, collect lesson name parts until we hit known suffixes
      if (parts[i] === 'quiz' || parts[i] === 'result' || parts[i] === 'screenshot') {
        console.log(`     → Stopping at suffix: ${parts[i]}`);
        break; // Stop at known image suffixes
      }
      console.log(`     → Adding to lesson: ${parts[i]}`);
      lessonParts.push(parts[i]);
    } else {
      // Before lesson number, collect chapter parts
      console.log(`     → Adding to chapter: ${parts[i]}`);
      chapterParts.push(parts[i]);
    }
  }
  
  if (chapterParts.length > 0 && lessonParts.length > 0) {
    const chapter = chapterParts.join('_');
    const lesson = lessonParts.join('_');
    
    console.log(`✅ SUCCESS:`);
    console.log(`   Chapter: "${chapter}"`);
    console.log(`   Lesson: "${lesson}"`);
    console.log(`   Will organize to: ${chapter}/${lesson}/`);
    return { chapter, lesson, ext };
  } else {
    console.log(`❌ FAILED to extract chapter and lesson`);
    console.log(`   Chapter parts: [${chapterParts.join(', ')}]`);
    console.log(`   Lesson parts: [${lessonParts.join(', ')}]`);
    return null;
  }
}

console.log("=".repeat(60));
console.log("TESTING IMAGE FILENAME PARSER");
console.log("=".repeat(60));

testImages.forEach(filename => {
  parseImageFilename(filename);
});

console.log("\n" + "=".repeat(60));