const { startConnection, endConnection } = require("../helpers/utils.js");
const { accounts, account_changes } = require("./data.js");
const { SEND_MONEY, UPDATE_MONEY, CREATE_LOG } = require("../helpers/consts");

const transaction = async () => {
  try {
    const query = startConnection();

    await query("START TRANSACTION");
    await query(SEND_MONEY);
    await query(UPDATE_MONEY);
    await query(CREATE_LOG);
    await query("COMMIT");
  } catch (error) {
    console.error(error);
  } finally {
    endConnection();
  }
};

transaction();
