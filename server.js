const app = require('./src/app')
const dotenv = require('dotenv')
const connectToDB = require('./db/db')
const postModel = require('./models/post.model')

dotenv.config()

connectToDB()



app.listen(3000, ()=>{
    console.log("Server running in port 3000")
})