const { MongoClient, Collection } = require("mongodb");

const url =
  "mongodb+srv://namastedev:BxRZ7ZcDUvdnKiPe@namastenode.gtpurhp.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to the server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // // Insert
  // const data = {
  //   firstname: "Ranveer",
  //   lastname: "Singh",
  //   city: "Mumbai",
  //   country: "India",
  // };
  // const insertResult = await collection.insertOne(data);
  // console.log("Inserted documents =>", insertResult);

  // // Update
  // const user = await collection.updateOne(
  //   { firstname: "Alia" },
  //   { $set: { firstname: "Nana", lastname: "Patekar" } }
  // );
  // console.log("User Updated =>", user);

  // // Insert for deletion
  // const insertUser = await collection.insertOne({
  //   firstname: "Nana",
  //   lastname: "Patekar",
  //   city: "Mumbai",
  //   country: "India",
  // });
  // console.log("Inserted user for deletion =>", insertUser);

  // Find and Delete
  // const deleteUser = await collection.findOneAndDelete({ firstname: "Nana" });
  // console.log("Deleted user =>", deleteUser);

  // Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // // Count
  // const countResult = await collection.countDocuments({});
  // console.log("Count of documents in the User collection =>", countResult);

  // Find all users with a filter of firstname: Deepika
  const users = await collection.find({ firstname: "Deepika" }).toArray();
  console.log("All users with first name Deepika =>", users);

  // // Create an ascending (1) index for field firstname and descending index for field lastname
  // const indexName = await collection.createIndex({
  //   firstname: 1,
  //   lastname: -1,
  // });
  // console.log("index name =", indexName);

  // // drop and index
  // const index = await collection.dropIndex("firstname_1_lastname_-1");
  // console.log("Index dropped =>", index);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// NOTES

// Go to mondodb website
// Create a free M0 Cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// Install a mongodb package
// Create a connection from code
// Documents CRUD - Create, Read, Update and Delete (Homework)
