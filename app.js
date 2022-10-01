import Express from "express";
import bodyParser from "body-parser";

const app = Express();

app.get("/", function (req, res) {
  const myJson = {
    name: "Abdus Sami",
    age: "20",
  };
  res.json(myJson);
});

app.listen(3000 , ()=>{
  console.log("server running...")
});
