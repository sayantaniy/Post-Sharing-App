const express = require('express')
const app = express()
const multer = require('multer')
const postModel = require('../models/post.model')
const uploadFile  = require('../services/storage.service')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const upload = multer({ storage: multer.memoryStorage()})

//upload.single("image") tells Multer to parse the entire multipart/form-data request,not just the file.

app.post('/createpost', upload.single("image"), async(req,res)=>{
    console.log(req.body)

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message:'Post created Successfully',
        postMessage:post
    })
})

app.get('/posts',async (req,res)=>{
    const posts = await postModel.find()
    res.status(200).json({
        message:'Post fetched Successfully',
        posts //array
    })
})

module.exports = app