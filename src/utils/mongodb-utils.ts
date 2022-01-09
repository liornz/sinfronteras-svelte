import { MongoClient, Sort, Filter } from 'mongodb';
export const connectDatabase = async (): Promise<MongoClient> => {
  const client = await MongoClient.connect(
		`mongodb+srv://${import.meta.env.VITE_MONGODB_USERNAME}:${
			import.meta.env.VITE_MONGODB_PASSWORD
		}@${import.meta.env.VITE_MONGODB_CLUSTERNAME}.avpr6.mongodb.net/${
			import.meta.env.VITE_MONGODB_DATABASE
		}?retryWrites=true&w=majority`
	);
  return client;
};
export const insertDucument = async (
	client: MongoClient,
	collection: string,
	document: Record<string, unknown>
): Promise<typeof result> => {
	const db = client.db();
	const result = await db.collection(collection).insertOne(document);
	return result;
};

export const getAllDocuments = async (
	client: MongoClient,
	collection: string,
	filter: Filter<{country: string, destination: string}>,
	sort: Sort,
): Promise<typeof documents> => {
	const db = client.db();
	const documents = await db.collection(collection).find(filter).sort(sort).toArray();
	return documents;
};
