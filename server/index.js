const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;



// middleware
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("MoneyMe are running");
});


app.listen(port, () => {
    console.log(`MoneyMe are running on port : ${port}`);
})
