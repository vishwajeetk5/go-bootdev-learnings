<h1>Unit Test Lessons</h1>
<p>Up until now, all the coding lessons in this course have been testing you based on your code's <em>console output</em> (what's printed). For example, a lesson might expect your code (in conjunction with the code we provide) to <code>print</code> something like:</p>

<div style="position: relative; isolation: isolate;">
  <pre class="language-bash" tabindex="0"><code class="language-bash">Price: <span class="token number">0.2</span>
NumMessages: <span class="token number">18</span>
</code></pre>

  <button class="markdown-it-code-copy absolute right-2 top-2.5 z-10 m-1 h-6 w-6 cursor-pointer rounded bg-gray-950 text-gray-500 focus:outline-white hover:text-gray-200" data-clipboard-text="Price: 0.2
NumMessages: 18" title="Copy to clipboard">
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
  </button>
</div>
<p>If your code prints that <em>exact</em> output, you pass. If it doesn't, you fail.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>A New Type of Lesson</h2>
</summary>
<p>Going forward, you'll also encounter a new type of lesson: <a href="https://en.wikipedia.org/wiki/Unit_testing" target="_blank" rel="noopener nofollow">unit tests</a>. If you've taken a course with us before, you'll know what we are referring to. But in case you haven't, a unit test is just an automated program that tests a small "unit" of code. Usually just a function or two. The editor will have tabs: the "main.go" file containing your code, and the "main_test.go" file containing the unit tests.</p>
<p>These new unit-test-style lessons will test your code's <em>functionality</em> rather than its output. Our tests will call functions in your code with different arguments, and expect specific <code>return</code> values. If your code returns the correct values, you pass. If it doesn't, you fail.</p>
<p>There are two reasons for this change:</p>
<ol>
<li>It's more realistic. In the real world, you'll be writing unit tests and running them against your code to make sure it works as expected.</li>
<li>You can run and debug your code with <code>fmt.Println</code> statements, and leave those print statements in when you submit. Unlike the output-based lessons, you won't have to remove your <code>fmt.Println</code> statements to pass.</li>
</ol>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Complete the <code>getMonthlyPrice</code> function. It accepts a <code>tier</code> (string) as input and returns the monthly price for that tier in pennies. Here are the prices in dollars:</p>
<ul>
<li>"basic" - $100.00</li>
<li>"premium" - $150.00</li>
<li>"enterprise" - $500.00</li>
</ul>
<p>Convert the prices from dollars to pennies. If the given tier doesn't match any of the above, return 0 pennies.</p>
<div class="callout callout-info">
<p>To avoid pesky <a href="https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems" target="_blank" rel="noopener nofollow">floating-point errors</a>, we often store prices in the currency's <strong>base unit</strong>. In this case, we are storing the prices in pennies, and <strong>a dollar consists of 100 pennies.</strong></p>
</div>
</details>
