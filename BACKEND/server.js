const dotenv = require('dotenv')
dotenv.config() //Environment variables must be loaded BEFORE any file that uses them
const app = require('./src/app')
const connectToDB = require('./db/db')
connectToDB()
const postModel = require('./models/post.model')

app.listen(3000, ()=>{
    console.log("Server running in port 3000")
})