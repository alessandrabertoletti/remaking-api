const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userController = require('./components/User/userController');
const vaccineController = require('./components/Vaccine/vaccineController');
const adressController = require('./components/Adress/adressController');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/refactor_tcc',
    {useNewUrlParser: true});
    
app.use('/users', userController);
app.use('/vaccines', vaccineController);
app.use('/adress', adressController);

app.listen(3333);