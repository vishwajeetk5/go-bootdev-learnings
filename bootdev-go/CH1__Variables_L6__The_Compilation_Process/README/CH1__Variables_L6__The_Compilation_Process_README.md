<h1>The Compilation Process</h1>
<p>Computers need machine code, they don't understand English or even Go. We need to convert our high-level (Go) code into machine language, which is really just a set of instructions that some specific hardware can understand. In your case, your CPU.</p>
<p>The Go compiler's job is to take Go code and produce machine code, an <code>.exe</code> file on Windows or a standard executable on Mac/Linux.</p>
<p><img src="https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/rfR5MNc.png" alt="compiler"></p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Go Program Structure</h2>
</summary>
<p>We'll go over this all later in more detail, but to sate your curiosity:</p>
<ol>
<li><code>package main</code> lets the Go compiler know that we want this code to compile and run as a standalone program, as opposed to being a library that's imported by other programs.</li>
<li><code>import "fmt"</code> imports the <a href="https://pkg.go.dev/fmt" target="_blank" rel="noopener nofollow"><code>fmt</code> (formatting) package</a> from the <a href="https://pkg.go.dev/std" target="_blank" rel="noopener nofollow">standard library</a>. It allows us to use <code>fmt.Println</code> to print to the console.</li>
<li><code>func main()</code> defines the <code>main</code> function, the entry point for a Go program.</li>
</ol>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Two Kinds of Bugs</h2>
</summary>
<p>Generally speaking, there are two kinds of errors in programming:</p>
<ol>
<li><strong>Compilation errors.</strong> Occur when code is compiled. It's generally better to have compilation errors because they'll never accidentally make it into production. You can't ship a program with a compiler error because the resulting executable won't even be created.</li>
<li><strong>Runtime errors.</strong> Occur when a program is running. These are generally worse because they can cause your program to crash or behave unexpectedly.</li>
</ol>
<p><em>While we're in the browser it can be a bit hard to tell the difference because we run and compile the code in the same step.</em></p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-0"><label class="markdown-checkbox-label" for="checkbox-0">Run the code. Notice the compilation error? It's due to invalid syntax.</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-1"><label class="markdown-checkbox-label" for="checkbox-1">Fix the compilation error in the code.</label></li>
</ol>
</details>
