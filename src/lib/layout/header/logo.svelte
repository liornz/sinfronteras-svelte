<script>
	import { createEventDispatcher } from 'svelte';
	import logo from '$lib/assets/images/logo/logo_sinfronteras-417x150.png';
	const dispatch = createEventDispatcher();
</script>

<div class="logo" on:click={() => dispatch('close')}>
	<a href="/">
		<img
			src={logo}
			alt="Sin Fronteras Logo"
			width="200"
			height="75"
			loading="lazy"
			decoding="async"
		/>
	</a>
</div>

<style lang="scss">
	.logo {
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 101;
	}

	.logo a {
		padding-top: 0.2rem;
		width: 10rem;
	}
</style>
