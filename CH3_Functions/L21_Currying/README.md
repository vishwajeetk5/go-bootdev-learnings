<h1>Currying</h1>
<p>Function <a href="https://en.wikipedia.org/wiki/Currying" target="_blank" rel="noopener nofollow">currying</a> is a concept from functional programming and involves <a href="https://en.wikipedia.org/wiki/Partial_application" target="_blank" rel="noopener nofollow">partial application</a> of functions. It allows a function with multiple arguments to be transformed into a sequence of functions, each taking a single argument.</p>
<p>Let's simulate this behavior. For example:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  squareFunc <span class="token operator">:=</span> <span class="token function">selfMath</span><span class="token punctuation">(</span>multiply<span class="token punctuation">)</span>
  doubleFunc <span class="token operator">:=</span> <span class="token function">selfMath</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>

  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">squareFunc</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// prints 25</span>

  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">doubleFunc</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// prints 10</span>
<span class="token punctuation">}</span>

<span class="token tag">func</span> <span class="token function">multiply</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-return">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span>

<span class="token tag">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-return">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token tag">func</span> <span class="token function">selfMath</span><span class="token punctuation">(</span>mathFunc <span class="token function">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token tag">func</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-return">return</span> <span class="token function">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> <span class="token function">mathFunc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func main() {
  squareFunc := selfMath(multiply)
  doubleFunc := selfMath(add)

  fmt.Println(squareFunc(5))
  // prints 25

  fmt.Println(doubleFunc(5))
  // prints 10
}

func multiply(x, y int) int {
  return x * y
}

func add(x, y int) int {
  return x + y
}

func selfMath(mathFunc func(int, int) int) func (int) int {
  return func(x int) int {
    return mathFunc(x, x)
  }
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>In the example above, the <code>selfMath</code> function takes in a function as its parameter and returns a function that itself returns the value of running that input function on its parameter.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>The Mailio API needs a very robust error-logging system so we can see when things are going awry in the back-end system. We need a function that can create a custom "logger" (a function that prints to the console) given a specific formatter.</p>
<p>Complete the <code>getLogger</code> function. It should take as input a <code>formatter</code> function and <code>return</code> <em>a new function</em>. The new logger function takes as input two strings and passes them to the <code>formatter</code>, then prints the result. Keep the order of the strings.</p>
</details>
