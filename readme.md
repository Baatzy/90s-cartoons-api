## Instructions

- Create a package.json

  ```
  npm init -y
  ```

- Install all the necessary dependencies

  ```
  npm install --save express body-parser pg knex
  ```

- Install dev dependencies

  ```
  npm install --save-dev morgan nodemon
  ```

- Create base files

  ```
  touch app.js knexfile.js .gitignore
  ```

- Add `node_modules/` to the `.gitignore`

- Add connection information to the `knexfile.js`

- Require necessary packages into `app.js` and write code to get your server started

- Add a `npm run dev` script with nodemon and a `npm run knex` script for knex

- Create a database folder and a connection file

  ```
  mkdir db && touch db/connection.js
  ```

- Add the knex connection code to `connection.js`

- Require the knex connection wherever you have routing

  ```
  var knex = require('./db/connection')
  ```
  
- Create your database on the command line

  ```
  createdb [your_db]
  ```

- Create your tables with migrations

  ```
  npm run knex migrate:make create_your_table
  ```

- Get to it!
