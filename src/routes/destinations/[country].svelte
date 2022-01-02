<script context="module" lang="ts">
	import type { country, destination } from '../../utils/types';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch }) {
		const country = page.params.country;
		const response = await fetch(`/api/destinations/${country}.json`);
		if (response.ok) {
			const data = await response.json();
			const destinations = data.destinations;
			const country = data.country;
			return {
				props: {
					destinations,
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
	import DestinationsPerCountry from '$lib/destinations/destinations-per-country.svelte';
	export let country: country;
	export let destinations: destination[];
</script>

<svelte:head>
	<title>{`Sinfronteras - Destinations in ${country.name}`}</title>
	<meta name="description" content={`Sinfronteras Travel Blog - Destinations in ${country.name}`} />
</svelte:head>
<DestinationsPerCountry {destinations} {country} />
