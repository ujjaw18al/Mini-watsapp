const express = require("express");
const app = express();
const mongoose = require("mongoose");
const chat =require("./models/chat")
const path = require("path");
const port =8080;
const methodOverride = require("method-override");




main().then( (result) =>{
    console.log("result");
    
}).catch((err) =>{
    console.log("error in db");
    
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extented : true}));
app.use(methodOverride("_method"));
// app.use(express.static("public"));



 //index route---
app.get("/chats",async(req,res) => {
    let chats = await chat.find();  //chat.find()always is anysh function
    // console.log(chats);
  res.render("allchats.ejs",{chats});
});


//new routee
app.get("/chats/new" ,(req ,res) =>{
    res.render("new.ejs");
});
//create route 
app.post("/chats" ,(req , res) =>{
    let {from ,msg ,to} =req.body;
    let newchat =chat({
        from : from,
        to : to,
         msg: msg,
        created_at : new Date()
    });
    newchat.save().then((res) =>{
        console.log("chat was saved ");
        // bese save() ek asych function he to ham isme jo req,res ja rha usko aynsch ker le or await newchat.save()ker sakte agr then or catch use nhihota to
    }).catch((err) =>{
        console.log("error");
        
    });
    console.log(newchat);
    res.redirect("/chats");
});



//edit route
app.get("/chats/:id/edit" , async (req, res) =>{
    let {id} =req.params;
    console.log(id);
    let Chat =await chat.findById(id);
    res.render("edit.ejs",{Chat});
});



//update route
app.put("/chats/:id" , async (req,res)=>{
     let {id} =req.params;
     let {msg : newMess} =req.body;
     let updatedChat =  await chat.findByIdAndUpdate(id,{msg : newMess},{runValidators : true , new:true});
    res.redirect("/chats");
});

// delete route

app.delete("/chats/:id" ,async (req,res)=>{
    let {id} =req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    res.redirect("/chats");
});



app.get("/" ,(req,res) =>{
    res.send("app is working");
});

app.listen(port ,() => {
    console.log("port was listing");
    
});