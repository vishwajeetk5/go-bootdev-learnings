<h1>Functions As Values</h1>
<p>Go supports <a href="https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function" target="_blank" rel="noopener nofollow">first-class</a> and higher-order functions, which are just fancy ways of saying "functions as values". Functions are just another type -- like <code>int</code>s and <code>string</code>s and <code>bool</code>s.</p>
<p>Let's assume we have two simple functions:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword keyword-return">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token tag">func</span> <span class="token function">mul</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword keyword-return">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func add(x, y int) int {
	return x + y
}

func mul(x, y int) int {
	return x * y
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>We can create a new <code>aggregate</code> function that accepts a function as its 4th argument:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">aggregate</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token builtin">int</span><span class="token punctuation">,</span> arithmetic <span class="token function">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  firstResult <span class="token operator">:=</span> <span class="token function">arithmetic</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
  secondResult <span class="token operator">:=</span> <span class="token function">arithmetic</span><span class="token punctuation">(</span>firstResult<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
  <span class="token keyword keyword-return">return</span> secondResult
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func aggregate(a, b, c int, arithmetic func(int, int) int) int {
  firstResult := arithmetic(a, b)
  secondResult := arithmetic(firstResult, c)
  return secondResult
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>It calls the given <code>arithmetic</code> function (which could be <code>add</code> or <code>mul</code>, or any other function that accepts two <code>int</code>s and returns an <code>int</code>) and applies it to three inputs instead of two. It can be used like this:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sum <span class="token operator">:=</span> <span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> add<span class="token punctuation">)</span>
	<span class="token comment">// sum is 9</span>
	product <span class="token operator">:=</span> <span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> mul<span class="token punctuation">)</span>
	<span class="token comment">// product is 24</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func main() {
	sum := aggregate(2, 3, 4, add)
	// sum is 9
	product := aggregate(2, 3, 4, mul)
	// product is 24
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Complete the <code>reformat</code> function. It takes a <code>message</code> string and a <code>formatter</code> function as input:</p>
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-0"><label class="markdown-checkbox-label" for="checkbox-0">Apply the given <code>formatter</code> <em>three times</em> to the <code>message</code></label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-1"><label class="markdown-checkbox-label" for="checkbox-1">Add a prefix of <code>TEXTIO: </code> to the result</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-2"><label class="markdown-checkbox-label" for="checkbox-2">Return the final string</label></li>
</ol>
<p>For example, if the <code>message</code> is "General Kenobi" and the <code>formatter</code> adds a period to the end of the string, the final result should be</p>

<div style="position: relative; isolation: isolate;">
  <pre><code>TEXTIO: General Kenobi...
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="TEXTIO: General Kenobi..." title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
</details>
