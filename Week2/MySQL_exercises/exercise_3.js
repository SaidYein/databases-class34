const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "Week2_HW",
});

const execQuery = util.promisify(connection.query.bind(connection));

//Write a query that prints names of all authors and their corresponding mentors.
const authors_and_mentors = `SELECT  mentor.author_name AS Mentor_Name , 
author.author_name AS Author_Name 
FROM authors mentor 
INNER JOIN authors author on author.author_no = mentor.mentor;`;

//Write a query that prints all columns of authors and their published paper_title.
//If there is an author without any research_Papers, print the information of that author too.
const author_and_papers = `SELECT authors.*, research_Papers.paper_title
FROM authors
LEFT JOIN research_Papers 
ON authors.author_no = research_Papers.author_id;`;

const queryArray = [authors_and_mentors, author_and_papers];

(async () => {
  connection.connect();

  try {
    queryArray.forEach(async (query, count) => {
      const result = await execQuery(query);

      console.log(`Answer for query ${count + 1} is: `);

      for (i in result) {
        console.log(result[i]);
      }
    });
  } catch (error) {
    console.error(error);
    connection.end();
  }

  connection.end();
})();
