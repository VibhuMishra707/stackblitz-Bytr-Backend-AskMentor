const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let db;

(async () => {
  db = await open({
    filename: "./database1.sqlite",
    driver: sqlite3.Database,
  })
} 

// ---------------------------------------------------------- //
//       Chapter 4: FoodieFinds: Food Discovery App           //
// ---------------------------------------------------------- //
//                    Tutorial BD 4.1                         //
// ---------------------------------------------------------- //

// Example - 1

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
