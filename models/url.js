const mongoose=require("mongoose");
 
 const userSchema=mongoose.Schema(
    {
        shortid:{type:String,required:true,unique:true},
        redirectedurl:{type:String,requires:true},
        visithistory:[{timestamp:{type:Number}}]
    }
 );
 const URL=mongoose.model("url",userSchema);

 module.exports=URL;