require('dotenv/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const {PORT, DB_CONNECTION} = process.env
const rootRouter = require('../backend_salyco/router/index')
const bodyParser = require('body-parser')
app.use(cors())

app.use(express.static("views"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(rootRouter)
// Listen 
app.get('/', (req, res) => {
    const data = {
      succsess: true,
      message: 'Backend is running well'
    }
    return res.json(data)
  })

// Connection to DB
mongoose.set('strictQuery', true);
mongoose.connect(DB_CONNECTION, {useNewUrlParser: true})
let db = mongoose.connection

db.on("error", console.error.bind(console, "Database connection Error!"))
db.once('open', () => {
  console.log("Database is Connected");
})

  
  app.listen(PORT, () => {
    console.log(`App runing on port ${PORT}`)
  })