// Test parser to debug exactly what's happening
const testFiles = [
  "CH1__Variables_L4__Why_Go__README.md",
  "CH1__Variables_L4__Why_Go__L4__Why_Go_.go"
];

function parseFilename(filename) {
  console.log(`\n🔍 Testing: ${filename}`);
  
  const isReadme = filename.toLowerCase().includes("readme");
  console.log(`   Is README: ${isReadme}`);
  
  let match;
  
  if (isReadme) {
    // Try different patterns for README
    console.log(`   Trying README pattern...`);
    match = filename.match(/^(CH\d+__[^_]+(?:_[^_]+)*?)_(L\d+__[^_]+(?:_[^_]+)*?)_README\.md$/i);
    console.log(`   Match result:`, match);
  } else {
    // Try different patterns for code files
    console.log(`   Trying code file pattern...`);
    match = filename.match(/^(CH\d+__[^_]+(?:_[^_]+)*?)_(L\d+__[^_]+(?:_[^_]+)*?)_(L\d+__[^_]+(?:_[^_]+)*?)\.go$/i);
    console.log(`   Match result:`, match);
  }
  
  if (!match) {
    console.log(`❌ NO MATCH FOUND`);
    
    // Let's try simpler patterns
    console.log(`   Trying simpler patterns...`);
    
    if (isReadme) {
      // Simpler README pattern
      const simpleMatch = filename.match(/^(.+)_README\.md$/i);
      console.log(`   Simple README match:`, simpleMatch);
      
      if (simpleMatch) {
        const fullName = simpleMatch[1];
        console.log(`   Full name: ${fullName}`);
        
        // Try to split at the last L
        const lastLIndex = fullName.lastIndexOf('_L');
        if (lastLIndex !== -1) {
          const chapter = fullName.substring(0, lastLIndex);
          const lesson = fullName.substring(lastLIndex + 1);
          console.log(`   Split: Chapter="${chapter}", Lesson="${lesson}"`);
          return { chapter, lesson, ext: 'md', isReadme: true, originalName: filename };
        }
      }
    } else {
      // Simpler code file pattern
      const simpleMatch = filename.match(/^(.+)\.go$/i);
      console.log(`   Simple code match:`, simpleMatch);
      
      if (simpleMatch) {
        const fullName = simpleMatch[1];
        console.log(`   Full name: ${fullName}`);
        
        // Try to find the pattern: ChapterName_LessonName_LessonName
        const parts = fullName.split('_');
        console.log(`   Parts:`, parts);
        
        // Find where lesson starts (first part that starts with L and has numbers)
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
          
          // For lesson, take up to the duplicate (usually halfway point)
          const halfwayPoint = Math.ceil(lessonParts.length / 2);
          const lessonName = lessonParts.slice(0, halfwayPoint);
          
          const chapter = chapterParts.join('_');
          const lesson = lessonName.join('_');
          
          console.log(`   Final: Chapter="${chapter}", Lesson="${lesson}"`);
          return { chapter, lesson, ext: 'go', isReadme: false, originalName: filename };
        }
      }
    }
    
    console.log(`❌ Could not parse at all`);
    return null;
  }

  let chapter, lesson;
  if (isReadme) {
    [, chapter, lesson] = match;
  } else {
    [, chapter, lesson] = match;
  }
  
  // Clean up the names
  const cleanChapter = chapter.replace(/__/g, '_');
  const cleanLesson = lesson.replace(/__/g, '_');

  console.log(`✅ Success:`);
  console.log(`   Raw Chapter: ${chapter} → Clean: ${cleanChapter}`);
  console.log(`   Raw Lesson: ${lesson} → Clean: ${cleanLesson}`);
  
  return { 
    chapter: cleanChapter, 
    lesson: cleanLesson, 
    ext: isReadme ? 'md' : 'go', 
    isReadme, 
    originalName: filename 
  };
}

// Test the files
console.log("=".repeat(50));
console.log("TESTING PARSER");
console.log("=".repeat(50));

testFiles.forEach(filename => {
  const result = parseFilename(filename);
  console.log(`\n📋 RESULT for ${filename}:`);
  if (result) {
    console.log(`   ✅ Parsed successfully`);
    console.log(`   📁 Will create: ${result.chapter}/${result.lesson}/`);
    console.log(`   📄 File: ${result.isReadme ? 'README.md' : result.lesson + '.go'}`);
  } else {
    console.log(`   ❌ Failed to parse`);
  }
});

console.log("\n" + "=".repeat(50));