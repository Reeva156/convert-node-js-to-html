const express = require("express");

const app = express();

app.use(express.static("public"));

// Array of objects
const users = [
    {
        id: 1,
        name: "John",
        age: 25,
        city: "Mumbai"
    },
    {
        id: 2,
        name: "Sarah",
        age: 28,
        city: "Delhi"
    },
    {
        id: 3,
        name: "Mike",
        age: 22,
        city: "Ahmedabad"
    }
];

// Route to get the array of objects
app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running: http://localhost:3000");
});
