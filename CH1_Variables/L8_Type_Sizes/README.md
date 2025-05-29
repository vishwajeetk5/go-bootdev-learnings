<h1>Type Sizes</h1>
<p>Integers, <a href="https://www.cs.utah.edu/~germain/PPS/Topics/unsigned_integer.html#:~:text=Unsigned%20Integers,negative%20(zero%20or%20positive)." target="_blank" rel="noopener nofollow">uints</a>, <a href="https://techterms.com/definition/floatingpoint" target="_blank" rel="noopener nofollow">floats</a>, and <a href="https://www.cloudhadoop.com/2018/12/golang-tutorials-complex-types-numbers.html#:~:text=Golang%20Complex%20Type%20Numbers,complex%20number%20is%2012.8i." target="_blank" rel="noopener nofollow">complex</a> numbers all have type sizes.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Whole Numbers (No Decimal)</h2>
</summary>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token builtin">int</span>  <span class="token builtin">int8</span>  <span class="token builtin">int16</span>  <span class="token builtin">int32</span>  <span class="token builtin">int64</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="int  int8  int16  int32  int64" title="Copy to clipboard" data-event-click="true">
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
<h2>Positive Whole Numbers (No Decimal)</h2>
</summary>
<p><em>"uint" stands for "unsigned integer".</em></p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token builtin">uint</span> <span class="token builtin">uint8</span> <span class="token builtin">uint16</span> <span class="token builtin">uint32</span> <span class="token builtin">uint64</span> <span class="token builtin">uintptr</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="uint uint8 uint16 uint32 uint64 uintptr" title="Copy to clipboard" data-event-click="true">
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
<h2>Signed Decimal Numbers</h2>
</summary>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token builtin">float32</span> <span class="token builtin">float64</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="float32 float64" title="Copy to clipboard" data-event-click="true">
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
<h2>Complex Numbers (a Complex Number Has a Real and Imaginary Part)</h2>
</summary>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token builtin">complex64</span> <span class="token builtin">complex128</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="complex64 complex128" title="Copy to clipboard" data-event-click="true">
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
<h2>What's the Deal With the Sizes?</h2>
</summary>
<p>The size (8, 16, 32, 64, 128, etc) represents how many <a href="https://en.wikipedia.org/wiki/Bit" target="_blank" rel="noopener nofollow">bits</a> in memory will be used to store the variable. The "default" <code>int</code> and <code>uint</code> types refer to their respective 32 or 64-bit sizes depending on the environment of the user.</p>
<p>The "standard" sizes that should be used unless you have a specific performance need (e.g. using less memory) are:</p>
<ul>
<li><code>int</code></li>
<li><code>uint</code></li>
<li><code>float64</code></li>
<li><code>complex128</code></li>
</ul>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Converting Between Types</h2>
</summary>
<p>Some types can be easily converted like this:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">temperatureFloat <span class="token operator">:=</span> <span class="token number">88.26</span>
temperatureInt <span class="token operator">:=</span> <span class="token function">int64</span><span class="token punctuation">(</span>temperatureFloat<span class="token punctuation">)</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="temperatureFloat := 88.26
temperatureInt := int64(temperatureFloat)" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Casting a float to an integer in this way <a href="https://techterms.com/definition/truncate" target="_blank" rel="noopener nofollow">truncates</a> the floating point portion.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Our Textio customers want to know how long they have had accounts with us.</p>
<p>On line 7, create a <code>accountAgeInt</code> variable and assign it the value of <code>accountAgeFloat</code> truncated to an integer.</p>
</details>
