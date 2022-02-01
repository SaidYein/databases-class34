const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});
const execQuery = util.promisify(connection.query.bind(connection));

async function getPopulation(Country, name, code, cb) {
  connection.connect();
  try {
    await execQuery(
      `PREPARE statement FROM 'SELECT * FROM ${Country} WHERE Name = ? and code = ?'`
    );
    await execQuery(`SET @name ='${name}'`);
    await execQuery(`SET @code ='${code}'`);
    await execQuery(
      `EXECUTE statement USING @name, @code;`,
      function (err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Injection failed"));
        cb(result);
        connection.end();
      }
    );
  } catch (err) {
    cb(err);
    connection.end();
  }
}

// getPopulation("country", "XXXX", "xx' OR' 1=1", console.log);

getPopulation("country", "Turkey", "TUR", console.log);
