<h1>Named Return Values</h1>
<p>Return values may be given names, and if they are, then they are treated the same as if they were new variables defined at the top of the function.</p>
<p>Named return values are best thought of as a way to document the purpose of the returned values.</p>
<p>According to the <a href="https://tour.golang.org/" target="_blank" rel="noopener nofollow">tour of go</a>:</p>
<blockquote>
<p>A return statement without arguments returns the named return values. This is known as a "naked" return. Naked return statements should be used only in short functions. They can harm readability in longer functions.</p>
</blockquote>
<p>Use naked returns if it's obvious what the purpose of the returned values is. Otherwise, use named returns for clarity.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">getCoords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// x and y are initialized with zero values</span>

	<span class="token keyword keyword-return">return</span> <span class="token comment">// automatically returns x and y</span>
<span class="token punctuation">}</span>

</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func getCoords() (x, y int) {
	// x and y are initialized with zero values

	return // automatically returns x and y
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Is the same as:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">getCoords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token tag">var</span> x <span class="token builtin">int</span>
	<span class="token tag">var</span> y <span class="token builtin">int</span>
	<span class="token keyword keyword-return">return</span> x<span class="token punctuation">,</span> y
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func getCoords() (int, int) {
	var x int
	var y int
	return x, y
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>In the first example, <code>x</code> and <code>y</code> are the return values. At the end of the function, we could simply write <code>return</code> to return the values of those two variables, rather than writing <code>return x,y</code>.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>One of our clients likes us to send text messages reminding users of life events coming up.</p>
<p>Fix the bug by using named return values in the function signature. The variables need to be automatically initialized. Order them as they appear in the code. <em>Do not alter the body of the function</em>.</p>
</details>
