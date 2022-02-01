### Preparing to data migration\*\*

**mySQL**

1. Fix 'secure_file_priv' error by either disabling or changing the directory.
   1. Create my.etc file in "/users/<_UserName_>" folder
   2. under [mysqld] tag, change the value of the variable 'secure*file_priv' to empty string or a custom folder directory *(I have chosen to deactivate it by assigning empty string to it)\_
2. Restart 'mysql'

**Create CSV files**

1. (Optional) Create a folder to keep your csv files in the "exercise4" folder.
2. Run the following commands;

   ```
   select * into outfile 'city.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from city;

   select * into outfile 'country.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from country;

   select * into outfile 'countrylanguage.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from countrylanguage;
   ```

   _*Your csv files should appear in the folder*_

**MongoDB**

1. Create an account, a cluster in MongoDB
2. After the Cluster is formed, in a security tab, add your ip by clicking "add curent ip address"
3. Add a database named "world"
4. On 'Databases' section click on "Connect" button
   1. Install MongoDB Shell if you don't have it' and follow the steps
   2. If you have it already, choose 'I have the MongoDB Shell installed'
      1. Choose the version of your shell
      2. Run the command on the 2nd step in your terminal by changing <_password_> with your password.

### Uploading the data

1. Use mongoimport to upload files
2. In the shell, check whether the files are uploaded:
   1. type "show dbs"
   2. If you see your database in the list, then type "use <_databaseName_>"
   3. type "show collections", and you should be seeing the tables in the list
   4. Then type "db.<_collectionName_>.find()" to see the data in that collection

_Firstly, I have tried to upload my csv files with the following command:`mongoimport -d world -c countries --type csv --file country.csv --fields "Code, Name, Continent, Region, SurfaceArea, IndepYear, Population, LifeExpectancy, GNP, GNPOld, LocalName, GovernmentForm, HeadOfState, Capital, Code2"`All the documents are uploaded but I could not locate them in my cluster. even the database was not visible. I have made a research a bit and found the following command which is called "--uri connection string":`mongoimport --uri mongodb+srv://<_UserName_>:<_Password_>.@<_DatabaseName_>.afuvh.mongodb.net/world`So I have created the database named 'HackYourFuture' in the Atlas. Then, on the terminal, I have created the collections by using --uri connection string to that database with the field names. After these steps, all the collections and their data were visible in my cluster._
