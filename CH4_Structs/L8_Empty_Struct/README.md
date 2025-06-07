<h1>Empty Struct</h1>
<p><a href="https://dave.cheney.net/2014/03/25/the-empty-struct" target="_blank" rel="noopener nofollow">Empty structs</a> are used in Go as a <a href="https://en.wikipedia.org/wiki/Unary_operation" target="_blank" rel="noopener nofollow">unary</a> value.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go">
<span class="token comment">// anonymous empty struct type</span>
empty <span class="token operator">:=</span> <span class="token tag">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// named empty struct type</span>
<span class="token tag">type</span> emptyStruct <span class="token tag">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
empty <span class="token operator">:=</span> emptyStruct<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="
// anonymous empty struct type
empty := struct{}{}

// named empty struct type
type emptyStruct struct{}
empty := emptyStruct{}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>The cool thing about empty structs is that they're the smallest possible type in Go: they take up <strong>zero bytes of memory</strong>.</p>
<p><img src="https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/hXAvfvS.png" alt="memory usage"></p>
<p>Later in this course, you'll see how and when they're used: it's surprisingly often! Mostly with maps and channels.</p>


## Quiz Results

*Quiz completed successfully*