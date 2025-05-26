<h1>Functions</h1>
<p>Functions in Go can take zero or more arguments.</p>
<p>To make code easier to read, the variable type comes <em>after</em> the variable name.</p>
<p>For example, the following function:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">sub</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-return">return</span> x<span class="token operator">-</span>y
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func sub(x int, y int) int {
  return x-y
}" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Accepts two integer parameters and returns another integer.</p>
<p>Here, <code>func sub(x int, y int) int</code> is known as the "function signature".</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>We often will need to manipulate strings in our messaging app. For example, adding some personalization by using a customer's name within a template. The <code>concat</code> function should take two strings and smash them together.</p>
<ul>
<li><code>hello</code> + <code>world</code> = <code>helloworld</code></li>
</ul>
<p>Fix the <a href="https://www.devx.com/open-source-zone/programming-basics-the-function-signature/#:~:text=A%20function%20signature%20includes%20the%20function%20name%2C%20its%20arguments%2C%20and%20in%20some%20languages%2C%20the%20return%20type." target="_blank" rel="noopener nofollow">function signature</a> of <code>concat</code> to reflect its behavior.</p>
</details>
