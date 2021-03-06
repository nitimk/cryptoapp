const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();


//connect to DB  
mongoose.connect( process.dotenv.DB_CONNECT,
{ useNewUrlParser: true },
 () => console.log('connected to db!' ));  

//Middlewarw
app.use(express.json());





//Route Middlewares
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server up and running'));

// test  