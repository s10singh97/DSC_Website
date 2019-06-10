const express = require('express');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Feedback = require('./models/Feedback')
require('dotenv').config();

const db = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds133137.mlab.com:33137/dsc_website`

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => {
		console.log('MongoDB Connected');
	})
	.catch((err) => {
		console.log('Error while connecting to Database');
	});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes To Be Made

app.post('/feedback',(req,res)=>{
    if(req.body.name && req.body.email && req.body.message)
    {
        let newFeedback = new Feedback({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        newFeedback.save().then(()=>{
            res.sendStatus(200)
        })

    }
    else{
        res.sendStatus(404)
    }
})
app.use(express.static('../src/assets/'))

app.listen(port, () => console.log(`Listening on port ${port}`));