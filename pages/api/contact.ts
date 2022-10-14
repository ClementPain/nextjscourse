import { InsertOneResult, MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase, insertDocument } from '../../helpers/db-utils';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient | null = null
  
  try {
    client = await connectToDatabase()
  } catch (err) {
    res.status(500).json({ message: "failed to connect to database" })
  }

  if (req.method === 'POST' && client) {
    const contactData = req.body.contactData

    if (
      !contactData ||
      !contactData.email ||
      !contactData.email.includes('@') ||
      !contactData.message ||
      contactData.message.trim() === "" ||
      !contactData.name ||
      contactData.name.trim() === ""
    ) {
      res.status(422).json({ message: "Wrong data" })
      client.close()
      return
    }

    try {
      const result: InsertOneResult | null = await insertDocument(client, 'contacts', contactData)
      contactData.id = result.insertedId

      res.status(201).json({ contact: contactData, message: "Contact added !" })
    } catch (err) {
      res.status(404).json({ message: "Could not insert data" })
    }
  }

  client?.close()
}

export default handler