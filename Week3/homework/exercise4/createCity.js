const MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://SaidYein:Saidsaid4066.@hackyourfuture.afuvh.mongodb.net";

const seedDatabase = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    var city = {
      ID: "100001",
      Name: "MyCity",
      CountryCode: "NLD",
      District: "Drenthe",
      Population: 1,
    };
    const result = await client
      .db("world")
      .collection("cities")
      .insertOne(city);
    if (result.acknowledged) console.log("City is created!");
    else console.log("Creating city is denied");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

seedDatabase();
