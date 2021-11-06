const express = require("express");
const calcWeekNumber = require("current-week-number");
const fs = require("fs");

const getNumber = (params) => {
  const { mode = "current" } = params;
  switch (mode) {
    case "current":
      return calcWeekNumber();
    case "countdown":
      const { targetDate } = params;
      const targetWeek = calcWeekNumber(targetDate);
      return targetWeek - calcWeekNumber();
    default:
      return "unsupported mode!";
  }
};

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
    content: `${prefix}${getNumber(req.query)}${postfix}`,
    fontSize,
  });
});

app.listen(port, () => {
  console.log(`App started!`);
});
