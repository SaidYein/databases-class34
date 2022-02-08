const mysql = require("mysql");
const util = require("util");
//data required to fill in the rows of tables
const { authorsData, researchesData, author_researchData } = require("./data");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "Week2_HW",
});

const createResearchTable = `CREATE TABLE IF NOT EXISTS research_Papers (
  paper_id INT PRIMARY KEY,
  paper_title VARCHAR(100),
  conference VARCHAR(50),
  publish_date DATE
);`;

const createAuthor_ResearchTable = `CREATE TABLE IF NOT EXISTS author_research (
  id INT AUTO_INCREMENT PRIMARY KEY,
  author_no INT NOT NULL,
  paper_id INT NOT NULL,
  FOREIGN KEY (author_no) REFERENCES authors(author_no),
  FOREIGN KEY (paper_id) REFERENCES research_Papers(paper_id)
);`;

//random assignments to auxiliary table(author_research)
const insertResearch_Papers = `INSERT INTO research_Papers (paper_id, paper_title, conference, publish_date) VALUES `;

// this constants will be used as a first part of the query in the 'insertData'(Line28) below
const insertAuthors = `INSERT INTO authors (author_no, author_name, university, date_of_birth, h_index, gender, mentor) VALUES `;
const insertAuthor_Research = `INSERT INTO author_research (author_no, paper_id) VALUES `;

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

//add Random data to author_researchData
(() => {
  for (i = 0; i < researchesData.length; i++) {
    author_researchData.push(
      `(${Math.floor(Math.random() * 15) + 1},0${i + 1});`
    );
  }
})();

//main function
(async () => {
  const execQuery = util.promisify(connection.query).bind(connection);

  connection.connect();
  try {
    await execQuery(createResearchTable);
    await execQuery(createAuthor_ResearchTable);
    await insertData(insertAuthors, authorsData);
    await insertData(insertResearch_Papers, researchesData);
    await insertData(insertAuthor_Research, author_researchData);
  } catch (error) {
    console.log(error);
    connection.end();
  }

  connection.end();
})();
