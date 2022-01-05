import type { userInput } from '../../../utils/validate-user-input';
import type { RequestHandler } from '@sveltejs/kit';
import { connectDatabase, insertDucument } from '../../../utils/mongodb-utils';
import sgMail from '@sendgrid/mail';
import type { MongoClient } from 'mongodb';

export const post: RequestHandler<Record<string, unknown>, userInput> = async ({ body }) => {
	console.log(body);
	const { email, name, message } = body;

	return {
		status: 201,
		body: { message: 'Message saved!', details: { email, name, message } }
	};

	const pattern =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	const emailIsValid = pattern.test(email);
	if (!emailIsValid || !name || name.trim() === '' || !message || message.trim() === '') {
		return {
			status: 422,
			body: { message: 'Invalid input!' }
		};
	}

	const msg = {
		to: 'travelblogsinfronteras@gmail.com',
		from: 'info@sinfronteras-travelblog.com',
		subject: 'Sin-Fronteras - Contact Form',
		html: `<h2>New Message from ${name} - ${email}</h2><hr><p>${message}</p>`
	};

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
	const newMessage = {
		email,
		name,
		message
	};
	let result;
	try {
		await sgMail.send(msg);
		result = await insertDucument(client, 'messages', newMessage);
		const returnMessage = {
			_id: result.insertedId,
			...newMessage
		};
		client.close();
		return {
			status: 201,
			body: { message: 'Message saved correctly!', comment: returnMessage }
		};
	} catch (error) {
		client.close();
		return {
			status: 500,
			body: { message: 'Saving message failed!' }
		};
	}
};
