<h1>Constants</h1>
<p>Constants are declared with the <code>const</code> keyword. They can't use the <code>:=</code> short declaration syntax.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">const</span> pi <span class="token operator">=</span> <span class="token number">3.14159</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="const pi = 3.14159" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Constants can be primitive types like strings, integers, booleans and floats. They <em>can not</em> be more complex types like slices, maps and structs, which are types we will explain later.</p>
<p>As the name implies, the value of a constant can't be changed after it has been declared.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Use Two Separate Constants</h2>
</summary>
<p>Something weird is happening in this code.</p>
<p>What <em>should</em> be happening is that we create 2 separate constants: <code>premiumPlanName</code> and <code>basicPlanName</code>. Right now it looks like we're trying to overwrite one of them.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Complete the code to remove the bug and create the constant <code>basicPlanName</code>.</p>
</details>
