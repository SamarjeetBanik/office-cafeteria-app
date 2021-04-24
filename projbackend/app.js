require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//const stripe = require('stripe')("secret key SK_Test_Key")

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentRoutes = require("./routes/paymentRoutes.js");

// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch((err) => {
    console.log(err);
})

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/cafe", authRoutes);
app.use("/cafe", userRoutes);
app.use("/cafe", categoryRoutes);
app.use("/cafe", productRoutes);
app.use("/cafe", orderRoutes);
app.use("/cafe", paymentRoutes);

// PORT
const port = process.env.PORT;

// Starting a server
app.listen(port, () => {
    console.log(`app is running at port ${port}`);
})
