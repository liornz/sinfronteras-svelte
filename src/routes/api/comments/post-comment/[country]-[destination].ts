import type { userInput } from '../../../../utils/validate-user-input';
import type { RequestHandler } from '@sveltejs/kit';
import { connectDatabase, insertDucument } from '../../../../utils/mongodb-utils';
import type { MongoClient } from 'mongodb';

export const post: RequestHandler<Record<string, unknown>, userInput> = async ({ body, params }) => {
	const { email, name, message } = body;
	const country = params.country;
	const destination = params.destination;

	const pattern =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	const emailIsValid = pattern.test(email);
	if (!emailIsValid || !name || name.trim() === '' || !message || message.trim() === '') {
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
	const newComment = {
		country,
		destination,
		email,
		name,
		message
	};
	let result;
	try {
		result = await insertDucument(client, 'comments', newComment);
		const returnMessage = {
			_id: result.insertedId,
			...newComment,
		};
		client.close();
		return {
			status: 201,
			body: { message: 'Comment saved correctly!', comment: returnMessage }
		};
	} catch (error) {
		client.close();
		return {
			status: 500,
			body: { message: 'Saving comment failed!' }
		};
	}
};
