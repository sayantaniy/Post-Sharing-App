const express = require('express')
const app = express()
const multer = require('multer')

app.use(express.json())

const upload = multer({ storage: multer.memoryStorage()})

app.post('/createpost', upload.single("image"), async(req,res)=>{
    console.log(req.body)

    res.status(201).json({
        message:'Success'
    })
})

module.exports = app