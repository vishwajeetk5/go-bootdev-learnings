<h1>Basic Variables</h1>
<ul>
<li><code>bool</code>: a boolean value, either <code>true</code> or <code>false</code></li>
<li><code>string</code>: a sequence of characters</li>
<li><code>int</code>: a signed integer</li>
<li><code>float64</code>: a floating-point number</li>
<li><code>byte</code>: exactly what it sounds like: 8 bits of data</li>
</ul>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Declaring a Variable the Sad Way</h2>
</summary>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">var</span> mySkillIssues <span class="token builtin">int</span>
mySkillIssues <span class="token operator">=</span> <span class="token number">42</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="var mySkillIssues int
mySkillIssues = 42" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>The first line, <code>var mySkillIssues int</code>, defaults the <code>mySkillIssues</code> variable to its zero value, <code>0</code>. On the next line, <code>42</code> overwrites the zero value.</p>
<p><em>We'll talk about a better way to declare variables in the next lesson.</em></p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Initialize the variables from the print statement to <code>int</code>, <code>float64</code>, <code>bool</code> and <code>string</code> with their zero values, respectively.</p>
</details>
