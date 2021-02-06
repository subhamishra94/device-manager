const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 8080;

app.get('/', function(req, res) {
  res.send("hello world");
})

app.listen(port, function(){
  console.log(`server started with port ${port}`);
  console.log(`you can access it with  http://localhost:${port}`);
});
