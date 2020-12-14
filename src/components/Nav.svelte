<script>
	export let segment;
	const handleClick = () => {
		console.log(segment);
	}
</script>

<style>
	nav {
	    background: #a7a6bd;
	}
	nav div {
		max-width: 960px;
		padding: 0 10px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
	h1 {
		margin-top: 10px;
		font-size: 22px;
		font-weight: bold;
	}
	ul {
		padding: 0;
   		margin: 0;
    		text-align: right;
	}
	li {
		display: inline-block;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	a.current {
		border-bottom: 3px solid #5c5b9c;
	}
</style>

<nav>
	<div>
		<h1 on:click={handleClick}>22ndTech</h1>
		<ul>
			<li><a class:current={segment === undefined} href=".">home</a></li>
      		<li><a class:current={segment === 'contact'} href="contact">contact</a></li>
      		<li><a class:current={segment === 'about'} href="about">about</a></li>
      		<li><a rel=prefetch class:current={segment === 'jobs'} href="jobs">jobs</a></li>
		</ul>
	</div>
</nav>
