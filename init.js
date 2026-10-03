const mongoose = require("mongoose");
const chat =require("./models/chat");

main().then( (result) =>{
    console.log("result");
    
}).catch((err) =>{
    console.log("error in db");
    
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
};

let chats =[
    
  { from: "neha", to: "priya", msg: "Send me your exam sheet", created_at: new Date() },
  { from: "rahul", to: "amit", msg: "Bro, where are you?", created_at: new Date() },
  { from: "riya", to: "neha", msg: "Are you coming today?", created_at: new Date() },
  { from: "aman", to: "rohit", msg: "Let's meet at 5 PM", created_at: new Date() },
  { from: "priya", to: "simran", msg: "Did you complete the assignment?", created_at: new Date() },
  { from: "rohit", to: "rahul", msg: "Send me the notes", created_at: new Date() },
  { from: "simran", to: "aman", msg: "Happy birthday bro!", created_at: new Date() },
  { from: "vikas", to: "neha", msg: "Can you call me?", created_at: new Date() },
  { from: "pooja", to: "riya", msg: "What are you doing?", created_at: new Date() },
  { from: "karan", to: "vikas", msg: "Let's go for lunch", created_at: new Date() },
  { from: "aditya", to: "pooja", msg: "Did you reach home?", created_at: new Date() },
  { from: "sneha", to: "karan", msg: "Please send the file", created_at: new Date() },
  { from: "mohit", to: "aditya", msg: "Call me when you are free", created_at: new Date() },
  { from: "ananya", to: "sneha", msg: "Have you watched the movie?", created_at: new Date() },
  { from: "deepak", to: "mohit", msg: "Bro, check your WhatsApp", created_at: new Date() },
  { from: "tanya", to: "ananya", msg: "Let's study together", created_at: new Date() },
  { from: "arjun", to: "deepak", msg: "Where is the meeting?", created_at: new Date() },
  { from: "kavya", to: "tanya", msg: "Send me your notes", created_at: new Date() },
  { from: "sameer", to: "arjun", msg: "I will reach in 10 minutes", created_at: new Date() },
  { from: "megha", to: "kavya", msg: "Can you help me?", created_at: new Date() },
  { from: "varun", to: "sameer", msg: "Did you submit the form?", created_at: new Date() },
  { from: "isha", to: "megha", msg: "See you tomorrow", created_at: new Date() },
  { from: "yash", to: "varun", msg: "Please check the email", created_at: new Date() },
  { from: "nikhil", to: "isha", msg: "Are you free tonight?", created_at: new Date() },
  { from: "shruti", to: "yash", msg: "Good morning!", created_at: new Date() }
];


chat.insertMany(chats);


//index.js me ek ek value ya data insert kerne  ki file he okk ujjawal  sir

//insert value in db

// let chat1 = new chat({
//     from: "neha",
//     to: "priya",
//     msg:"send me your exam sheet",
//     created_at : new Date()
// });

// chat1.save().then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log("error in db ...somthing wrong!");
    
// });

