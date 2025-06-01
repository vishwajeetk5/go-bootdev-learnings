// Test the image parsing logic
const testImages = [
  "CH3_Functions_L13_Early_Returns_quiz_result.png",
  "CH3_Functions_L2_Multiple_Parameters_quiz_result.png", 
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
  
  // Strategy 1: Look for pattern CHX_ChapterName_LX_LessonName_suffix
  const lessonMatch = fullName.match(/^(CH\d+_.+?)_(L\d+_.+?)_(?:quiz|result|screenshot|answer).*$/i);
  
  if (lessonMatch) {
    const chapter = lessonMatch[1];
    const lesson = lessonMatch[2];
    
    console.log(`✅ SUCCESS (Strategy 1):`);
    console.log(`   Chapter: "${chapter}"`);
    console.log(`   Lesson: "${lesson}"`);
    return { chapter, lesson, ext };
  }
  
  console.log(`   Strategy 1 failed, trying fallback...`);
  
  // Strategy 2: Find last _L and clean suffixes
  const lastLIndex = fullName.lastIndexOf('_L');
  if (lastLIndex !== -1) {
    const beforeL = fullName.substring(0, lastLIndex);
    const afterL = fullName.substring(lastLIndex + 1);
    
    console.log(`   Before L: "${beforeL}"`);
    console.log(`   After L: "${afterL}"`);
    
    // Remove known suffixes from the end
    const cleanAfterL = afterL.replace(/_(?:quiz|result|screenshot|answer).*$/i, '');
    console.log(`   Clean after L: "${cleanAfterL}"`);
    
    if (cleanAfterL) {
      const chapter = beforeL;
      const lesson = 'L' + cleanAfterL;
      
      console.log(`✅ SUCCESS (Strategy 2):`);
      console.log(`   Chapter: "${chapter}"`);
      console.log(`   Lesson: "${lesson}"`);
      return { chapter, lesson, ext };
    }
  }
  
  console.log(`❌ FAILED - could not parse`);
  return null;
}

console.log("=".repeat(60));
console.log("TESTING IMAGE FILENAME PARSER");
console.log("=".repeat(60));

testImages.forEach(filename => {
  parseImageFilename(filename);
});

console.log("\n" + "=".repeat(60));