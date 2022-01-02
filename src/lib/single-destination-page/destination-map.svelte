<script lang="ts">
	import Map from './map.svelte';
	export let zoom: number;
	export let location: {
		lat: number;
		lng: number;
	};
	export let google_api: string;
</script>

<div class="map">
	<Map {location} width='100%' height='30vw' minHeight='200px' {zoom} {google_api} />
</div>

<style lang="scss">
	.map {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: 1px solid #ccc;
		box-shadow: 2px 2px 3px 3px #ccc;
		background-color: white;
		margin: 1rem 0;
		@media (min-width: 600px) {
			margin: 0 0 0 1rem;
		}
	}
</style>
