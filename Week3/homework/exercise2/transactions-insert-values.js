const mysql = require("mysql");
const util = require("util");
const { accounts, account_changes } = require("./data.js");
const { startConnection, endConnection } = require("../helpers/utils.js");

try {
  const query = startConnection();

  accounts.forEach(async (account) => {
    await query("INSERT INTO account SET ?", account);
  });
  account_changes.forEach(async (changes) => {
    await query("INSERT INTO account_changes SET ?", changes);
  });
} catch (error) {
  console.error(error);
  endConnection();
} finally {
  endConnection();
}
