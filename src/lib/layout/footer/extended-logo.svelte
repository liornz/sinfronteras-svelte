<script>
	import logo from '$lib/assets/images/logo/logo_sinfronteras-417x150.png';
</script>

<div class="container">
	<a href="/">
		<img src={logo} alt="Sin Fronteras Logo" />
	</a>
	<h1>Your Travel Channel</h1>
	<a href="mailto:travelblogsinfronteras@gmail.com">
		<p class="email">travelblogsinfronteras@gmail.com</p>
	</a>
	<p>©2021 SINFRONTERAS</p>
	<p>ALL RIGHTS RESERVED </p>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		color: white;
		align-items: center;
		@media (min-width: 1000px) {
			align-items: flex-start;
		}
		h1 {
			font-size: 1.2rem;
			font-style: italic;
			margin: 0 0 0.5rem 0;
			color: $color-sinfronteras;
		}
		.email {
			font-size: 1rem;
			margin: 0 0 0.5rem 0;
		}
		p {
			color: #c0c8c9;
			font-size: 0.8rem;
			margin: 0;
		}
		img {
			margin-left: -1rem;
			margin-top: -0.3rem;
			width: 12rem;
		}
	}
</style>
