const {User} = require("../models/users");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = User.find({username:username});
        if(user && user.paaword == password){
            res.json({
                token: "xcv",
                user
            })
        }

    }catch{

    }
}

const register = async (req, res) => {
    try{
        const {username,email,password} = req.body;
        console.log(req.body)
        const user = User({username: username, email:email, password:password});
        await user.save();
        const payload = {
            userId: user._id,
        }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        console.log('Generated JWT:', token);

        res.json(user)
    }catch{
        res.status(500)
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.json(users);
    }catch{
        res.status(500).end();
    }
}

module.exports = {
    login,
    register,
    getUsers
}

