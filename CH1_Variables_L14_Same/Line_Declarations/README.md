<h1>Same Line Declarations</h1>
<p>You can declare multiple variables on the same line:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">mileage<span class="token punctuation">,</span> company <span class="token operator">:=</span> <span class="token number">80276</span><span class="token punctuation">,</span> <span class="token string">"Toyota"</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="mileage, company := 80276, "Toyota"" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>The above is the same as:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">mileage <span class="token operator">:=</span> <span class="token number">80276</span>
company <span class="token operator">:=</span> <span class="token string">"Toyota"</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="mileage := 80276
company := "Toyota"" title="Copy to clipboard">
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
<p>At the top of the <code>main</code> function, declare a float called <code>averageOpenRate</code> and string called <code>displayMessage</code> <em>on the same line.</em></p>
<p>Initialize them to values:</p>
<ul>
<li><code>.23</code></li>
<li><code>is the average open rate of your messages</code></li>
</ul>
<p>before they're printed.</p>
</details>
