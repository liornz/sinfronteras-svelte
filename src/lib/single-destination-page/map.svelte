<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let width: string | number;
	export let height: string | number;
	export let minWidth: string | number = undefined;
	export let minHeight: string | number = undefined;
	export let zoom: number;
	export let location: {
		lat: number;
		lng: number;
	};
	export let google_api: string;
	afterUpdate(() => {
		// @ts-ignore
		if (window.google === undefined) {
			const s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = `https://maps.google.com/maps/api/js?key=${google_api}`;
			const x = document.getElementsByTagName('script')[0];
			x.parentNode?.insertBefore(s, x);
			s.addEventListener('load', () => {
				if (location !== undefined) {
					// @ts-ignore
					const map = new google.maps.Map(document.getElementById('map')! as HTMLDivElement, {
						center: location,
						zoom: zoom
					});
					// @ts-ignore
					new google.maps.Marker({
						position: location,
						map: map
					});
				}
			});
		} else {
			if (location !== undefined) {
				// @ts-ignore
				const map = new google.maps.Map(document.getElementById('map')! as HTMLDivElement, {
					center: location,
					zoom: zoom
				});
				// @ts-ignore
				new google.maps.Marker({
					position: location,
					map: map
				});
			}
		}
	});
</script>

<div
	style="width: {width}; height: {height}; minWidth: {minWidth}; minHeight: {minHeight}"
	class="map-area"
	id="map"
>
	Google Maps cannot be displayed - we apologize for the inconvinience!
</div>

<style>
	.map-area {
		border: 1px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
