import express from "express"
const app = express();
// Middleware for parsing
app.use(express.json())
app.use(express.urlencoded( { extended: true }));

// Route to handle form POST
app.post("/register", (req, res) => {
    console.log(req.body)
    res.send(`User ${req.body.username} registered!`);
})

app.listen(3000, () => console.log("Server running on port 3000"));