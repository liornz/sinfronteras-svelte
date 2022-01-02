<script lang="ts">
	import type { country, destination } from '../../utils/types';
	import DestinationsGrid from './destinations-grid.svelte';
	export let destinations: destination[];
	export let country: country;
</script>

<div class="container">
	<h1 class="header">
		{`DESTINATIONS IN ${country.name.toUpperCase()}`}
	</h1>
	<div class="header-underline" />
	<div class="divider" />
</div>
<DestinationsGrid {destinations} image={country.image} slug={country.slug} />

<style>
	.container {
		background-color: #e9ecef;
	}

	.divider {
		height: 2rem;
		background-color: #e9ecef;
	}
</style>
