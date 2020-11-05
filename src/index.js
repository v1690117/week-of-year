const express = require("express");
const currentWeekNumber = require("current-week-number");
const fs = require("fs");

const app = express();
const port = 3000;
app.engine("ntl", function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err);
    var rendered = content
      .toString()
      .replace("#content#", options.content)
      .replace("#fontSize#", options.fontSize);
    return callback(null, rendered);
  });
});
app.set("views", "./views");
app.set("view engine", "ntl");

app.get("/", (req, res) => {
  const { prefix = "", postfix = "", fontSize = "3rem" } = req.query;
  res.render("index", {
    content: `${prefix}${currentWeekNumber()}${postfix}`,
    fontSize
  });
});

app.listen(port, () => {
  console.log(`App started!`);
});
