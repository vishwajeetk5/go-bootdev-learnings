<h1>Go Is Statically Typed</h1>
<p>Go enforces <a href="https://developer.mozilla.org/en-US/docs/Glossary/Static_typing" target="_blank" rel="noopener nofollow">static typing</a> meaning variable types are known <em>before</em> the code runs. That means your editor and the compiler can display type errors before the code is ever run, making development easier and faster.</p>
<p>Contrast this with most dynamically typed languages like JavaScript and Python... Dynamic typing often leads to subtle bugs that are hard to detect. The code <em>must</em> be run to catch syntax and type errors. (sometimes in production if you're unlucky 😨)</p>
<div class="callout callout-info">
<p>Languages also have <a href="https://en.wikipedia.org/wiki/Strong_and_weak_typing" target="_blank" rel="noopener nofollow">strong or weak typing</a>, meaning stricter or weaker type checking rules.</p>
</div>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Concatenating Strings</h2>
</summary>
<p>Two strings can be <a href="https://en.wikipedia.org/wiki/Concatenation" target="_blank" rel="noopener nofollow">concatenated</a> with the <code>+</code> operator. But the compiler will not allow you to concatenate a <code>string</code> variable with an <code>int</code> or a <code>float64</code>.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Textio uses <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank" rel="noopener nofollow">basic authentication</a> to log users in.</p>
<p>The code on the right has a type error. Change the type of <code>password</code> to a string (but use the same numeric value) so that it can be concatenated with the <code>username</code> variable.</p>
</details>
