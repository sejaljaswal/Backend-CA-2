const express = require("express")
const mongoose = require("mongoose");
const User = require("./schema")

const app = express();
app.use(express.json());

const PORT = 5050;


app.get("/User" , async(req,res) =>{
    const {username , age ,email } = req.query;
    if (!username){
        return res.status(400).send("username can not be empty")
    }
    if (!age){
        return res.status(400).send("age can not be empty")
    }
    if (!email){
        return res.status(400).send("email can not be empty")
    }

    const User = new username({username , age , email});
    try {
        await User.find();
        res.status(201).send("user found " , User);
    }
    catch(error){
        res.status(500).send("error message" , error);
    }
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})