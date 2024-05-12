const {join} = require("path");
require("dotenv").config({
    path:join(__dirname,'..','.env')
});
const mongoose = require("mongoose");

exports.connectDb = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log(">>>>>>>> Db is connected successfully >>>>>>>>>>");
    }catch(error){
        console.log(">>>>>>> an error occurred connecting to db >>>>>>>>>>>");
        console.log(error.message);
    }
}