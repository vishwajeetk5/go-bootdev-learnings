<h1>Nested Structs in Go</h1>
<p>Structs can be nested to represent more complex entities:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">type</span> car <span class="token tag">struct</span> <span class="token punctuation">{</span>
  brand <span class="token builtin">string</span>
  model <span class="token builtin">string</span>
  doors <span class="token builtin">int</span>
  mileage <span class="token builtin">int</span>
  frontWheel wheel
  backWheel wheel
<span class="token punctuation">}</span>

<span class="token tag">type</span> wheel <span class="token tag">struct</span> <span class="token punctuation">{</span>
  radius <span class="token builtin">int</span>
  material <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="type car struct {
  brand string
  model string
  doors int
  mileage int
  frontWheel wheel
  backWheel wheel
}

type wheel struct {
  radius int
  material string
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>The fields of a struct can be accessed using the dot <code>.</code> operator.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">myCar <span class="token operator">:=</span> car<span class="token punctuation">{</span><span class="token punctuation">}</span>
myCar<span class="token punctuation">.</span>frontWheel<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">5</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="myCar := car{}
myCar.frontWheel.radius = 5" title="Copy to clipboard">
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
<p>Textio has a bug, we've been sending texts that are missing critical bits of information! Before we send text messages in Textio, we must check to make sure the required fields have non-<a href="https://go.dev/tour/basics/12" target="_blank" rel="noopener nofollow">zero values</a>.</p>
<p>Notice that the <code>user</code> struct is a nested struct within the <code>messageToSend</code> struct. Both <code>sender</code> and <code>recipient</code> are <code>user</code> struct types.</p>
<p>Complete the <code>canSendMessage</code> function. It should return <code>true</code> only if the <code>sender</code> and <code>recipient</code> fields each contain a <code>name</code> and a <code>number</code>. If any of the default zero values are present, return <code>false</code> instead.</p>
</details>
