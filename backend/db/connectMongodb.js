import mongoose from "mongoose";

const connectMongodb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb connect: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MONGODB : ${error.message}`);
        process.exit(1);
    }
}

export default connectMongodb