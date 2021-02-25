var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const { signout, signup, signin, isSignedIn } =  require("../controllers/auth");

router.post("/signup",
    check("name").isLength({ min: 3 }).withMessage("name should be atleast 3 characters"),
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({ min: 1 }).withMessage("password should be atleast 3 char"),
signup);

router.post("/signin",
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({ min: 3 }).withMessage("password field is required"),
signin);

router.get("/signout", signout);

// router.get("/testroute", isSignedIn, (req, res) => {
//     // res.send("a protected route");
//     res.json(req.auth);
// })

module.exports = router;
