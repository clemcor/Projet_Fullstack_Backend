const express = require('express');
require('dotenv').config();
const app = express();
var cors = require('cors')
const PORT = process.env.PORT;

const getRoutes = require('./routes/routes');


//connect to database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to database'));





app.use(cors());
app.use(express.json());
app.use(getRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
