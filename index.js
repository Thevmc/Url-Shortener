const express=require("express");
const short=require("shortid");
const app=express();
const URL=require("./models/url");
const {getconnection}=require("./connections");
const urlroute=require("./routes/url");


const port=2001;

getconnection("mongodb://127.0.0.1:27017/shorturl").then(()=> console.log("mongo connected.."));

app.use(express.json());
//app.use(express.urlencoded())

app.post("/",async(req,res)=>
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
})
app.get("/:shortid",async(req,res)=>
{
    const shortId=req.params.shortid;
   const entry= await URL.findOneAndUpdate({shortId},{$push:{visithistory:{timestamp:Date.now()}}})

res.redirect(entry.redirectURL);
    });

//app.use("/api" , urlroute); 


app.listen(port,()=>console.log(`Server started. at port:${port}`));