<h1>Memory Layout</h1>
<p>In Go, structs sit in memory in a contiguous block, with fields placed one after another as defined in the struct. For example this struct:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">type</span> stats <span class="token tag">struct</span> <span class="token punctuation">{</span>
	Reach    <span class="token builtin">uint16</span>
	NumPosts <span class="token builtin">uint8</span>
	NumLikes <span class="token builtin">uint8</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="type stats struct {
	Reach    uint16
	NumPosts uint8
	NumLikes uint8
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Looks like this in memory:</p>
<p><img src="https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/X8Vr5mS.png" alt="struct layout"></p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Field ordering... Matters?</h2>
</summary>
<p>the order of fields in a struct can have a big impact on memory usage. This is the same struct as above, but <em>poorly</em> designed:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">type</span> stats <span class="token tag">struct</span> <span class="token punctuation">{</span>
	NumPosts <span class="token builtin">uint8</span>
	Reach    <span class="token builtin">uint16</span>
	NumLikes <span class="token builtin">uint8</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="type stats struct {
	NumPosts uint8
	Reach    uint16
	NumLikes uint8
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>It looks like this in memory:</p>
<p><img src="https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/BaBaUjQ.png" alt="struct layout"></p>
<p>Notice that Go has "aligned" the fields, meaning that it has added some padding (wasted space) to make up for the size difference between the <code>uint16</code> and <code>uint8</code> types. It's done for execution speed, but it can lead to increased memory usage.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Should I Panic?</h2>
</summary>
<p>To be honest, you <em>should not stress</em> about <a href="https://go101.org/article/memory-layout.html" target="_blank" rel="noopener nofollow">memory layout</a>. However, if you have a specific reason to be concerned about memory usage, aligning the fields by size (largest to smallest) can help. You can also use the <a href="https://pkg.go.dev/reflect" target="_blank" rel="noopener nofollow">reflect package</a> to debug the memory layout of a struct:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">typ <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>stats<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Struct is %d bytes\n"</span><span class="token punctuation">,</span> typ<span class="token punctuation">.</span><span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="typ := reflect.TypeOf(stats{})
fmt.Printf(&quot;Struct is %d bytes\n&quot;, typ.Size())" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Real Story</h2>
</summary>
<p>I once had a server in production that held <em>a lot</em> of structs in memory. Like <em>hundreds of thousands</em> in a list. When I re-ordered the fields in the struct, the memory usage of the program dropped by over 2 gigabytes! It was a <em>huge</em> performance win.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Our over-engineering boss is at it again. He's heard about memory layout and wants to squeeze every last byte out of our structs.</p>
<p>Run the tests to see the current size of the structs, then update the struct definitions to minimize memory usage.</p>
</details>
