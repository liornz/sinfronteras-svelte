import { getFileData } from '../../../utils/data-utils';
import type { destination } from '../../../utils/types';

/** @type {import('@sveltejs/kit').RequestHandler} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({
	params
}): Promise<{ body: { destination: destination } }> {
	const country = params.country as string;
	const destination = params.destination as string;
  const destinationData = getFileData(country, 'en-US', destination);
	if (destinationData) {
		return {
			body: {
				destination: destinationData,
			}
		};
	}
}
