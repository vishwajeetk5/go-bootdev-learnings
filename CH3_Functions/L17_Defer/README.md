<h1>Defer</h1>
<p>The <code>defer</code> keyword is a fairly unique feature of Go. It allows a function to be executed automatically <em>just before</em> its enclosing function returns. The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.</p>
<p>Deferred functions are typically used to clean up resources that are no longer being used. Often to close database connections, file handlers and the like.</p>
<p>For example:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">GetUsername</span><span class="token punctuation">(</span>dstName<span class="token punctuation">,</span> srcName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>username <span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Open a connection to a database</span>
	conn<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>srcName<span class="token punctuation">)</span>

	<span class="token comment">// Close the connection *anywhere* the GetUsername function returns</span>
	<span class="token keyword keyword-defer">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	username<span class="token punctuation">,</span> err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">FetchUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword keyword-if">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// The defer statement is auto-executed if we return here</span>
		<span class="token keyword keyword-return">return</span> <span class="token string">""</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token comment">// The defer statement is auto-executed if we return here</span>
	<span class="token keyword keyword-return">return</span> username<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func GetUsername(dstName, srcName string) (username string, err error) {
	// Open a connection to a database
	conn, _ := db.Open(srcName)

	// Close the connection *anywhere* the GetUsername function returns
	defer conn.Close()

	username, err = db.FetchUser()
	if err != nil {
		// The defer statement is auto-executed if we return here
		return &quot;&quot;, err
	}

	// The defer statement is auto-executed if we return here
	return username, nil
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>In the above example, the <code>conn.Close()</code> function is not called here:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword keyword-defer">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="defer conn.Close()" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>It's called:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token comment">// here</span>
<span class="token keyword keyword-return">return</span> <span class="token string">""</span><span class="token punctuation">,</span> err
<span class="token comment">// or here</span>
<span class="token keyword keyword-return">return</span> username<span class="token punctuation">,</span> <span class="token boolean">nil</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="// here
return &quot;&quot;, err
// or here
return username, nil" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Depending on whether the <code>FetchUser</code> function errored. (We'll cover errors later).</p>
<p>Defer is a great way to <strong>make sure</strong> that something happens before a function exits, even if there are multiple return statements, a common occurrence in Go.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Complete the <code>bootup</code> function. Notice that it potentially <code>return</code>s in three places. No matter where it returns, it should print the following message just before it returns:</p>

<div style="position: relative; isolation: isolate;">
  <pre><code>TEXTIO BOOTUP DONE
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="TEXTIO BOOTUP DONE" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Use <code>defer</code> so that you only have to write this message once.</p>
</details>
