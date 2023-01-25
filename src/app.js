
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require('./db/connection');
const router = require("./routers/studs");
app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send("hello");
// })





app.use(router);





app.listen(port,()=>{
    console.log(`connection established at port : ${port}`);
})