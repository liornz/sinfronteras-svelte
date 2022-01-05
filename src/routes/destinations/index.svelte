<script context="module" lang="ts">
  import type { country } from '../../utils/types';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ url, params, fetch, session, stuff }) {
		const response = await fetch('/api/countries/allcountriesdata.json');
		if (response.ok) {
      const data = await response.json();
      const countries = data.countries as country[];
			return {
				props: {
					countries,
				}
			};
		}
		return {
			status: response.status,
			error: new Error(`Could not load countries data!`)
		};
	}
</script>

<script lang="ts">
	import AllCountries from '$lib/destinations/countries/all-countries.svelte';
	export let countries: country[];
</script>

<svelte:head>
	<title>Travelblog Sinfronteras - All Countries Page</title>
	<meta name="description" content="All Countries Page - Sinfronteras Travel Blog" />
</svelte:head>

<AllCountries {countries} />
