const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is Running");
});

app.post("/api/form", (req, res) => {
  console.log("Received Data: ", req.body);

  res.json({
    message: "Form Data Received Successfully",
    data: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
