<script lang="ts">
	import DestinationText from './destination-text.svelte';
	import DestinationMap from './destination-map.svelte';
	export let text: string;
	export let location: {
		lat: number;
		lng: number;
	};
	export let zoom: number;
	export let google_api: string;
</script>

<div class="container">
	<div class="info">
		<DestinationText source={text} />
		<DestinationMap {google_api} {location} {zoom} />
	</div>
</div>

<style lang="scss">
	.container {
		background-color: $color-background;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 90vw;
		margin: auto;
		@media (min-width: 600px) {
			max-width: 80rem;
			padding-top: 5rem;
			padding-bottom: 2rem;
			flex-direction: row;
			justify-content: center;
		}
	}
</style>
