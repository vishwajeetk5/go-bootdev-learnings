<h1>Update Users</h1>
<p>We need a way to differentiate between standard and premium users. When a new user is created, they need a membership type, and that type will determine the message character limit.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<ol>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-0"><label class="markdown-checkbox-label" for="checkbox-0">Create a new struct called <code>Membership</code>, it should have:</label>
<ul>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-1"><label class="markdown-checkbox-label" for="checkbox-1">A <code>Type</code> string field</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-2"><label class="markdown-checkbox-label" for="checkbox-2">A <code>MessageCharLimit</code> integer field</label></li>
</ul>
</li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-3"><label class="markdown-checkbox-label" for="checkbox-3">Update the <code>User</code> struct to <a href="https://gobyexample.com/struct-embedding" target="_blank" rel="noopener nofollow">embed</a> a <code>Membership</code>.</label></li>
<li><input type="checkbox" class="markdown-checkbox" id="checkbox-4"><label class="markdown-checkbox-label" for="checkbox-4">Complete the <code>newUser</code> function. It should return a new <code>User</code> with all the fields set as you would expect based on the inputs. If the user is a <code>"premium"</code> member, the <code>MessageCharLimit</code> should be <code>1000</code>, otherwise, it should only be <code>100</code>.</label></li>
</ol>
</details>
