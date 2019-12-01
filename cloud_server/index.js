const express= require('express');
const app=express();
const port=process.env.PORT||7000;
const routers= require('./routes');

routers(app);
app.listen(port);
console.log("Cloud Service Resumed:-");