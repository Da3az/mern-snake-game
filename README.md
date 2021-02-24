# MERN Stack Snake game.

<img src="githubImg/snake-game.jpg"/>

## Description


You can register and sign to play a simple snake game;you can also check top 10 scores of everyone who played the game.

Live demo on https://snake-react-game.herokuapp.com/

## Technologies & Tools

### Front-end:

* React
* Redux
* Material-UI
* Axios

### Backend and Databse:

* Node/ExpressJS
* PassportJs
* JWT
* Mongoose


## Installation and Usage

### Requirements:

* Node.js installed
* Mongodb connection

### Steps:
1. Clone repo on your local machine:
```
git clone git@github.com:Da3az/mern-snake-game.git
```
2. Install server-side dependencies:
```
$ npm install
```
3. Install client-side dependencies:
```
$ cd client
$ npm install
$ cd ..
```
4. Enter Your mongodb uri
```
// Go to server.js and chenge uri to yours

mongoose.connect(uri,{useNewUrlParser : true,useUnifiedTopology: true},()=>{
    console.log('successfully connected to database');
});

```
5. Build the app:
```
$ cd client
$ npm run build
```
6. Execute the app:<br/>
```
$ cd ..
$ npm run dev
```
8. App now running on ```localhost:5000```
