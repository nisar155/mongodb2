const mongoose = require("mongoose")
const product = mongoose.Schema({
    productName:String,
    productcat:String,
    productPrize:Number,
    productQuantity:Number
})
const prodmodel = mongoose.model("product",product);
module.exports=prodmodel;
