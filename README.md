🚀 Node.js + HTML Project

A simple project that connects a Node.js + Express.js backend with an HTML frontend.

📂 Project Structure
📦 my-project
│
├── 🟢 app.js
│
├── 📂 public
│   └── 🌐 index.html
│
└── 📄 package.json

🟢 Node.js

The app.js file creates the Express server:

const express = require("express");

const app = express();

app.use(express.static("public"));

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

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});

🌐 HTML

The index.html file is inside the public folder.

Because of:

app.use(express.static("public"));


Express automatically serves the HTML file.

Open:

http://localhost:3000


to see the HTML page.

🔗 Node.js → HTML

The connection works like this:

🟢 Node.js / Express
        ↓
📂 public folder
        ↓
🌐 index.html
        ↓
👤 User sees webpage

🔄 HTML → Node.js API

The HTML uses JavaScript fetch() to request the users:

fetch("/users")
    .then(response => response.json())
    .then(users => {
        console.log(users);
    });


The request goes to:

🌐 HTML
   ↓
GET /users
   ↓
🟢 Node.js / Express
   ↓
📦 users array
   ↓
JSON response
   ↓
🌐 HTML

▶️ How to Run
1. Install Express
npm install express

2. Start the Node.js server
node app.js

3. Open the website

Go to:

http://localhost:3000

🎯 API

You can also directly see the user data by opening:

http://localhost:3000/users

🛠️ Technologies
🟢 Node.js
🚂 Express.js
🌐 HTML
🎨 CSS
⚡ JavaScript
❤️ Made for Learning

This project is useful for understanding the basic connection between a Node.js backend and an HTML frontend.

🚀 Happy Coding!
