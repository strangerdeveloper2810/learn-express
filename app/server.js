const express = require("express");
const app = express();
const router = require("./routers/root.router");
const port = 8000;

app.use(router);

// Convert req, res to JSON to useful
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
