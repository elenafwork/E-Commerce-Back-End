# E-Commerce-Back-End
Object-Relational Mapping (ORM) Challenge: E-commerce Back End
## Table of Content
  - [Description](#description)
  - [Technology Used](#technology)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

## Description
- GIVEN a functional Express.js API
- When User adds hir/her database name, MySQL username, and MySQL password to an environment variable file, then  User is able to connect to a database using Sequelize.
- After entering schema and seed commands the development database is created and is seeded with test data
- When User enters the command to invoke the application then the server is started and the Sequelize models are synced to the MySQL database
- When User opens API GET routes in Insomnia for categories, products, or tags then the data for each of these routes is displayed in a formatted JSON
- When User tests API POST, PUT, and DELETE routes in Insomnia then he/she is able to successfully create, update, and delete data in the database

 ## Technology Used
  - JavaScript,
  - NodeJS, 
  - Express.js
  - MySQL
  - Sequelize
  - dotenv
  - Insomnia

  ## Installation
  - write your credentials for the database into the .env file
  - run SQL commands in schema.sql
  - Open the terminal and run commands:
     
  ```
  node seeds
  ```

  ``` 
  node server.js
  ```
  ## Usage 
   Please refer to the following examples using Insomnia: 
 1. GET all for Categories, Products and Tags:

 2. GET by id - retrieving information about specific Category, Product or Tag by its id value:
 3. POST - Creating new Category, Product or Tag 
 4. PUT - updating the specific Category, Product or Tag by its id value
 5. DELETE -delete the specific Category, Product or Tag by its id value

  ## Credits
  - Caleb Curry YouTube Channel, https://www.youtube.com/watch?v=a-o0d_e9mW8 ,
  - StuckOverflow
  
  ## License
  The project is under MIT License
 
  ## Questions
  If you have any questions regarding the project, please, feel free to contact me:
  - GitHub: [elenafwork](https://github/elenafwork)
  - Email: <elenaf.work@gmail.com>
