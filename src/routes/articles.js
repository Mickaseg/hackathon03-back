const express = require("express");
const mysql = require("../config/db.js");
const Router = express.Router();

Router.get("/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT a.id, a.content, a.image FROM articles AS a INNER JOIN questions AS q ON q.id=a.questions_id WHERE q.id = ?";
  mysql.query(sql, id, (err, result) => {
    if (err) {
      throw err;
    } else {
      // console.log(result);
      return res.status(200).json(result[0]);
    }
  });
});

module.exports = Router;
