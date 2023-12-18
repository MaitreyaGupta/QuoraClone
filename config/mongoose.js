const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Maitreya:KillerMan@cluster0.sk6ugig.mongodb.net/a1",{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection


db.once("open",function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
    console.log("Connected to database")
    }
}
)

module.exports=db;
