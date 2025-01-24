// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Wragnam:w0brvsXgBpixG2Xt@cluster0.t6vhe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted successfully" });
  }
}
