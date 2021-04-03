const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

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
    itemone: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'ItemOne'
    },
    itemtwo: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'ItemTwo'
    },
    itemthree: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'ItemThree'
    },
    itemfour: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'ItemFour'
    },
    itemfive: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'ItemFive'
    },
    itemsix: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'ItemSix'
    },
})

// Create a model for heroes
const Heroe = mongoose.model('Heroe', heroeSchema);

// Model for items
const Item = mongoose.model('Item',itemSchema);

// Model for builds
const Build = mongoose.model('Build',buildSchema);

app.listen(3000, () => console.log('Server listening on port 3000!'));

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
        let itemOnez = await Item.findOne({_id: req.body.itemOneID});
        if (!itemOnez) {
	    console.log("1");
            res.sendStatus(404);
            return;
        }
        let itemTwoz = await Item.findOne({_id: req.body.itemTwoID});
        if (!itemTwoz) {
	    console.log("2");
            res.sendStatus(404);
            return;
        }
        let itemThreez = await Item.findOne({_id: req.body.itemThreeID});
        if (!itemThreez) {
	    console.log("3");
            res.sendStatus(404);
            return;
        }
        let itemFourz = await Item.findOne({_id: req.body.itemFourID});
        if (!itemFourz) {
	    console.log("4");
            res.sendStatus(404);
            return;
        }
        let itemFivez = await Item.findOne({_id: req.body.itemFiveID});
        if (!itemFivez) {
	    console.log("5");
            res.sendStatus(404);
            return;
        }
        let itemSixz = await Item.findOne({_id: req.body.itemSixID});
        if (!itemSixz) {
	    console.log("6");
            res.sendStatus(404);
            return;
        }
        let build = new Build({
            name: req.body.name,
            heroe: hero,
            itemOne: itemOnez,
            itemTwo: itemTwoz,
            itemThree: itemThreez,
            itemFour: itemFourz,
            itemFive: itemFivez,
            itemSix: itemSixz,
        });
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
        let item = await Item.findOne({_id:req.params.itemID, project: req.params.projectID});
        if (!item) {
            res.send(404);
            return;
        }
        item.text = req.body.text;
        item.completed = req.body.completed;
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/builds/:buildID', async (req, res) => {
    try {
        let item = await Item.findOne({_id:req.params.itemID, project: req.params.projectID});
        if (!item) {
            res.send(404);
            return;
        }
        await item.delete();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});