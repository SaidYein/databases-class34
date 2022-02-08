const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

const createAuthorTable = `CREATE TABLE authors (
  author_no INT NOT NULL,
  author_name VARCHAR(50),
  university VARCHAR(100),
  date_of_birth DATE,
  h_index INT,
  gender ENUM ('F', 'M', 'Other'),
  PRIMARY KEY (author_no)
);`;

const addRowQuery = `ALTER TABLE authors ADD mentor INT;`;

// all queries array
const queryArray = [
  "DROP DATABASE IF EXISTS Week2_HW",
  "CREATE DATABASE Week2_HW",
  "USE Week2_HW",
  createAuthorTable,
  addRowQuery,
];

connection.connect();

for (let i in queryArray) {
  connection.query(queryArray[i], function (error, results) {
    if (error) {
      throw error;
    }
  });
}

console.log("database and tables are created");

connection.end();
