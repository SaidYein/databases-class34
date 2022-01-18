var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

const invitees = [
  "(101, 'Miki Mouse', 'Said Yein')",
  "(102, 'Jenny Andres', 'Bill Gates')",
  "(103, 'Marie McQuire', 'Elon Musk')",
  "(104, 'Tom Brew', 'Jeff Bezos')",
  "(105, 'Nicholas Martin', 'Jack MA')",
];

const rooms = [
  "('001', '101A', '01')",
  "('002', '101B', '01')",
  "('003', '102A', '02')",
  "('004', '102B', '02')",
  "('005', '103A', '03')",
];

const meetings = [
  "('A1', 'how to become rich', '2022-01-21 10:01:00', '2022-01-21 13:00:00', '001')",
  "('A2', 'make people robots', '2022-01-21 10:01:00', '2022-01-21 13:00:00', '002')",
  "('A3', 'where to spend money', '2022-01-22 11:01:00', '2022-01-22 15:00:00', '003')",
  "('A4', 'putting chips in brains', '2022-01-23 09:01:00', '2022-01-23 17:00:00', '004')",
  "('A5', 'how about Mars?', '2022-01-24 10:01:00', '2022-01-24 14:00:00', '005')",
];

const connectionQuery = (query, data) => {
  for (let i in data) {
    connection.query(query + data[i], (error, result, fields) => {
      if (error) {
        throw error;
      }
    });
  }
  console.log(`Fields are uploaded`);
};
var insert_queries = [
  "INSERT INTO Invitee VALUES",
  "INSERT INTO Room VALUES",
  "INSERT INTO Meeting VALUES",
];

var create_queries = [
  "DROP DATABASE IF EXISTS meetup",
  "CREATE DATABASE meetup",
  "USE meetup",
  "CREATE TABLE Invitee (invitee_no int, invitee_name VARCHAR(50), invited_by VARCHAR(50))",
  "CREATE TABLE Room (room_no VARCHAR(50), room_name VARCHAR(50), floor_number VARCHAR(50))",
  "CREATE TABLE Meeting (meeting_no VARCHAR(50), meeting_title VARCHAR(50), starting_time DATETIME, ending_time DATETIME, invited_by VARCHAR(50))",
];
connection.connect();

for (let i in create_queries) {
  connection.query(create_queries[i], function (error, results, fields) {
    if (error) {
      throw error;
    }
  });
}
console.log("database and tables are created");

connectionQuery(insert_queries[0], invitees);
connectionQuery(insert_queries[1], rooms);
connectionQuery(insert_queries[2], meetings);

connection.end();
