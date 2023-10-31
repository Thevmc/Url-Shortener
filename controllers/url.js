const short=require("shortid");
const URL=require("../models/url")
async function generatenewshorturl(req,res)
{
    const body=req.body;
    if(!body.url) return res.status(400).json({err:"url is required"});
    const shortId=short();
    await URL.create({
        shortid:shortId,
        redirectedurl:body.url,
        visithistory:[]
    });
    return res.json({id:shortId})

};
module.exports={generatenewshorturl};