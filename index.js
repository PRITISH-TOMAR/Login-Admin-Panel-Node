const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000
const cors = require('cors')
const {connectToMongoDB} = require("./Connection/Connect")

const route = require('./Routes/Route')



//.................................... 
//MongoDB Connect
const dotenv = require('dotenv')
dotenv.config({ path: '.env' });


const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/TestDB";
// In case you do not have MONGO_URI


connectToMongoDB(url)  

//.....................................

app.use(express.json())   
//......................................

const corsOptions = {
    origin: process.env.MAIN_URL,
    credentials: true, 
}

app.use(cors(corsOptions));
 

app.use('/', route)



app.listen(PORT, ()=> console.log(`Running Server at ${PORT}`))