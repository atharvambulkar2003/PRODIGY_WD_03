const express=require("express");
const app=express();
const port=8081;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

app.get("/TicTac",(req,res)=>{
    res.render("homePage.ejs");
});

app.get("/tictacgame",(req,res)=>{
    res.render("index.ejs");
});
