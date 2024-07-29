const express= require('express');
const cors=require('cors');
const {db}=require('./databases/db.js');
const {readdirSync}=require('fs');
const { route } = require('./routes/transactions.js');
const app=express();

require('dotenv').config();
const PORT=process.env.PORT;

//middleware 
app.use(express.json());
app.use(cors())

//routers
readdirSync('./routes').map((route)=> app.use('/api/v1',require('./routes/'+route)));

const server=()=>{
    db();
    app.listen(PORT,()=>{
        console.log('Listening on the Port:',PORT)
    })
}

server();