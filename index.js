// console.log("Error handling middleware")

//const something =require(somelibrary);
const express = require('express');
require('dotenv').config();

const app = express();



// app.use(middlewarefunction)
app.use((err, req, res, next) => {
    console.error(err.stack)

    res.status(400).send("Something went wrong")
})
//lets define the first home route
//app.method (path,handler)

app.get('/', (req, res) => {
    res.send('Everything is ok')
})




//object.method
const PORT = process.env.PORT;
app.listen(3000, () => {
    console.log(`The server is running on ${3000}`)
})
