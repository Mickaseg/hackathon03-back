const cors = require("cors");
const express = require("express"); // <-----------
const morgan = require("morgan"); // ----

require("dotenv").config();

const quizz = require("./src/routes/quizz.js");
const article = require("./src/routes/article.js");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/quizz", quizz);
app.use("/article", article);

let server = app.listen(3030, () => {
  console.log("listening on port", server.address().port);
});
