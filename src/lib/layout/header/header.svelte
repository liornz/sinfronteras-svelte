<script lang="ts">
	import Logo from './logo.svelte';
	import MenuToggler from './menu-toggler.svelte';
	import Navbar from './navbar.svelte';
	let winWidth: number;
	$: isMobile = winWidth < 600;
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<svelte:window bind:innerWidth={winWidth} />

{#if isMobile}
	<header>
		<div class="header">
			<Logo on:close={closeMenu} />
			<MenuToggler {isMenuOpen} on:click={toggleMenu} />
		</div>
		{#if isMenuOpen}
			<Navbar {isMobile} on:close={closeMenu} />
		{/if}
	</header>
{:else}
	<header class="header">
		<Logo />
		<Navbar isMobile />
	</header>
{/if}

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 0.5rem;
		height: 5rem;
		background-color: black;
		z-index: 10;
	}
</style>
