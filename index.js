const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://sujalsanga:Sujal%402003@cluster26.b3x2vtb.mongodb.net/sorry');

const SorrySchema = new mongoose.Schema({
    msg:String
});

const Sorry = mongoose.model('sorry', SorrySchema);

app.use(bodyParser.json());

app.post("/msg",async(req,res)=>{
    const msg = req.body.msg
    await Sorry.create({
        msg:msg
    })
    res.status(200).json({
        msg:"msg successful"
    })
})

app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});