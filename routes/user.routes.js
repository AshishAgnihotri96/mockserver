const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {UserModel} = require("../models/User.model.js")

const userController = Router();


userController.post("/create", async (req, res) => {
    const dateandtime=new Date()
    const {company, city, location,role, level,position,language,contract} = req.body;
    const note = new UserModel({
        company,
        city,
        location,
        postedAt:dateandtime,
        role ,
        level,
        position,
        language,
        contract
            
    })
    try{
        await note.save()
        res.send({msg:"Job Posted"})
    }
    catch(err){
        res.send({msg:"Something went wrong"})
    }
})



module.exports = {
    userController
}