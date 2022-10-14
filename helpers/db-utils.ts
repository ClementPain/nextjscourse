import { MongoClient } from 'mongodb'

const connectionMongoDB = `mongodb+srv://${ process.env.mongodb_username }:${ process.env.mongodb_password }@${ process.env.mongodb_clustername }.jzzorbz.mongodb.net/${ process.env.mongodb_database }?retryWrites=true&w=majority`

export async function connectToDatabase() {
  const client = await MongoClient.connect(connectionMongoDB)

  return client
}

export async function insertDocument(client: MongoClient, collectionName: string, data: JSON) {
  const db = client.db()
  const result = await db.collection(collectionName).insertOne(data)

  return result
}