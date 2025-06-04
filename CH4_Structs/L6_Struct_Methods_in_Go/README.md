<h1>Struct Methods in Go</h1>
<p>While Go is <strong>not</strong> object-oriented, it does support methods that can be defined on structs. Methods are just functions that have a receiver. A receiver is a special parameter that syntactically goes <em>before</em> the name of the function.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">type</span> rect <span class="token tag">struct</span> <span class="token punctuation">{</span>
  width <span class="token builtin">int</span>
  height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// area has a receiver of (r rect)</span>
<span class="token comment">// rect is the struct</span>
<span class="token comment">// r is the placeholder</span>
<span class="token tag">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-return">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>

<span class="token tag">var</span> r <span class="token operator">=</span> rect<span class="token punctuation">{</span>
  width<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  height<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// prints 50</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="type rect struct {
  width int
  height int
}

// area has a receiver of (r rect)
// rect is the struct
// r is the placeholder
func (r rect) area() int {
  return r.width * r.height
}

var r = rect{
  width: 5,
  height: 10,
}

fmt.Println(r.area())
// prints 50" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>A receiver is just a special kind of function parameter. In the example above, the <code>r</code> in <code>(r rect)</code> could just as easily have been <code>rec</code> or even <code>x</code>, <code>y</code> or <code>z</code>. By convention, Go code will often use the first letter of the struct's name.</p>
<p>Receivers are important because they will, as you'll learn in the exercises to come, allow us to define interfaces that our structs (and other types) can implement.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Let's clean up Textio's authentication logic. We store our user's authentication data inside an <code>authenticationInfo</code> struct. We need a method that can take that data and return a basic authorization string.</p>
<p>The format of the string should be:</p>

<div style="position: relative; isolation: isolate;">
  <pre><code>Authorization: Basic USERNAME:PASSWORD
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="Authorization: Basic USERNAME:PASSWORD" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Create a method on the <code>authenticationInfo</code> struct called <code>getBasicAuth</code> that returns the formatted string.</p>
</details>
