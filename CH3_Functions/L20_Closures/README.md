<h1>Closures</h1>
<p>A <a href="https://en.wikipedia.org/wiki/Closure_(computer_programming)" target="_blank" rel="noopener nofollow">closure</a> is a function that references variables from outside its own function body. The function may access and <em>assign</em> to the referenced variables.</p>
<p>In this example, the <code>concatter()</code> function returns a function that has reference to an <em>enclosed</em> <code>doc</code> value. Each successive call to <code>harryPotterAggregator</code> mutates that same <code>doc</code> variable.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">concatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	doc <span class="token operator">:=</span> <span class="token string">""</span>
	<span class="token keyword keyword-return">return</span> <span class="token function">func</span><span class="token punctuation">(</span>word <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		doc <span class="token operator">+=</span> word <span class="token operator">+</span> <span class="token string">" "</span>
		<span class="token keyword keyword-return">return</span> doc
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token tag">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	harryPotterAggregator <span class="token operator">:=</span> <span class="token function">concatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"Mr."</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"and"</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"Mrs."</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"Dursley"</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"of"</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"four,"</span><span class="token punctuation">)</span>
	<span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"Privet"</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">harryPotterAggregator</span><span class="token punctuation">(</span><span class="token string">"Drive"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// Mr. and Mrs. Dursley of number four, Privet Drive</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func concatter() func(string) string {
	doc := &quot;&quot;
	return func(word string) string {
		doc += word + &quot; &quot;
		return doc
	}
}

func main() {
	harryPotterAggregator := concatter()
	harryPotterAggregator(&quot;Mr.&quot;)
	harryPotterAggregator(&quot;and&quot;)
	harryPotterAggregator(&quot;Mrs.&quot;)
	harryPotterAggregator(&quot;Dursley&quot;)
	harryPotterAggregator(&quot;of&quot;)
	harryPotterAggregator(&quot;number&quot;)
	harryPotterAggregator(&quot;four,&quot;)
	harryPotterAggregator(&quot;Privet&quot;)

	fmt.Println(harryPotterAggregator(&quot;Drive&quot;))
	// Mr. and Mrs. Dursley of number four, Privet Drive
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
<p>Keeping track of how many texts we send is mission-critical at Textio. Complete the <code>adder()</code> <a href="https://en.wikipedia.org/wiki/Nested_function" target="_blank" rel="noopener nofollow">enclosing function</a>.</p>
<p>It should return a function that adds its input (an <code>int</code>) to an enclosed <code>sum</code> value, then return the new sum. In other words, it keeps a running total of the <code>sum</code> variable within a closure.</p>
</details>
