const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { authRoutes } = require('./routes/AuthRoutes');
const port = process.env.PORT || 5000;



// middleware
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes)



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.taokb31.mongodb.net/transFlick?retryWrites=true&w=majority&appName=Cluster0`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
  
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);





app.get("/", (req, res) => {
    res.send("TransFlick are running");
});


app.listen(port, () => {
    console.log(`TransFlick are running on port : ${port}`);
})
