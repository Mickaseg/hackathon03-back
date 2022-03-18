const cors = require("cors");
const express = require("express"); // <-----------
const morgan = require("morgan"); // ----

require("dotenv").config();

const quizz = require("./src/routes/quizz.js");
const articles = require("./src/routes/articles.js");
const carddetails = require("./src/routes/carddetails.js");

const app = express();

app.use("/public", express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/quizz", quizz);
app.use("/articles", articles);
app.use("/carddetails", carddetails)

let server = app.listen(3030, () => {
  console.log("listening on port", server.address().port);
});
