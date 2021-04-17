const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// connect to the database
mongoose.connect('mongodb://localhost:27017/vainglory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);

// Create a scheme for projects
const heroeSchema = new mongoose.Schema({
  name: String,
  path: String
});

// Schema for items
const itemSchema = new mongoose.Schema({
    name: String,
    path: String,
    cost: Number,
    firststat: String,
    firststatvalue: Number,
    secondstat: String,
    secondstatvalue: Number,
    thirdstat: String,
    thirdstatvalue: Number,
    fourthstat: String,
    fourthstatvalue: Number,
    fifthstat: String,
    fifthstatvalue: Number,
    desc: String
})

const buildSchema = new mongoose.Schema({
    name: String,
    heroe: {
	type: mongoose.Schema.Types.ObjectId,
        ref: 'Heroe'
    },
    user: String, //Have it be an ID
    items: [{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Item'
    }]
})

// Create a model for heroes
const Heroe = mongoose.model('Heroe', heroeSchema);

// Model for items
const Item = mongoose.model('Item',itemSchema);

// Model for builds
const Build = mongoose.model('Build',buildSchema);

app.listen(3001, () => console.log('Server listening on port 3001!'));

//Get heroes/items (other operations not needed for users)

app.get('/api/heroes/', async (req, res) => {
    try {
        let heroes = await Heroe.find();
        res.send(heroes);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/items/', async (req, res) => {
    try {
        let items = await Item.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/items/', async (req, res) => {
    try {
        let item = new Item({
            name: req.body.name,
            path: req.body.path,
   	cost: req.body.cost,
    	firststat: req.body.firststat,
    	firststatvalue: req.body.firststatvalue,
    	secondstat: req.body.secondstat,
    	secondstatvalue: req.body.secondstatvalue,
    	thirdstat: req.body.thirdstat,
    	thirdstatvalue: req.body.thirdstatvalue,
   	fourthstat: req.body.fourthstat,
   	fourthstatvalue: req.body.fourthstatvalue,
   	fifthstat: req.body.fifthstat,
    	fifthstatvalue: req.body.fifthstatvalue,
   	desc: req.body.desc,
        });
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Builds

app.post('/api/builds', async (req, res) => {
    try {
        let hero = await Heroe.findOne({_id: req.body.heroID});
        if (!hero) {
	    console.log("hero");
            res.sendStatus(404);
            return;
        }

	let itemOne = await Item.findOne({_id: req.body.itemOneID});
	let itemTwo = await Item.findOne({_id: req.body.itemTwoID});
	let itemThree = await Item.findOne({_id: req.body.itemThreeID});
	let itemFour = await Item.findOne({_id: req.body.itemFourID});
	let itemFive = await Item.findOne({_id: req.body.itemFiveID});
	let itemSix = await Item.findOne({_id: req.body.itemSixID});

        let build = new Build({
            name: req.body.name,
            user: req.body.userId,
            heroe: hero,
            items: [
            	itemOne,
            	itemTwo,
            	itemThree,
            	itemFour,
            	itemFive,
            	itemSix
            ]
        });
        console.log(build);
        console.log(req);
        await build.save();
        res.send(build);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/builds', async (req, res) => {
    try {
        let build = await Build.find();
        res.send(build);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/builds/:buildID', async (req, res) => {
    try {
        let build = await Build.findOne({_id: req.params.buildID});
        if (!build) {
            res.send(404);
            return;
        }
        build.name = req.body.name;

        let itemOne = await Item.findOne({_id: req.body.itemOneID});
	let itemTwo = await Item.findOne({_id: req.body.itemTwoID});
	let itemThree = await Item.findOne({_id: req.body.itemThreeID});
	let itemFour = await Item.findOne({_id: req.body.itemFourID});
	let itemFive = await Item.findOne({_id: req.body.itemFiveID});
	let itemSix = await Item.findOne({_id: req.body.itemSixID});
        build.items = [itemOne,itemTwo,itemThree,itemFour,itemFive,itemSix];

        await build.save(); //Hero doesn't get updated, since hero can't be changed.
        res.send(build);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/builds/:buildID', async (req, res) => {
    try {
        let build = await Build.findOne({_id: req.params.buildID});
        if (!build) {
            res.send(404);
            return;
        }
        await build.delete();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
