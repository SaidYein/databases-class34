const mysql = require("mysql");
const util = require("util");
const { HOST, CONN_SUCCESS, CONN_CLOSED } = require("../helpers/consts");
const { keys } = require("../helpers/keys");

const startConnection = () => {
  try {
    connection = mysql.createConnection({
      host: HOST,
      user: keys.user,
      password: keys.password,
      database: keys.database,
    });
    const execQuery = util.promisify(connection.query.bind(connection));
    connection.connect();
    console.log(CONN_SUCCESS);
    return execQuery;
  } catch (error) {
    console.log(error);
  }
};

const endConnection = () => {
  try {
    connection.end();
    console.log(CONN_CLOSED);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { startConnection, endConnection };
