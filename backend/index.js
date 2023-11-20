const express = require('express')
const app = express()
const PORT = 4000
const connectDb = require('./db');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// DB connection established
connectDb();

// Render home page.
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.use(express.json());
app.use('/api' , require("./Routes/CreateUser"));
app.use('/api' , require("./Routes/DisplayData"));


// listen on port 4000
app.listen(PORT, () => { 
  console.log(`Example app listening on port ${PORT}`)
})
