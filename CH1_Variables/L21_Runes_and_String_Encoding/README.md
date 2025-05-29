<h1>Runes and String Encoding</h1>
<p>In many programming languages (cough, C, cough), a "character" is a single byte. Using <a href="https://www.asciitable.com/" target="_blank" rel="noopener nofollow">ASCII</a> encoding, the standard for the C programming language, we can represent 128 characters with 7 bits. This is enough for the English alphabet, numbers, and some special characters.</p>
<p>In Go, strings are just sequences of bytes: they can hold arbitrary data. However, Go also has a special type, <a href="https://go.dev/blog/strings" target="_blank" rel="noopener nofollow"><code>rune</code></a>, which is an alias for <code>int32</code>. This means that a <code>rune</code> is a 32-bit integer, which is large enough to hold any <a href="https://home.unicode.org/" target="_blank" rel="noopener nofollow">Unicode</a> code point.</p>
<p>When you're working with strings, you need to be aware of the encoding (bytes -&gt; representation). Go uses <a href="https://en.wikipedia.org/wiki/UTF-8" target="_blank" rel="noopener nofollow">UTF-8</a> encoding, which is a variable-length encoding.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>What Does This Mean?</h2>
</summary>
<p>There are 2 main takeaways:</p>
<ol>
<li>When you need to work with individual characters in a string, you should use the <code>rune</code> type. It breaks strings up into their individual characters, which can be more than one byte long.</li>
<li>We can include a wide variety of Unicode characters in our strings, such as emojis and Chinese characters, and Go will handle them just fine.</li>
</ol>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Boots is a <em>bear</em>. (Not a dog, haters).</p>
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-0"><label class="markdown-checkbox-label" for="checkbox-0">Run the code as-is. Notice that the simple string "boots" has 5 bytes, and 5 runes (characters).</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-1"><label class="markdown-checkbox-label" for="checkbox-1">Update the <code>name</code> variable to be the <a href="https://emojipedia.org/bear" target="_blank" rel="noopener nofollow">bear emoji</a> instead of the word "boots".</label></li>
</ol>

<div style="position: relative; isolation: isolate;">
  <pre><code>🐻
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="🐻" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>If you've got it right, you should notice that the emoji is only one rune, but it takes up 4 bytes.</p>
</details>
