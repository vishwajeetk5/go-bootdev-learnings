<h1>Embedded Structs</h1>
<p>Go is not an <a href="https://en.wikipedia.org/wiki/Object-oriented_programming" target="_blank" rel="noopener nofollow">object-oriented</a> language. However, embedded structs provide a kind of <em>data-only</em> inheritance that can be useful at times. Keep in mind, Go doesn't support classes or inheritance in the <em>complete</em> sense, but embedded structs are a way to elevate and <strong>share fields between struct definitions.</strong></p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">type</span> car <span class="token tag">struct</span> <span class="token punctuation">{</span>
  brand <span class="token builtin">string</span>
  model <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token tag">type</span> truck <span class="token tag">struct</span> <span class="token punctuation">{</span>
  <span class="token comment">// "car" is embedded, so the definition of a</span>
  <span class="token comment">// "truck" now also additionally contains all</span>
  <span class="token comment">// of the fields of the car struct</span>
  car
  bedSize <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="type car struct {
  brand string
  model string
}

type truck struct {
  // &quot;car&quot; is embedded, so the definition of a
  // &quot;truck&quot; now also additionally contains all
  // of the fields of the car struct
  car
  bedSize int
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
<h2>Embedded vs. Nested</h2>
</summary>
<ul>
<li>Unlike nested structs, an embedded struct's fields are accessed at the top level like normal fields.</li>
<li>Like nested structs, you assign the promoted fields with the embedded struct in a <a href="https://golang.org/ref/spec#Composite_literals" target="_blank" rel="noopener nofollow">composite literal</a>.</li>
</ul>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">lanesTruck <span class="token operator">:=</span> truck<span class="token punctuation">{</span>
  bedSize<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  car<span class="token punctuation">:</span> car<span class="token punctuation">{</span>
    brand<span class="token punctuation">:</span> <span class="token string">"Toyota"</span><span class="token punctuation">,</span>
    model<span class="token punctuation">:</span> <span class="token string">"Camry"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>lanesTruck<span class="token punctuation">.</span>brand<span class="token punctuation">)</span> <span class="token comment">// Toyota</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>lanesTruck<span class="token punctuation">.</span>model<span class="token punctuation">)</span> <span class="token comment">// Camry</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="lanesTruck := truck{
  bedSize: 10,
  car: car{
    brand: &quot;Toyota&quot;,
    model: &quot;Camry&quot;,
  },
}

fmt.Println(lanesTruck.brand) // Toyota
fmt.Println(lanesTruck.model) // Camry" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>In the example above you can see that both <code>brand</code> and <code>model</code> are accessible from the top-level, while the nested equivalent to this object would require you to access these fields via a nested <code>car</code> struct: <code>lanesTruck.car.brand</code> or <code>lanesTruck.car.model</code>.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>At Textio, a "user" struct represents an account holder, and a "sender" is just a "user" with some additional "sender" specific data. A "sender" is a user that has a <code>rateLimit</code> field that tells us how many messages they are allowed to send.</p>
<p>Fix the bug by embedding the proper struct in the other.</p>
</details>
