require('dotenv').config();
const express = require('express');
const app = express();

//Get all restaurants
    //using data{field} makes it easier for frontend to know where all the data 
    //will be stored.
   
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"]
        },
    });
});

//Create a restaurant

app.post("/api/v1/restaurants", (req, res) => {});


//Get individual restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req)
});

const port = process.env.PORT || 3001;
app.listen(port , () => {
    console.log(`Server is up and listening on port ${port}`);
});


