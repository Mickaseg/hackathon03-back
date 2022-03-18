const express = require("express");
const mysql = require("../config/db.js");
const Router = express.Router();

Router.get("/", (req, res) => {
  const sql = "SELECT * FROM card_details";
  mysql.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      // console.log(result);
      return res.status(200).json(result);
    }
  });
});

module.exports = Router;
