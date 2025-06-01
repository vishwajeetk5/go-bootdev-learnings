<h1>Switch</h1>
<p>Switch statements are a way to compare a value against multiple options. They are similar to if-else statements but are more concise and readable when the number of options is more than 2.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">getCreator</span><span class="token punctuation">(</span>os <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token tag">var</span> creator <span class="token builtin">string</span>
    <span class="token keyword keyword-switch">switch</span> os <span class="token punctuation">{</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"linux"</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"Linus Torvalds"</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"windows"</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"Bill Gates"</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"mac"</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"A Steve"</span>
    <span class="token keyword keyword-default">default</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"Unknown"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword keyword-return">return</span> creator
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func getCreator(os string) string {
    var creator string
    switch os {
    case "linux":
        creator = "Linus Torvalds"
    case "windows":
        creator = "Bill Gates"
    case "mac":
        creator = "A Steve"
    default:
        creator = "Unknown"
    }
    return creator
}" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Notice that in Go, the <code>break</code> statement is not required at the end of a <code>case</code> to stop it from falling through to the next <code>case</code>. The <code>break</code> statement is implicit in Go.</p>
<p>If you <em>do</em> want a <code>case</code> to fall through to the next <code>case</code>, you can use the <code>fallthrough</code> keyword.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">func</span> <span class="token function">getCreator</span><span class="token punctuation">(</span>os <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token tag">var</span> creator <span class="token builtin">string</span>
    <span class="token keyword keyword-switch">switch</span> os <span class="token punctuation">{</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"linux"</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"Linus Torvalds"</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"windows"</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"Bill Gates"</span>

    <span class="token comment">// all three of these cases will set creator to "A Steve"</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"macOS"</span><span class="token punctuation">:</span>
        <span class="token keyword keyword-fallthrough">fallthrough</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"Mac OS X"</span><span class="token punctuation">:</span>
        <span class="token keyword keyword-fallthrough">fallthrough</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"mac"</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"A Steve"</span>

    <span class="token keyword keyword-default">default</span><span class="token punctuation">:</span>
        creator <span class="token operator">=</span> <span class="token string">"Unknown"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword keyword-return">return</span> creator
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="func getCreator(os string) string {
    var creator string
    switch os {
    case "linux":
        creator = "Linus Torvalds"
    case "windows":
        creator = "Bill Gates"

    // all three of these cases will set creator to "A Steve"
    case "macOS":
        fallthrough
    case "Mac OS X":
        fallthrough
    case "mac":
        creator = "A Steve"

    default:
        creator = "Unknown"
    }
    return creator
}" title="Copy to clipboard" data-event-click="true">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>The <code>default</code> case does what you'd expect: it's the case that runs if none of the other cases match.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>I know we haven't covered function syntax in depth yet, but <em>bear</em> with me.</p>
<p>Fix the bug in the <code>billingCost</code> function. The "basic" plan is set correctly, but we need matches for the "pro" and "enterprise" plans too. If the <code>plan</code> is:</p>
<ul>
<li>"pro", the cost should be <code>20.0</code></li>
<li>"enterprise", the cost should be <code>50.0</code></li>
</ul>
</details>
