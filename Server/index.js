const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("The World Hasn't Ended Yet.");
  console.log("I love you" + PORT);
});
