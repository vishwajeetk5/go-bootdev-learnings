<h1>Anonymous Functions</h1>
<p>Anonymous functions are true to form in that they have <em>no name</em>. They're useful when defining a function that will only be used once or to create a quick <a href="https://en.wikipedia.org/wiki/Closure_(computer_programming)" target="_blank" rel="noopener nofollow">closure</a>.</p>
<p>Let's say we have a function <code>conversions</code> that accepts another function, <code>converter</code> as input:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">conversions</span><span class="token punctuation">(</span>converter <span class="token function">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	convertedX <span class="token operator">:=</span> <span class="token function">converter</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	convertedY <span class="token operator">:=</span> <span class="token function">converter</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
	convertedZ <span class="token operator">:=</span> <span class="token function">converter</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
	<span class="token keyword keyword-return">return</span> convertedX<span class="token punctuation">,</span> convertedY<span class="token punctuation">,</span> convertedZ
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func conversions(converter func(int) int, x, y, z int) (int, int, int) {
	convertedX := converter(x)
	convertedY := converter(y)
	convertedZ := converter(z)
	return convertedX, convertedY, convertedZ
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>We <em>could</em> define a function normally and then pass it in by name... but it's usually easier to just define it anonymously:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">double</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> a <span class="token operator">+</span> a
<span class="token punctuation">}</span>

<span class="token tag">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// using a named function</span>
	newX<span class="token punctuation">,</span> newY<span class="token punctuation">,</span> newZ <span class="token operator">:=</span> <span class="token function">conversions</span><span class="token punctuation">(</span>double<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
	<span class="token comment">// newX is 2, newY is 4, newZ is 6</span>

    <span class="token comment">// using an anonymous function</span>
	newX<span class="token punctuation">,</span> newY<span class="token punctuation">,</span> newZ <span class="token operator">=</span> <span class="token function">conversions</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	    <span class="token keyword keyword-return">return</span> a <span class="token operator">+</span> a
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
	<span class="token comment">// newX is 2, newY is 4, newZ is 6</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func double(a int) int {
    return a + a
}

func main() {
    // using a named function
	newX, newY, newZ := conversions(double, 1, 2, 3)
	// newX is 2, newY is 4, newZ is 6

    // using an anonymous function
	newX, newY, newZ = conversions(func(a int) int {
	    return a + a
	}, 1, 2, 3)
	// newX is 2, newY is 4, newZ is 6
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
<p>Complete the <code>printReports</code> function. It takes as input a sequence of messages, <code>intro</code>, <code>body</code>, <code>outro</code>. It should call <code>printCostReport</code> once for each message.</p>
<p>For each call of <code>printCostReport</code>, give it an anonymous function that returns the <code>cost</code> of a message as an integer. Here are the costs:</p>
<ul>
<li>Intro: 2x the message length</li>
<li>Body: 3x the message length</li>
<li>Outro: 4x the message length</li>
</ul>
<p>Use the built-in <a href="https://pkg.go.dev/builtin#len" target="_blank" rel="noopener nofollow"><code>len()</code> function</a> to get the length of a string:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">helloLen <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>
<span class="token comment">// helloLen = 5</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="helloLen := len(&quot;hello&quot;)
// helloLen = 5" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
</details>
