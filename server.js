//Create Express App
const express = require("express");
const app = express();

//Import required dependencies
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

//Import Routes
const items = require("./routes/api/items");

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB Atlas
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//App Routes Config
app.use("/api/items", items);

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//Routes
app.get("/", (req, res) => {
  res.send({ msg: "success" });
});

//Port Config
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
