const mysql = require("mysql");
const util = require("util");
const { startConnection, endConnection } = require("../helpers/utils.js");
const { createAccountTable, createAccountChangesTable } =
  require("../helpers/consts")(async () => {
    try {
      const query = startConnection();
      await query(createAccountTable);
      await query(createAccountChangesTable);
    } catch (error) {
      console.error(error);
    } finally {
      endConnection();
    }
  })();
