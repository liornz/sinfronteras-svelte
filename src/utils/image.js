import sharp from 'sharp';

export const IMAGE_DIR = '/src/lib/assets/';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function dominantColour({ source }) {
	try {
		const image = sharp(source);
		const { dominant } = await image.stats();
		return dominant;
	} catch (error) {
		console.error('Error determining dominant colour: ', source);
	}
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const dominantColourPlaceholder = async ({ source }) => {
	try {
		const dominant = await dominantColour({ source });
		const { r, g, b } = dominant;
		const buffer = await sharp({
			create: {
				width: 3,
				height: 2,
				channels: 3,
				background: { r, g, b }
			}
		})
			.jpeg()
			.toBuffer({ resolveWithObject: false });
		return `data:image/jpeg;base64,${buffer.toString('base64')}`;
	} catch (error) {
		console.error('Error determining dominant colour: ', source);
	}
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function lowResolutionPlaceholder({ source }) {
	try {
		const image = sharp(source);
		const buffer = await image
			.resize(10)
			.jpeg({
				quality: 50,
				progressive: true,
				optimiseScans: true,
				chromaSubsampling: '4:2:0',
				trellisQuantisation: true,
				quantisationTable: 2
			})
			.toBuffer({ resolveWithObject: false });
		return `data:image/jpeg;base64,${(await buffer).toString('base64')}`;
	} catch (error) {
		console.error('Error generating low resolution placeholder: ', source);
	}
}