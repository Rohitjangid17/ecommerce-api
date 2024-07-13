const mongoose = require('mongoose');
const cors = require('cors');
const express = require("express");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
require("dotenv").config();

// console.log("env", process.env.DB_PASSWORD);

// database connection
main().catch(err => console.log(err));

async function main() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    await mongoose.connect(process.env.MONGO_URL);
}

// Middle ware
server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
    next();
});
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(process.env.PORT, () => {
    console.log("server started");
});