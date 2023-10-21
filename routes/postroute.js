const express=require("express")
app=express()
const mongoose=require("mongoose")
const user=require("../models/user")

async function postAllData(req,res) {
    const data={
        email:"xyz1@gmail.com",
        password:"xyz1"
    }
    user.insertMany([data])
    res.status(200).json(data)
    
}

module.exports=postAllData