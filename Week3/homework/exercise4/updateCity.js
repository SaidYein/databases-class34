const MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://SaidYein:Saidsaid4066.@hackyourfuture.afuvh.mongodb.net";

const updateTheCity = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const result = await client
      .db("world")
      .collection("cities")
      .findOneAndUpdate(
        { ID: "100001" },
        { $set: { Population: "2" } },
        { returnDocument: "after", returnOriginal: false }
      );
    if (result.value) {
      console.log("Updated successfully!");
      console.table(result.value);
    } else console.log("Population could not be updated!");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

updateTheCity();
