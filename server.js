const express = require('express');
const app = express();
var cors = require('cors')
const PORT = 3000;

const getRoutes = require('./routes/routes');


//connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Projet_Fullstack').then(() => console.log('Connected to database'));




app.use(cors());
app.use(express.json());
app.use(getRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
