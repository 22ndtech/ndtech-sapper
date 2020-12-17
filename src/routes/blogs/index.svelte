<script context="module">
  // console.log('module script');
  export async function preload(page, session) {
		const res = await this.fetch('/blogs.json');
		const blogs = await res.json();
		return { blogs };
  }
</script>

<script>
  export let blogs;
</script>

<style>
  ul{
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  li a {
    display: block;
    padding: 15px;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    margin: 10px auto;
    text-decoration: none;
  }
  li a:hover {
    background: #fbfbfb;
  }
  div {
    text-align: center;
  }
</style>

<h2>Recent Blog Posts</h2>

<ul>
	{#each blogs as blog}
		<li><a rel=prefetch href={`blogs/${blog.id}`}>{blog.title}</a></li>
	{/each}
</ul>

<div>
<a href="blogs/create" class="btn">Add a New Blog</a>
</div>
