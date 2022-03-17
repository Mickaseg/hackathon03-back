const express = require("express");
const mysql = require("../config/db.js");
const Router = express.Router();


Router.get("/articles/:id/questions", (req, res) => {
    const id = req.params.id;
    const sql =
    "SELECT q.id, q.question_text, q.theme_id, q.image FROM articles AS a INNER JOIN questions AS q ON a.id=q.articles_id WHERE a.id = ?";
    mysql.query(sql, id, (err, result) => {
      // console.log(result);
      if (err) throw err;
      else return res.status(200).json(result);
    });
  });

module.exports = Router;

