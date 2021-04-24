const express = require("express")
const router = express.Router()

const { isSignedIn, isAuthenticated } = require("../controllers/auth")
const { processPayment } = require("../controllers/paymentRoutes")

router.post("payment/stripepay/:userId", isSignedIn, isAuthenticated, processPayment)

module.exports = router;