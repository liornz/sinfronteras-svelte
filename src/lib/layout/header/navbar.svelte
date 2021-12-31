<script lang="ts">
	import { fly } from 'svelte/transition';
	import Navitems from './navitems.svelte';
	export let isMobile: boolean;
</script>

{#if isMobile}
	<nav transition:fly={{ y: -200 }}>
		<Navitems on:close/>
	</nav>
{:else}
	<nav>
		<Navitems />
	</nav>
{/if}
