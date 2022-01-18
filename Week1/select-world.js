var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
  port: 3306,
});
connection.connect();
let questions = [
  "What are the names of countries with population greater than 8 million?",
  "What are the names of countries that have “land” in their names?",
  "What are the names of the cities with population in between 500,000 and 1 million?",
  "What's the name of all the countries on the continent ‘Europe’?",
  "List all the countries in the descending order of their surface areas.",
  "What are the names of all the cities in the Netherlands?",
  "What is the population of Rotterdam?",
  "What's the top 10 countries by Surface Area?",
  "What's the top 10 most populated cities?",
  "What is the population number of the world?",
];

let queries = [
  "SELECT Name, population FROM new_world.country WHERE Population > 8000000",
  "SELECT Name FROM new_world.country WHERE Name LIKE '%land%'",
  "SELECT Name, population FROM new_world.city WHERE Population > 500000 AND Population < 1000000",
  "SELECT Name, continent FROM new_world.country WHERE Continent= 'Europe'",
  "SELECT name, SurfaceArea FROM new_world.country ORDER BY SurfaceArea DESC",
  "SELECT Name FROM new_world.city WHERE CountryCode = 'NLD'",
  "SELECT Name, Population FROM new_world.city WHERE Name = 'Rotterdam'",
  "SELECT Name, SurfaceArea FROM new_world.country ORDER BY SurfaceArea DESC LIMIT 10",
  "SELECT Name, Population FROM new_world.city ORDER BY Population DESC LIMIT 10",
  "SELECT sum(population) FROM new_world.country",
];

for (let i in queries) {
  connection.query(queries[i], function (error, results, fields) {
    if (error) {
      throw error;
    }
    console.log(`${questions[i]}  : `, results);
  });
}

connection.end();
