<h1>The Initial Statement of an If Block</h1>
<p>An <code>if</code> conditional can have an "initial" statement. The variable(s) created in the initial statement are <em>only</em> defined within the scope of the <code>if</code> body.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword keyword-if">if</span> INITIAL_STATEMENT<span class="token punctuation">;</span> CONDITION <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="if INITIAL_STATEMENT; CONDITION {
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
<h2>Why Would I Use This?</h2>
</summary>
<p>It has two valuable purposes:</p>
<ol>
<li>It's a bit shorter</li>
<li>It limits the scope of the initialized variable(s) to the <code>if</code> block</li>
</ol>
<p>For example, instead of writing:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">length <span class="token operator">:=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span>
<span class="token keyword keyword-if">if</span> length <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Email is invalid"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="length := getLength(email)
if length &lt; 1 {
    fmt.Println("Email is invalid")
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>We can do:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword keyword-if">if</span> length <span class="token operator">:=</span> <span class="token function">getLength</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span> length <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Email is invalid"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="if length := getLength(email); length &lt; 1 {
    fmt.Println("Email is invalid")
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>In the example above, <code>length</code> isn't available in the parent scope, which is nice because we don't need it there - we won't accidentally use it elsewhere in the function.</p>
</details>


## Quiz Results

![Quiz Screenshot](./CH2_Conditionals_L2_The_Initial_Statement_of_an_If_Block_quiz_result.png)

*Quiz completed successfully*