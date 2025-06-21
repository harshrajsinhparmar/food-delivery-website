const mongoose =require("mongoose");

const ProductModelSchema =mongoose.Schema(
{
title:{
type:String,
required:true,
},
image:{
    type:String,
    required:true,
},
timeFrame:{
    type:Number,
    required:true,
},
subText:{
    type:String,
    required:true,
},

discount:{
type:String,
required:true,
},
},
{
timestamp:true
}

);

const ProductModel =mongoose.model("Product",ProductModelSchema);

module.exports =ProductModel;