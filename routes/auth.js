const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/authController");
const joi = require("joi")
const validator = require("express-joi-validation").createValidator({})
const auth = require("../middleware/auth")

const registerSchema = joi.object({
    username:joi.string().min(3).max(12).required(),
    mail:joi.string().email().required(),
    password:joi.string().min(6).max(12).required()
})

const loginSchema = joi.object({
    mail:joi.string().email().required(),
    password:joi.string().min(6).max(12).required()

})

router.post("/register", validator.body(registerSchema) ,authController.controllers.postRegister);

router.post("/login", validator.body(loginSchema), authController.controllers.postLogin);

router.get("/test",auth,(req,res)=>{
    res.send("token valid!")
})

module.exports = router;
