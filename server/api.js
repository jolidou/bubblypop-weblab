/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Bubble = require("./models/bubble");
const Contact = require("./models/contact");
const SocialMedia = require("./models/socialMedia");
const Status = require("./models/status");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case

router.get("/status", auth.ensureLoggedIn, (req, res) => {
  Status.find({ googleid: req.query.googleid }).then((currentStatus) => {
    res.send(currentStatus);
  });
});

router.post("/status", auth.ensureLoggedIn, (req, res) => {
  const newStatus = new Status({
    googleid: req.user.googleid,
    content: req.body.content,
  });
  newStatus.save().then((status) => res.send(status));
});

router.get("/socialMedia", (req, res) => {
  SocialMedia.findById(req.query.userid).then((social) => {
    res.send(social);
  });
});

router.get("/users", (req, res) => {
  const newSocial = new SocialMedia({
    content: req.body.content,
  });
  newSocial.save().then((socail) => res.send(social));
});


router.get("/profile", (req, res) => {
  User.find({ parent: req.query.googleid }).then((currentUser) => {
    res.send(currentUser);
  });
});

router.post("/profile", (req, res) => {
  //GET HELP - how do we save only
  //fields that the user(s) changed, while keeping others the same?
  let updatedUser = User.findOneAndUpdate({ googleid: req.query.googleid }, update, {
    googleid: req.user.googleid,
    name: req.user.name,
    counter: req.user.bubbleCount,
    avatarURL: req.user.avatarURL,
    status: req.user.status,
    socialMedia: req.user.socialMedia,
    new: true,
    upsert: true, //if no document matches filter (user DNE yet- creates one)
  });
});

//METHOD TO GET CONTACTS
router.get("/bubbles", (req, res) => {
  //GET BUBBLES FOR BUBBLE PG : TODO: how do we randomly get a subset of users?
  Bubble.find({}).then((bubbles) => res.send(bubbles));
});

router.post("/bubbles", (req, res) => {
  //GET BUBBLES FOR BUBBLE PG : TODO: how do we randomly get a subset of users?
  Bubble.find({}).then((bubbles) => res.send(bubbles));
});

/*
/DON'T EDIT FOR NOW
*/

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.get("/activeUsers", (req, res) => {
  res.send({ activeUsers: socketManager.getAllConnectedUsers() });
});

// NEW [sophie]

router.get("/users", (req, res) => {
  User.find({}).then((users) => res.send(users));
});

module.exports = router;

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});
