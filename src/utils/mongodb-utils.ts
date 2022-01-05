import { MongoClient, SortDirection } from 'mongodb';

export const connectDatabase = async (): Promise<typeof client> => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.avpr6.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
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
	filter: Record<string, unknown>,
	sort: [string, SortDirection]
): Promise<typeof documents> => {
	const db = client.db();
	const documents = await db.collection(collection).find(filter).sort(sort).toArray();
	return documents;
};
