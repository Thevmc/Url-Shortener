const express=require("express");

const router=express.Router();
const {generatenewshorturl}=require("../controllers/url")



router.post("/",generatenewshorturl);
 
module.export=router;