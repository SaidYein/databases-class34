const MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://SaidYein:Saidsaid4066.@hackyourfuture.afuvh.mongodb.net";

const deleteTheCity = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const result = await client
      .db("world")
      .collection("cities")
      .findOneAndDelete({ ID: "100001" });
    if (result.lastErrorObject.n) console.log("City is deleted :( Goodbye!");
    else console.log("City could not be deleted!");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

deleteTheCity();
