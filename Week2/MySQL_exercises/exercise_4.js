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
const no_authors = `SELECT COUNT(author_id) AS no_Authors, paper_title
FROM research_Papers
GROUP BY paper_title;`;

//Sum of the research papers published by all female authors.
const no_female_publishers = `SELECT COUNT(paper_id) AS no_female_publishers 
FROM research_papers 
INNER JOIN authors
ON authors.author_no=research_papers.author_id 
WHERE gender='female';`;

//Average of the h-index of all authors per university.
const av_h_index = `SELECT
AVG(h_index) AS av_h_index,
university
FROM authors
GROUP BY university;`;

//Sum of the research papers of the authors per university.
const no_papers_by_uni = `SELECT university,count(*) AS no_papers
FROM authors 
JOIN research_Papers  
ON authors.author_no = research_Papers.author_id 
GROUP by university;`;

//Minimum and maximum of the h-index of all authors per university.
const max_min_h_index = `SELECT university, MIN(h_index),MAX(h_index)
FROM authors 
JOIN research_papers
ON  authors.author_no=research_Papers.author_id 
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
