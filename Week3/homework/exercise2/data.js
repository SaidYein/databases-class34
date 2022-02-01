const accounts = [
  {
    account_number: 101,
    balance: 10000,
  },
  {
    account_number: 102,
    balance: 0,
  },
  {
    account_number: 103,
    balance: 1200,
  },
  {
    account_number: 104,
    balance: 22000000,
  },
  {
    account_number: 105,
    balance: 712.5,
  },
];

const account_changes = [
  {
    change_number: 01,
    account_number: 101,
    amount: 900,
    date: "2020-01-01",
    remark: "Car Rental Allowance",
  },
  {
    change_number: 02,
    account_number: 102,
    amount: 15,
    date: "2020-01-01",
    remark: "School Payment",
  },
];

module.exports = { accounts, account_changes };
