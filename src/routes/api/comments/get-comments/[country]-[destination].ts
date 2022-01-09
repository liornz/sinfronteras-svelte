import type { userInput } from '../../../../utils/validate-user-input';
import type { RequestHandler } from '@sveltejs/kit';
import { connectDatabase, getAllDocuments } from '../../../../utils/mongodb-utils';
import type { MongoClient } from 'mongodb';

export const get: RequestHandler<Record<string, unknown>, userInput> = async ({ params }) => {
	const country = params.country;
	const destination = params.destination;

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

	let documents;
    try {
      documents = await getAllDocuments(
        client,
        'comments',
        {
          country: country,
          destination: destination,
        },
        { _id: -1 }
      );
			return {
				status: 200,
				body: {
					message: 'Success!',
					country: country,
        	destination: destination,
        	comments: documents,
				}
			}
    } catch (error) {
			client.close();
			return {
				status: 500,
				body: {
					message: error instanceof Error ? error.message : 'extracting comments failed!'
				}
			}
    }
  };
