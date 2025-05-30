<h1>Declaration Syntax</h1>
<p>Developers often wonder why the declaration syntax in Go is different from the tradition established in the C family of languages.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>C-Style Syntax</h2>
</summary>
<p>The C language describes types with an expression including the name to be declared, and states what type that expression will have.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-c" tabindex="0"><code class="language-c"><span class="token keyword keyword-int">int</span> y<span class="token punctuation">;</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="int y;" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>The code above declares <code>y</code> as an <code>int</code>. In general, the type goes on the left and the expression on the right.</p>
<p>Interestingly, the creators of the Go language agreed that the C-style of declaring types in signatures gets confusing really fast - take a look at this nightmare.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-c" tabindex="0"><code class="language-c"><span class="token keyword keyword-int">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword keyword-int">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>ff<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword keyword-int">int</span> x<span class="token punctuation">,</span> <span class="token keyword keyword-int">int</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword keyword-int">int</span> b<span class="token punctuation">)</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="int (*fp)(int (*ff)(int x, int y), int b)" title="Copy to clipboard">
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
<h2>Go-Style Syntax</h2>
</summary>
<p>Go's declarations are clear, you just read them left to right, just like you would in English.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">x <span class="token builtin">int</span>
p <span class="token operator">*</span><span class="token builtin">int</span>
a <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="x int
p *int
a [3]int" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>It's nice for more complex signatures, it makes them easier to read.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">f <span class="token function">func</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="f func(func(int,int) int, int) int" title="Copy to clipboard">
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
<h2>Reference</h2>
</summary>
<p>The <a href="https://blog.golang.org/declaration-syntax" target="_blank" rel="noopener nofollow">following post on the Go blog</a> is a great resource for further reading on declaration syntax.</p>
</details>


## Quiz Results

![Quiz Screenshot](./CH3_Functions_L4_Declaration_Syntax_quiz_result.png)

*Quiz completed successfully*