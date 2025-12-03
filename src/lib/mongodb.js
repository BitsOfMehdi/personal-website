import { MongoClient, ServerApiVersion } from "mongodb";

export async function connectDb() {
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
  } finally {
    await client.close();
  }
}
