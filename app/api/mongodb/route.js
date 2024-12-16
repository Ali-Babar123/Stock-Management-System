// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Replace the uri string with your connection string.
export async function GET(request) {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("Form");
    const users = database.collection("users");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const user = await users.find(query).toArray();

    return NextResponse.json({ success: true, user }); // return Response.json({a: 234});
  } catch (error) {
    console.error(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
