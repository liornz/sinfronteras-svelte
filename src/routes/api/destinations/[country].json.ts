import { getDestinationsPerCountry, getCountryFileData } from '../../../utils/data-utils';
import type { country, destination } from '../../../utils/types';

/** @type {import('@sveltejs/kit').RequestHandler} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ params }): Promise<{ body: { destinations: destination[], country: country } }> {
	const country = params.country as string;
	const destinationsData = getDestinationsPerCountry(country);
	const countryData = getCountryFileData(country);
	if (destinationsData && countryData) {
		return {
			body: {
				destinations: destinationsData,
				country: countryData,
			}
		};
	}
}
