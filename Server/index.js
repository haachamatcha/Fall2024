const express = require("express");
const app = express();
const userController = require("./controllers/users");

const PORT = 3000;

app
  .get("/", (req, res) => {
    res.send("The World Hasn't Ended Yet.");
  })
  .get("/about", (req, res) => {
    res.send("About Us.");
  })
  .use("/users", userController);

app.listen(PORT, () => {
  console.log("The World Hasn't Ended Yet.");
  console.log("I love you " + PORT);
});