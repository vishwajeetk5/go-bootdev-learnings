<h1>Small Memory Footprint</h1>
<p>Go programs are fairly lightweight. Each program includes a small amount of extra code that's included in the executable binary called the <a href="https://go.dev/doc/faq#runtime" target="_blank" rel="noopener nofollow">Go Runtime</a>. One of the purposes of the Go runtime is to clean up unused memory at runtime. It includes a <a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)" target="_blank" rel="noopener nofollow">garbage collector</a> that automatically frees up memory that's no longer in use.</p>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Comparison</h2>
</summary>
<p>As a general rule, Java programs use <em>more</em> memory than comparable Go programs. There are several reasons for this, but one of them is that Java uses a virtual machine to interpret bytecode at runtime and typically allocates more on the <a href="https://courses.grainger.illinois.edu/cs225/fa2022/resources/stack-heap/" target="_blank" rel="noopener nofollow">heap</a>.</p>
<p>On the other hand, Rust and C programs use slightly <em>less</em> memory than Go programs because more control is given to the developer to optimize the memory usage of the program. The Go runtime just handles it for us automatically.</p>
</details>
<details open="">
<summary>

<svg class="details-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path d="m9 18 6-6-6-6"></path>
</svg>
<h2>Idle Memory Usage</h2>
</summary>
<p><img src="https://miro.medium.com/max/1400/1*Ggs-bJxobwZmrbfuoWGpFw.png" alt="idle memory"></p>
<p>In the chart above, <a href="https://medium.com/@dexterdarwich/comparison-between-java-go-and-rust-fdb21bd5fb7c" target="_blank" rel="noopener nofollow">Dexter Darwich compares the memory usage</a> of three <em>very</em> simple programs written in Java, Go, and Rust. As you can see, Go and Rust use <em>very</em> little memory when compared to Java.</p>
<p></p><div class="video-wrapper w-fit m-auto relative"><video src="https://storage.googleapis.com/qvault-webapp-dynamic-assets/lesson_videos/go-memory.mp4" controls="" controlslist="nodownload" preload="metadata" playsinline="" width="1080"" poster="https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/gUNRY9t.png">
Your browser does not support playing HTML5 video.
You can <a href="https://storage.googleapis.com/qvault-webapp-dynamic-assets/lesson_videos/go-memory.mp4" download="">download the file</a> instead.
Here is a description of the content: go vs rust
</video><button class="video-info-button absolute top-2 right-2 z-10 p-1 bg-gray-900/60 rounded-full text-gray-300 hover:text-gray-100" aria-label="Video playback information"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></button></div><p></p>
</details>


## Quiz Results
Generally speaking, which language uses the most memory?
JAVA

<br>
What's one of the purposes of the Go runtime? To cleanup unused memory
<br>
*Quiz completed successfully*