<h1>Processing Orders</h1>
<p>Management thinks our branding is so creative that our SaaS customers will pay for Textio merch.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Assignment</h2>
</summary>
<p>Complete the <code>placeOrder</code> function.</p>
<p>It returns a <code>bool</code> indicating whether the order was successful (<code>true</code> is a success) and a <code>float64</code> representing the user's balance after the order. The <code>placeOrder</code> function should always return the account balance regardless of if it was adjusted or not.</p>
<p>The <code>amountInStock</code> and <code>calcPrice</code> functions can be used to look up the current stock and price of an item.</p>
<ul>
<li>If the quantity is greater than the amount in stock, the order should be rejected.</li>
<li>If the user doesn't have enough money in their account, the order should be rejected.</li>
<li>Otherwise, the order should be accepted and you should return the new balance.</li>
</ul>
</details>
