const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const postRoute = require("./routes/post/post.route.js");
const userRoute = require("./routes/users/user.route.js");

// middlware
const app = express();
app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/post", postRoute);

// Home route
app.get("/", (req, res) => {
  res.send("Blog app Home");
});
// health route
app.get("/health", (req, res) => {
  res.status(200).send({ health: "Health is Good" });
});

// connection url
let connectionUrl = process.env.MONGO_URI;
connectionUrl = connectionUrl.replace(
  "<username>",
  process.env.MONGO_USER_NAME
);
connectionUrl = connectionUrl.replace(
  "<password>",
  process.env.MONGO_USER_PASSWORD
);
connectionUrl = `${connectionUrl}/${process.env.DB_NAME}?${process.env.QUERY_STRING}`;

// port
const port = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(connectionUrl);
    app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`);
    });
    console.log("Database Connected");
  } catch (error) {
    console.log("Database connection fail");
  }
}
main();
