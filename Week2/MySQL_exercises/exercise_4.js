const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "Week2_HW",
});

const execQuery = util.promisify(connection.query.bind(connection));

//All research papers and the number of authors that wrote that paper.
const no_authors = `SELECT COUNT(author_research.author_no) AS no_Authors, research_Papers.paper_title
FROM research_Papers
JOIN author_research
ON author_research.paper_id = research_Papers.paper_id
GROUP BY research_Papers.paper_title;`;

//Sum of the research papers published by all female authors.
const no_female_publishers = `SELECT COUNT(paper_id) AS no_female_publishers 
FROM author_research 
INNER JOIN authors
ON authors.author_no=author_research.author_no
WHERE authors.gender='F';`;

//Average of the h-index of all authors per university.
const av_h_index = `SELECT
AVG (h_index) AS av_h_index, university
FROM authors
GROUP BY university;`;

//Sum of the research papers of the authors per university.
const no_papers_by_uni = `SELECT authors.university,count(research_Papers.paper_title) AS no_papers
FROM author_research 
JOIN research_Papers  
ON author_research.paper_id = research_Papers.paper_id 
JOIN authors 
ON author_research.author_no = authors.author_no
GROUP by authors.university;`;

//Minimum and maximum of the h-index of all authors per university.
const max_min_h_index = `SELECT authors.university, MIN(authors.h_index),MAX(authors.h_index)
FROM author_research 
JOIN research_Papers  
ON author_research.paper_id = research_Papers.paper_id 
JOIN authors 
ON author_research.author_no = authors.author_no
GROUP BY university;`;

const queryArray = [
  no_authors,
  no_female_publishers,
  av_h_index,
  no_papers_by_uni,
  max_min_h_index,
];

(async () => {
  connection.connect();

  try {
    queryArray.forEach(async (query, count) => {
      const result = await execQuery(query);
      console.log(
        `########################################################################### `
      );
      console.log(`Answer for query ${count + 1} is: `);
      console.log(
        `########################################################################### `
      );

      for (i in result) {
        console.table(result[i]);
      }
    });
  } catch (error) {
    console.error(error);
    connection.end();
  }

  connection.end();
})();
