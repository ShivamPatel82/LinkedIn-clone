import mongoose from "mongoose";


async function connToDB(){
   try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
   }catch(err){
    console.log("Error in db connection", err);
   }
}

export default connToDB;