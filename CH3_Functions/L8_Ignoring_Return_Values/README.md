<h1>Ignoring Return Values</h1>
<p>A function can return a value that the caller doesn't care about. We can explicitly ignore variables by using an underscore, or more precisely, the <a href="https://go.dev/doc/effective_go#blank" target="_blank" rel="noopener nofollow">blank identifier <code>_</code></a>.</p>
<p>For example:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span>
<span class="token punctuation">}</span>

<span class="token comment">// ignore y value</span>
x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func getPoint() (x int, y int) {
    return 3, 4
}

// ignore y value
x, _ := getPoint()" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Even though <code>getPoint()</code> returns two values, we can capture the first one and ignore the second. In Go, the blank identifier isn't just a convention; it's a real language feature that completely discards the value.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Why Might You Ignore a Return Value?</h2>
</summary>
<p>Maybe a function called <code>getCircle</code> returns the center point and the radius, but you only need the radius for your calculation. In that case, you can ignore the center point variable.</p>
<p>The Go compiler will <strong>throw an error</strong> if you have any unused variable declarations in your code, so you <em>need</em> to ignore anything you don't intend to use.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-0"><label class="markdown-checkbox-label" for="checkbox-0">Run the code as-is. You should get a compiler error.</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-1"><label class="markdown-checkbox-label" for="checkbox-1">Fix the <code>getProductMessage</code> to ignore the unused return value.</label></li>
</ol>
</details>
