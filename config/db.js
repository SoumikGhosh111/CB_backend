const mongoose = require("mongoose"); 
require("dotenv").config(); 

async function connectDb() { 
    try{ 
        await mongoose.connect(process.env.MONGO_URI); 
        console.log("Connect with db"); 
    }
    catch(e) { 
        console.log(e.message); 
        process.exit(); 
    }
}



module.exports = connectDb; 