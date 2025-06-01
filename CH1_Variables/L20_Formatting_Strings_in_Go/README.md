<h1>Formatting Strings in Go</h1>
<p>Go follows the <a href="https://cplusplus.com/reference/cstdio/printf/" target="_blank" rel="noopener nofollow">printf tradition</a> from the C language. In my opinion, string formatting/interpolation in Go is <em>less</em> elegant than Python's f-strings, unfortunately.</p>
<ul>
<li><a href="https://pkg.go.dev/fmt#Printf" target="_blank" rel="noopener nofollow">fmt.Printf</a> - Prints a formatted string to <a href="https://stackoverflow.com/questions/3385201/confused-about-stdin-stdout-and-stderr" target="_blank" rel="noopener nofollow">standard out</a>.</li>
<li><a href="https://pkg.go.dev/fmt#Sprintf" target="_blank" rel="noopener nofollow">fmt.Sprintf()</a> - Returns the formatted string</li>
</ul>
<p>These following "formatting verbs" work with the formatting functions above:</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Default Representation</h2>
</summary>
<p>The <code>%v</code> variant prints the Go syntax representation of a value, it's a nice default.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"I am %v years old"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// I am 10 years old</span>

s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"I am %v years old"</span><span class="token punctuation">,</span> <span class="token string">"way too many"</span><span class="token punctuation">)</span>
<span class="token comment">// I am way too many years old</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="s := fmt.Sprintf("I am %v years old", 10)
// I am 10 years old

s := fmt.Sprintf("I am %v years old", "way too many")
// I am way too many years old" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>If you want to print in a more specific way, you can use the following formatting verbs:</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>String</h2>
</summary>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"I am %s years old"</span><span class="token punctuation">,</span> <span class="token string">"way too many"</span><span class="token punctuation">)</span>
<span class="token comment">// I am way too many years old</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="s := fmt.Sprintf("I am %s years old", "way too many")
// I am way too many years old" title="Copy to clipboard" data-event-click="true">
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
<h2>Integer</h2>
</summary>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"I am %d years old"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// I am 10 years old</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="s := fmt.Sprintf("I am %d years old", 10)
// I am 10 years old" title="Copy to clipboard" data-event-click="true">
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
<h2>Float</h2>
</summary>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"I am %f years old"</span><span class="token punctuation">,</span> <span class="token number">10.523</span><span class="token punctuation">)</span>
<span class="token comment">// I am 10.523000 years old</span>

<span class="token comment">// The ".2" rounds the number to 2 decimal places</span>
s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"I am %.2f years old"</span><span class="token punctuation">,</span> <span class="token number">10.523</span><span class="token punctuation">)</span>
<span class="token comment">// I am 10.52 years old</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="s := fmt.Sprintf("I am %f years old", 10.523)
// I am 10.523000 years old

// The ".2" rounds the number to 2 decimal places
s := fmt.Sprintf("I am %.2f years old", 10.523)
// I am 10.52 years old" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>If you're interested in all the formatting options, you can look at the <code>fmt</code> package's <a href="https://pkg.go.dev/fmt#hdr-Printing" target="_blank" rel="noopener nofollow">docs</a>.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Create a new variable called <code>msg</code> on line 9 and use the appropriate formatting function to return a string that contains following:</p>

<div style="position: relative; isolation: isolate;">
  <pre><code>Hi NAME, your open rate is OPENRATE percentNEWLINE
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="Hi NAME, your open rate is OPENRATE percentNEWLINE" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<ul>
<li>Replace <code>NAME</code> with the variable <code>name</code>,</li>
<li>Replace <code>OPENRATE</code> with the variable <code>openRate</code> rounded to the nearest "tenths" place, e.g <code>10.523</code> should be rounded down to <code>10.5</code></li>
<li>The word percent should appear as part of the string following the open rate value</li>
<li>Replace <code>NEWLINE</code> with the newline <a href="https://en.wikipedia.org/wiki/Newline" target="_blank" rel="noopener nofollow"><code>\n</code></a> escape sequence.</li>
</ul>
</details>
