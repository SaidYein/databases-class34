const MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://SaidYein:Saidsaid4066.@hackyourfuture.afuvh.mongodb.net";

const findTheCity = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    let result = await client
      .db("world")
      .collection("cities")
      .find({ Name: "MyCity" })
      .toArray();
    console.log("------------> BY CITY NAME <--------------");
    console.table(result);

    result = await client
      .db("world")
      .collection("cities")
      .find({ CountryCode: "NLD" })
      .toArray();
    console.log("------------> BY COUNTRY CODE <--------------");
    console.table(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

findTheCity();
