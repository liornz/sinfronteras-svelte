<script lang="ts">
	import { fly } from 'svelte/transition';
	import Navitems from './navitems.svelte';
	export let isMobile: boolean;
</script>

{#if isMobile}
	<nav class="nav" transition:fly={{ y: -200 }}>
		<Navitems on:close/>
	</nav>
{:else}
	<nav>
		<Navitems />
	</nav>
{/if}

<style>
	.nav {
		position: fixed;
		top: 70;
		width: 100%;
		background-color: black;
		z-index: 100;
	}
</style>
