const express=require("express")
const app=express()
const getAllData=require("../routes/route")
const postNewData=require("../routes/postroute")
const mongoose=require("mongoose")
app.route("/").get(getAllData)
app.route("/").post(postNewData)
module.exports=app
