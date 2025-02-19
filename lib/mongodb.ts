import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = "Sharehub";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

declare global {
  var _mongoose: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null };
  var _mongoClientPromise: Promise<MongoClient>;
}


global._mongoose = global._mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (global._mongoose.conn) return global._mongoose.conn;

  if (!global._mongoose.promise) {
    global._mongoose.promise = mongoose.connect(MONGODB_URI, {
      dbName: MONGODB_DB,
    }).then((mongoose) => mongoose.connection);
  }

  global._mongoose.conn = await global._mongoose.promise;
  console.log("✅ Connected to MongoDB");
  return global._mongoose.conn;
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(MONGODB_URI);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export { clientPromise };
