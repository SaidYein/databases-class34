const HOST = "localhost";
const CONN_SUCCESS = "Connected successfully";
const CONN_CLOSED = "Disconnected successfully";

const SEND_MONEY = `UPDATE account SET balance=balance-1000 WHERE account_number=101;`;
const UPDATE_MONEY = `UPDATE account SET balance=balance+1000 WHERE account_number=102;`;
const CREATE_LOG = `INSERT INTO account_changes VALUES(101,102,1000,now(),'Salary');`;

const createAccountTable = `CREATE TABLE IF NOT EXISTS account (
  account_number INT NOT NULL,
  balance DECIMAL,
  PRIMARY KEY (account_number)
);`;

const createAccountChangesTable = `CREATE TABLE IF NOT EXISTS account_changes (
change_number INT AUTO_INCREMENT,
account_number INT,
amount DECIMAL,
date TIMESTAMP,
remark TEXT,
PRIMARY KEY(change_number,account_number,date),
FOREIGN KEY(account_number) REFERENCES account(account_number) ON DELETE CASCADE);`;

module.exports = {
  HOST,
  CONN_SUCCESS,
  CONN_CLOSED,
  SEND_MONEY,
  UPDATE_MONEY,
  CREATE_LOG,
  createAccountTable,
  createAccountChangesTable,
};
