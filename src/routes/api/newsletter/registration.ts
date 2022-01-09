import type { RequestHandler } from '@sveltejs/kit';
import { connectDatabase, insertDucument } from '../../../utils/mongodb-utils';
import type { MongoClient } from 'mongodb';

export const post: RequestHandler<Record<string, unknown>, { email: string }> = async ({ body }) => {
	const { email } = body;

	const pattern =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	const emailIsValid = pattern.test(email);
	if (!emailIsValid) {
		return {
			status: 422,
			body: { message: 'Invalid input!' }
		};
	}
	let client: MongoClient;
	try {
		client = await connectDatabase();
	} catch (error) {
		client.close();
		return {
			status: 500,
			body: { message: error?.message || 'Connection to the database failed!' }
		};
	}

	try {
		await insertDucument(client, 'newsletter', { email });
		client.close();
		return {
			status: 201,
			body: { message: 'Signed up for newsletter!', email }
		};
	} catch (error) {
		client.close();
		return {
			status: 500,
			body: { message: 'Subscribe process failed!' }
		};
	}
};
