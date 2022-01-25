const mysql = require("mysql");
const util = require("util");
//data required to fill in the rows of tables
const { authorsData, researchesData } = require("./data");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "Week2_HW",
});

const createResearchTable = `CREATE TABLE IF NOT EXISTS research_Papers (
  paper_id INT NOT NULL AUTO_INCREMENT,
  paper_title VARCHAR(100),
  conference VARCHAR(50),
  publish_date DATE,
  author_id INT, 
  PRIMARY KEY (paper_id),
  FOREIGN KEY (author_id) REFERENCES authors(author_no)
);`;

// this constants will be used as a first part of the query in the 'insertData'(Line28) below
const insertAuthors = `INSERT INTO authors (author_no, author_name, university, date_of_birth, h_index, gender, mentor) VALUES `;
const insertResearch_Papers = `INSERT INTO research_Papers (paper_title, conference, publish_date, author_id) VALUES `;
const updateAuthors = `ALTER TABLE authors ADD CONSTRAINT FOREIGN KEY(mentor) REFERENCES authors(author_no);`;

// query function to insert data to any table
const insertData = (query, data) => {
  data.forEach((row) => {
    connection.query(query + row, (error, results) => {
      if (error) {
        throw error;
      }
    });
  });
};

//main function
(async () => {
  const execQuery = util.promisify(connection.query).bind(connection);

  connection.connect();
  try {
    await execQuery(createResearchTable);
    await insertData(insertAuthors, authorsData);
    await insertData(insertResearch_Papers, researchesData);
    await execQuery(updateAuthors);
  } catch (error) {
    console.log(error);
    connection.end();
  }

  connection.end();
})();
