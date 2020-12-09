require('dotenv').config();
const express = require('express');
const db = require('./db')
const morgan = require('morgan');

const app = express();
app.use(express.json())
app.use(morgan("tiny"))


//Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    const results = await db.query("SELECT * FROM restaurants")
    console.log(results);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"]
        },
    });
});

//Get individual restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req)
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "burgerking"
        }
    })
});

app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "burgerking"
        }
    })
});


app.put("/api/v1/restaurants/:id", (req,res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "burgerking"
        }
    })
})

app.delete("/api/v1/restaurants/:id", (req,res)=> {
    res.status(204).json({
        status: "success"
    })
})

const port = process.env.PORT || 3001;
app.listen(port , () => {
    console.log(`Server is up and listening on port ${port}`);
});

