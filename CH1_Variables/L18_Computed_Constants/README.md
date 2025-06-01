<h1>Computed Constants</h1>
<p>Constants must be known at compile time. They are <em>usually</em> declared with a static value:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">const</span> myInt <span class="token operator">=</span> <span class="token number">15</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="const myInt = 15" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>However, constants <em>can be computed</em> as long as the computation can happen at <em>compile time</em>.</p>
<p>For example, this is valid:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">const</span> firstName <span class="token operator">=</span> <span class="token string">"Lane"</span>
<span class="token tag">const</span> lastName <span class="token operator">=</span> <span class="token string">"Wagner"</span>
<span class="token tag">const</span> fullName <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> lastName
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="const firstName = "Lane"
const lastName = "Wagner"
const fullName = firstName + " " + lastName" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>That said, you <em>cannot</em> declare a constant that can only be computed at run-time like you can in JavaScript. This breaks:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token comment">// the current time can only be known when the program is running</span>
<span class="token tag">const</span> currentTime <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="// the current time can only be known when the program is running
const currentTime = time.Now()" title="Copy to clipboard" data-event-click="true">
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
<p>Keeping track of time in a message-sending application is <em>critical</em>. Imagine getting an appointment reminder an hour <strong>after</strong> your doctor's visit.</p>
<p>Complete the code using a computed constant to print the number of seconds in an hour.</p>
</details>
