<h1>Conditionals</h1>
<p><code>if</code> statements in Go do not use parentheses around the condition:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword keyword-if">if</span> height <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"You are tall enough!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="if height > 4 {
    fmt.Println("You are tall enough!")
}" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p><code>else if</code> and <code>else</code> are supported as you might expect:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword keyword-if">if</span> height <span class="token operator">&gt;</span> <span class="token number">6</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"You are super tall!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword keyword-else">else</span> <span class="token keyword keyword-if">if</span> height <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"You are tall enough!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword keyword-else">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"You are not tall enough!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="if height > 6 {
    fmt.Println("You are super tall!")
} else if height > 4 {
    fmt.Println("You are tall enough!")
} else {
    fmt.Println("You are not tall enough!")
}" title="Copy to clipboard" data-event-click="true">
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
<p>Fix the bug on line <code>12</code>. If <code>messageLen</code> is less than or equal to the <code>maxMessageLen</code> the program should print "Message sent", else it should print "Message not sent".</p>
</details>
<details>
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Tips</h2>
</summary>
<p>Here are some of the comparison operators in Go:</p>
<ul>
<li><code>==</code> equal to</li>
<li><code>!=</code> not equal to</li>
<li><code>&lt;</code> less than</li>
<li><code>&gt;</code> greater than</li>
<li><code>&lt;=</code> less than or equal to</li>
<li><code>&gt;=</code> greater than or equal to</li>
</ul>
</details>
