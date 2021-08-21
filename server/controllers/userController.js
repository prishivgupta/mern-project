import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";

export const signin = async (req,res) => {

    const {email, password} = req.body;

    try {

        const exisitingUser = await User.findOne({email});

        if(!exisitingUser) return res.status(404).json({message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, exisitingUser.password);

        if(!isPasswordCorrect) return res.status(404).json({message: "Password is incorrect."});

        const token = jwt.sign({email: exisitingUser.email, id: exisitingUser._id}, 'test', {expiresIn: '24h'});

        res.status(200),json({result: exisitingUser, token});
        
    } catch (error) {

        res.status(500),json({message: error});
        
    }

}

export const signup = async (req,res) => {

    const {firstName, lastName, email, password, confirmPassword} = req.body;

    try {

        const exisitingUser = await User.findOne({email});

        if(exisitingUser) return res.status(404).json({message: "User already exist."});

        if (password !== confirmPassword) return res.status(404).json({message: "Passwords don't match."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '24h'});

        res.status(200),json({result: result, token});
        
    } catch (error) {

        res.status(500),json({message: error});
        
    }
    
}