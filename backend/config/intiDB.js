import mongoose from "mongoose";


async function connToDB(){
   try{
    await mongoose.connect("mongodb+srv://shiv821107:Shivam1020@linkedinclone.5yf3w.mongodb.net/");
    console.log("Connected to DB");
   }catch(err){
    console.log("Error in db connection", err);
   }
}

export default connToDB;