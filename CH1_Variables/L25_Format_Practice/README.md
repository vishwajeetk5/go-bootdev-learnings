<h1>Format Practice</h1>
<p>You've been asked to improve the logs to include information about individual users and their recent messages.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Create a <code>userLog</code> variable on line 15. It should contain:</p>

<div style="position: relative; isolation: isolate;">
  <pre><code>Name: FNAME LNAME, Age: AGE, Rate: MESSAGERATE, Is Subscribed: ISSUBSCRIBED, Message: MESSAGE
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="Name: FNAME LNAME, Age: AGE, Rate: MESSAGERATE, Is Subscribed: ISSUBSCRIBED, Message: MESSAGE" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>Where <code>FNAME</code> <code>LNAME</code> <code>AGE</code> <code>MESSAGERATE</code> <code>ISSUBSCRIBED</code> and <code>MESSAGE</code> correspond to the variables above.</p>
<p><code>MESSAGERATE</code> should be rounded to the <code>tenths</code> place.</p>
</details>
<details>
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Tips</h2>
</summary>
<ul>
<li><a href="https://golang.org/pkg/fmt/#Sprintf" target="_blank" rel="noopener nofollow">fmt.Sprintf</a> can be used to format strings.</li>
<li><code>%.1f</code> rounds a float to the tenths place, <code>%.2f</code> rounds to the hundredths place, etc.</li>
<li><code>%t</code> formats a boolean value.</li>
<li><code>%v</code> can be used to format any value in its default representation.</li>
<li><code>%s</code> can be used to format a string.</li>
<li><code>%d</code> can be used to format an integer.</li>
</ul>
</details>
