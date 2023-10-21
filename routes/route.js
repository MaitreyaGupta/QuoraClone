const express=require("express")
app=express()
const mongoose=require("mongoose")
const user=require("../models/user")

async function getAllData(req,res) {
    const data=await user.find({})
    res.status(200).json(data)
}

module.exports=getAllData
