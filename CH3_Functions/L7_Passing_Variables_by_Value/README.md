<h1>Passing Variables by Value</h1>
<p>Variables in Go are passed by value (except for a few data types we haven't covered yet). "Pass by value" means that when a variable is passed into a function, that function receives a <em>copy</em> of the variable. The function is unable to mutate the caller's original data.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">:=</span> <span class="token number">5</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token comment">// still prints 5,</span>
    <span class="token comment">// because the increment function</span>
    <span class="token comment">// received a copy of x</span>
<span class="token punctuation">}</span>

<span class="token tag">func</span> <span class="token function">increment</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func main() {
    x := 5
    increment(x)

    fmt.Println(x)
    // still prints 5,
    // because the increment function
    // received a copy of x
}

func increment(x int) {
    x++
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
<h2>Assignment</h2>
</summary>
<p>Fix the bugs in the <code>monthlyBillIncrease</code> and <code>getBillForMonth</code> functions.</p>
<ul>
<li><code>monthlyBillIncrease</code>: Returns the increase in the bill from the previous to the current month. If the bill decreased, it should return a negative number.</li>
<li><code>getBillForMonth</code>: Returns the bill for the given month.</li>
</ul>
<p>It looks like whoever wrote the <code>getBillForMonth</code> function thought that they could pass in the <code>bill</code> parameter, update it inside the function, and that update would apply in the parent function (<code>monthlyBillIncrease</code>). <em>They were wrong</em>.</p>
<p>Change the <code>getBillForMonth</code> function to explicitly <em>return</em> the bill for the given month, and be sure to capture that return value properly in the <code>monthlyBillIncrease</code> function.</p>
<p>The function signature for <code>getBillForMonth</code> should only take 2 parameters once you're done.</p>
</details>
