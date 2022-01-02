<script lang="ts">
	import type { destination } from '../../utils/types';
  import DestinationCard from './destination-card.svelte';
	export let destinations: destination[];
  export let image: string;
  export let slug: string;
</script>

<div class="fixedContainer">
	<div class="dark">
		{#each destinations as destination, i (destination.slug)}
			<DestinationCard {destination} />
		{/each}
	</div>
	<div class="fixedWrap">
		<div class="fixedInner" style="background-image: url({`/images/countries/${slug}/${image}`});" />
	</div>
</div>

<style lang="scss">
	.fixedContainer {
		position: relative;
		width: 100%;
		// margin-top: 2rem;
	}
	.fixedWrap {
		clip: rect(0, auto, auto, 0);
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: -9999;
	}
	.fixedInner {
		background-image: url('/images/background/image4.jpg');
		position: fixed;
		height: 100%;
		width: 100%;
		background-size: cover;
		background-position: center center;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		will-change: transform;
		z-index: -1;
		top: 0;
		left: 0;
		display: table;
	}
	.dark {
		background-color: rgba(0, 0, 0, 0.7);
		padding: 0.2rem;
		margin: auto;
		z-index: 1000;
		display: grid;
		gap: 2rem;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		@media (min-width: 400px) {
			padding: 2rem;
		}
		@media (min-width: 630px) {
			grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
		}
		@media (min-width: 1000px) {
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		}
	}
</style>
