const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const fs= require('fs');
const entriesFilePath = "test.txt";

const readEntriesFromFile = () => {
  const entriesContent = fs.readFileSync(entriesFilePath, "utf-8");
  return entriesContent.split("\n").filter((entry) => entry.trim() !== "");
};

const writeEntriesToFile = (entries) => {
  const entriesString = 
  entries.join("\n")
  fs.writeFileSync(entriesFilePath, entriesString);
};


let httpServer = app.listen(port, function () {
  console.log(`webbserver körs på port ${port}`);
});


app.post("/postRoute", (req, res)=> {
const entry= {
Name: req.body.name
Number: req.body.number
Email: req.body.email
Comment: req.body.comment
};


fs.readFile('test.txt', 'utf8', (err, data) => {
if (err) {
  console.error (err);
  return;
}
 console.log (data);
});

const content = "how are you";

fs.writeFile ('test.txt', content, err => {
  if (err) {
    console.error (err);
    return;
  }
});
*/