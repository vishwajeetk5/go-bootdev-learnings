<h1>Block Scope</h1>
<p>Unlike Python, Go is <em>not</em> function-scoped, it's <a href="https://go.dev/ref/spec#Declarations_and_scope" target="_blank" rel="noopener nofollow">block-scoped</a>. Variables declared inside a block are only accessible within that block (and its nested blocks). There's also the package scope. We'll talk about packages later, but for now, you can think of it as the outermost, nearly global scope.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">package</span> main

<span class="token comment">// scoped to the entire "main" package (basically global)</span>
<span class="token tag">var</span> age <span class="token operator">=</span> <span class="token number">19</span>

<span class="token tag">func</span> <span class="token function">sendEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// scoped to the "sendEmail" function</span>
    name <span class="token operator">:=</span> <span class="token string">"Jon Snow"</span>

    <span class="token keyword keyword-for">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// scoped to the "for" body</span>
        email <span class="token operator">:=</span> <span class="token string">"snow@winterfell.net"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="package main

// scoped to the entire &quot;main&quot; package (basically global)
var age = 19

func sendEmail() {
    // scoped to the &quot;sendEmail&quot; function
    name := &quot;Jon Snow&quot;

    for i := 0; i &lt; 5; i++ {
        // scoped to the &quot;for&quot; body
        email := &quot;snow@winterfell.net&quot;
    }
}" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Blocks are defined by curly braces <code>{}</code>. New blocks are created for:</p>
<ul>
<li>Functions</li>
<li>Loops</li>
<li>If statements</li>
<li>Switch statements</li>
<li>Select statements</li>
<li>Explicit blocks</li>
</ul>
<p>It's a bit unusual, but occasionally you'll see a plain old explicit block. It exists for no other reason than to create a new scope.</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-go" tabindex="0"><code class="language-go"><span class="token tag">package</span> main

<span class="token tag">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        age <span class="token operator">:=</span> <span class="token number">19</span>
        <span class="token comment">// this is okay</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// this is not okay</span>
    <span class="token comment">// the age variable is out of scope</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="package main

func main() {
    {
        age := 19
        // this is okay
        fmt.Println(age)
    }

    // this is not okay
    // the age variable is out of scope
    fmt.Println(age)
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
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-0"><label class="markdown-checkbox-label" for="checkbox-0">Run the code without changing anything: you should see a compilation error.</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-1"><label class="markdown-checkbox-label" for="checkbox-1">Fix the scoping issue in the function so that it runs as you'd expect.</label></li>
</ol>
</details>
