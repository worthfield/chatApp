import mongoose from "mongoose"
import config from "./config/config.js"
const dbConnection = ()=>{
    mongoose.connect(config.MONGOURL).then(()=>{
        console.log("connecting to database");

    }).catch(error=>{
        console.log(error)
    })

}
export default dbConnection;