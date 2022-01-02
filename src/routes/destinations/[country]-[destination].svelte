<script context="module" lang="ts">
	import SelectedVideo from '$lib/single-destination-page/selected-video.svelte';
	import SiteInfo from '$lib/single-destination-page/site-info.svelte';
	import type { destination } from '../../utils/types';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch }) {
		const country = page.params.country;
		const destination = page.params.destination;
		const response = await fetch(`/api/destination/${country}-${destination}.json`);
		if (response.ok) {
			const data = await response.json();
			const destination = data.destination;
			return {
				props: {
					destination,
					country
				}
			};
		}
		return {
			status: response.status,
			error: new Error(`Could not load destinations data!`)
		};
	}
</script>

<script lang="ts">
	export let destination: destination;
</script>

<svelte:head>
	<title>{`${destination.title}`}</title>
	<meta name="description" content={`Sinfronteras Travel Blog - ${destination.title}`} />
</svelte:head>

<SelectedVideo
	youtubeId={destination.youtubeId}
	title={destination.title}
	subtitle={destination.subtitle}
/>
<SiteInfo
	google_api={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
	location={destination.location}
	zoom={destination.zoom}
	text={destination.content}
/>
