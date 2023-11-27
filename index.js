const express = require("express");
const app = express();
const port = 8000;

const entries=[];

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});

app.post("/postRoute", (req, res)=> {
console.log (req.body);
entries.push ({Name:req.body.name, Number:req.body.number, Email:req.body.email, Comment:req.body.comment});
res.send (entries);
});

let httpServer = app.listen(port, function () {
  console.log(`webbserver körs på port ${port}`);
});

