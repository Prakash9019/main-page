const connectDB = require('./db');
const express = require('express');
var cors=require('cors');
const model=require('./Medical');
var fs=require('fs');
//connectDB();
const app = express();
const PORT=5000;
connectDB();
app.use(cors());
app.use(express.json());



app.use('/api/auth',require('./routers/auth.js'));
app.use('/api/notes',require('./routers/notes'));
app.use('/api/bodytemp',require('./routers/bodytemp'));
app.use('/api/breaths',require('./routers/breaths'));
app.use('/api/medical',require('./routers/medical'));

app.get('/',(req,res)=>{
    res.send("hello surya");
})

app.listen(PORT, () => {
    console.log(`inoteBook listening at http://localhost:${PORT}`);
})