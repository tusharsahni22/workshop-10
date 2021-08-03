const express = require('express')
const app = express();
const mongoose = require('mongoose');

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


mongoose.connect('mongodb://localhost/testdb',{ useNewUrlParser: true ,useUnifiedTopology: true } ).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.use(require('./router'))

app.get('/',(req, res) => {
  res.json({'message':'Welcome'})
})

app.listen(3000, () => {
  console.log("server started")
})

module.exports = app;