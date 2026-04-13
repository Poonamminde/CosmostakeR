const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { login, register, getUsers } = require("./controllers/userControllers")
const { authMiddleware } = require("./middleware/authmiddleware")

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/users');

app.post("/register", register);
app.post("/login",login);
app.use(authMiddleware);
app.get("/users", getUsers);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})