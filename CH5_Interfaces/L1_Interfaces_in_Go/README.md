<h1>Interfaces in Go</h1>
<p><a href="https://go.dev/tour/methods/9" target="_blank" rel="noopener nofollow">Interfaces</a> allow you to focus on what a type does rather than how it's built. They can help you write more flexible and reusable code by defining behaviors (like methods) that different types can share. This makes it easy to swap out or update parts of your code without changing everything else.</p>
<p>Interfaces are just collections of method signatures. A type "implements" an interface if it has methods that match the interface's method signatures.</p>
<p>In the following example, a "shape" must be able to return its area and perimeter. Both <code>rect</code> and <code>circle</code> fulfill the interface.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">type</span> shape <span class="token tag">interface</span> <span class="token punctuation">{</span>
  <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span>
  <span class="token function">perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token tag">type</span> rect <span class="token tag">struct</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">,</span> height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>
<span class="token tag">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>
<span class="token tag">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>

<span class="token tag">type</span> circle <span class="token tag">struct</span> <span class="token punctuation">{</span>
    radius <span class="token builtin">float64</span>
<span class="token punctuation">}</span>
<span class="token tag">func</span> <span class="token punctuation">(</span>c circle<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>
<span class="token tag">func</span> <span class="token punctuation">(</span>c circle<span class="token punctuation">)</span> <span class="token function">perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> <span class="token number">2</span> <span class="token operator">*</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="type shape interface {
  area() float64
  perimeter() float64
}

type rect struct {
    width, height float64
}
func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perimeter() float64 {
    return 2*r.width + 2*r.height
}

type circle struct {
    radius float64
}
func (c circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c circle) perimeter() float64 {
    return 2 * math.Pi * c.radius
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>When a type implements an interface, it can then be used as that interface type.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">printShapeData</span><span class="token punctuation">(</span>s shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Area: %v - Perimeter: %v\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func printShapeData(s shape) {
	fmt.Printf(&quot;Area: %v - Perimeter: %v\n&quot;, s.area(), s.perimeter())
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Because we say the input is of type <code>shape</code>, we know that any argument must implement the <code>.area()</code> and <code>.perimeter()</code> methods.</p>
<p>As an example, because <a href="https://go.dev/tour/methods/14" target="_blank" rel="noopener nofollow">the empty interface</a> doesn't require a type to have any methods at all, every type automatically implements the empty interface, written as:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="interface{}" title="Copy to clipboard">
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
<p>The <code>birthdayMessage</code> and <code>sendingReport</code> structs already have implementations of the <code>getMessage</code> method. The <code>getMessage</code> method returns a string, and any type that implements the method can be considered a <code>message</code> (meaning it implements the <code>message</code> interface).</p>
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-0"><label class="markdown-checkbox-label" for="checkbox-0">Add the <code>getMessage()</code> method signature as a requirement on the message interface.</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-1"><label class="markdown-checkbox-label" for="checkbox-1">Complete the <code>sendMessage</code> function. It should return:</label>
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-2"><label class="markdown-checkbox-label" for="checkbox-2">The content of the message.</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-3"><label class="markdown-checkbox-label" for="checkbox-3">The cost of the message, which is the length of the message multiplied by 3.</label></li>
</ol>
</li>
</ol>
<p><em>Notice that your code doesn't care at all about whether a specific message is a <code>birthdayMessage</code> or a <code>sendingReport</code>!</em></p>
</details>
<details>
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Tip</h2>
</summary>
<p>The length of a string can be obtained using the <code>len</code> function, which <a href="https://pkg.go.dev/builtin#len" target="_blank" rel="noopener nofollow">returns the number of bytes</a>.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">s <span class="token operator">:=</span> <span class="token string">"Hello, World!"</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 13</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="s := &quot;Hello, World!&quot;
fmt.Println(len(s))
// 13" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
</details>
