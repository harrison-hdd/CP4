const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

const {MongoClient, ObjectId} = require("mongodb");

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'astrologyImages';
const savedImagesCol = 'savedImages';
const usersCol = "users";

app.post("/api/users/login", async (req, res) => {
	const client = new MongoClient(dbUrl);
	try{
		await client.connect();

		const result = await client.db(dbName).collection(usersCol).findOne({username: req.body.username});

		if(result === null){
			res.status(401).send({message: "User doesn't exist"});
		}
		else if(result.password !== req.body.password){
			res.status(401).send({message: "Check your credentials"});
		}
		else {
			const userData = await client.db(dbName).collection(savedImagesCol).findOne({username: req.body.username});

			res.send(userData);
		}


	}catch (e){
		res.sendStatus(500);
		console.log(e);
	}finally {
		await client.close();
	}
});

app.post("/api/users/register", async (req, res)=>{
	const client = new MongoClient(dbUrl);
	try{
		await client.connect();

		const existingUser = await client.db(dbName).collection(usersCol).findOne({username: req.body.username});

		if(existingUser !== null){
			res.sendStatus(400);
			return;
		}

		await client.db(dbName).collection(usersCol).insertOne({
			username: req.body.username,
			password: req.body.password});

		await client.db(dbName).collection(savedImagesCol).insertOne({username: req.body.username, favorites: []});

		res.sendStatus(200);

	}catch (e){
		res.sendStatus(500);
		console.log(e);
	}finally {
		await client.close();
	}
})

app.put("/api/images/save", async (req, res)=>{
	const client = new MongoClient(dbUrl);
	try{
		await client.connect();

		const result = await client.db(dbName).collection(savedImagesCol).updateOne(
			{username: req.body.username},
			{$push:{favorites: req.body.newImageDate}})

		res.sendStatus(200);

	}catch (e){
		res.sendStatus(500);
		console.log(e);
	}finally {
		await client.close();
	}
});

app.put("/api/images/unsave", async (req, res)=>{
	const client = new MongoClient(dbUrl);
	try{
		await client.connect();

		const result = await client.db(dbName).collection(savedImagesCol).updateOne(
			{username: req.body.username},
			{$pull:{favorites: req.body.toBeRemoved}})

		res.sendStatus(200);

	}catch (e){
		res.sendStatus(500);
		console.log(e);
	}finally {
		await client.close();
	}
});


app.listen(3001, () => console.log('Server listening on port 3001!'));
