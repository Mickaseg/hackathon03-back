const express = require("express");
const mysql = require("../config/db.js");
const Router = express.Router();

Router.get("/questions/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT q.id, q.question_text FROM questions AS q WHERE id= ?";
  mysql.query(sql, id, (err, result) => {
    // console.log(result);
    if (err) throw err;
    else return res.status(200).json(result);
  });
});

Router.get("/questions/:id/answers", (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT a.id, a.answer_text, a.isCorrect FROM questions AS q INNER JOIN answers AS a ON q.id=a.questions_id WHERE q.id = ?";
  mysql.query(sql, id, (err, result) => {
    // console.log(result);
    if (err) throw err;
    else return res.status(200).json(result);
  });
});

module.exports = Router;
