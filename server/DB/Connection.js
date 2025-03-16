import mongoose from "mongoose";

const connectionDB  = async ()=>{

    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
       console.log("Error connecting to database"+error.message);
       process.exit(1);
    }

}