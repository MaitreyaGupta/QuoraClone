const Product=require("./product.json")
const dotenv=require("dotenv")
const user=require("./models/user")
user.create(Product)