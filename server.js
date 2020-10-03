const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/contacts", (req, res) => {
  res.send(req.body);
  //   res.status(200).json({
  //     Message: "Welcome to HTTP Exploration",
  //   });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Started on PORT 5000`);
});
