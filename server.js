const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.put("/post/:id", (req, res) => {
  res.json({
    id: req.params.id,
    title: req.body.title,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Started on PORT 5000`);
});
