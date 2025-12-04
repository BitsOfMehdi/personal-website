import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export async function connectDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  cachedClient = client;
  cachedDb = client.db("personalWebsiteDB");

  return { client, db: client.db("personalWebsiteDB") };
}
