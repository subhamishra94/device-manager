const express = require('express');
const app = express();
const cors = require('cors');

// controller routes
const deviceRouter = require('./controllers/device');

// middlewares
app.use(express.static('./react/build'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const port = 8080;

app.use('/device', deviceRouter)

app.listen(port, function(){
  console.log(`server started with port ${port}`);
  console.log(`you can access it with  http://localhost:${port}`);
});
