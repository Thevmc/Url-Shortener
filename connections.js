const mongoose=require("mongoose");

async function getconnection(url)
{
    return mongoose.connect(url);
}
module.exports={getconnection};