const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/test", (req, res) => {
  res.json("tesk ok");
});

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.listen(9000, () => console.log("server started at port 9000"));
