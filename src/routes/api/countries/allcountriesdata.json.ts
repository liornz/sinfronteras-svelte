import { getAllCountriesData } from '../../../utils/data-utils';
import type { country } from '../../../utils/types';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<{ body: { countries: country[] } }> {
	const countries = getAllCountriesData();

	if (countries) {
		return {
			body: {
				countries
			}
		};
	} else {
		return {
			body: {
				countries: []
			}
		};
	}
}
