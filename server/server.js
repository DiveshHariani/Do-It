const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/database');
const task = require('./Routes/API/tasks');

// App init
const app = express();
const port = process.env.port || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Accessing routes:
app.use('/tasks', task);

// connecting to mongo
mongoose.connect(db.link, {useUnifiedTopology: true, useNewUrlParser: true} )
        .then(console.log('mongo connected'))
        .catch( (err) => console.log(err) );

app.listen( port, () => console.log('Listening on port ' + port) );