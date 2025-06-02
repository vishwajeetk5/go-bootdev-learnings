<h1>Structs in Go</h1>
<p>We use <a href="https://go.dev/ref/spec#Struct_types" target="_blank" rel="noopener nofollow">structs</a> in Go to represent structured data. It's often convenient to group different types of variables together. For example, if we want to represent a car we could do the following:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">type</span> car <span class="token tag">struct</span> <span class="token punctuation">{</span>
	brand      <span class="token builtin">string</span>
	model      <span class="token builtin">string</span>
	doors      <span class="token builtin">int</span>
	mileage    <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="type car struct {
	brand      string
	model      string
	doors      int
	mileage    int
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>This creates a new struct type called <code>car</code>. All cars have a <code>brand</code>, <code>model</code>, <code>doors</code> and <code>mileage</code>.</p>
<p>Structs in Go are often used to represent data that you might use a dictionary or object for in other languages.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Complete the definition of the <code>messageToSend</code> struct. It needs two fields:</p>
<ul>
<li><code>phoneNumber</code> - an integer</li>
<li><code>message</code> - a string.</li>
</ul>
</details>
