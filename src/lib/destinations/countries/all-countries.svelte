<script lang="ts">
	import type { country } from '../../../utils/types';
	import CountriesGrid from './countries-grid.svelte';
	export let countries: country[];
</script>

<div>
	<div class="container">
		<h1 class="header">SELECT YOUR DESTINATION</h1>
		<div class="header-underline" />
		<div class="divider" />
	</div>
	<CountriesGrid {countries} />
</div>

<style lang="scss">
	.container {
		background-color: #e9ecef;
	}
	.divider {
		height: 2rem;
		background-color: #e9ecef;
	}
</style>
