const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

const todoRoutes = require("./routes/studentRoute");

mongoose.Promise = global.Promise;

// Connect MongoDB .
mongoose.connect(
    "mongodb+srv://ducvo177:ducvo1772001@cluster0.zjvaq.mongodb.net/test", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    },
    (err) => {
        if (!err) {
            console.log("MongoDB Connection Succeeded.");
        } else {
            console.log("Error in DB connection: " + err);
        }
    }
);

app.use(cors());
app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(port, () => {
    
});