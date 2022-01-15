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
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.get("/bubbles", (req, res) => { 
  //GET BUBBLES FOR BUBBLE PG : TODO: how do we randomly get a subset of users?
  Bubble.find({}).then((bubbles) => res.send(bubbles));
});

router.post("/status", auth.ensureLoggedIn, (req, res) => {
  const newStatus = new Status({
    googleid: req.user.googleid,
    name: req.user.name,
    content: req.body.content,
  });
  newStatus.save().then((status) => res.send(status));
});

router.get("/profile", (req, res) => {
  Profile.find({ parent: req.query.parent }).then((currentProfile) => {
    res.send(currentProfile);
  });
});

router.post("/comment", auth.ensureLoggedIn, (req, res) => {
  const newComment = new Comment({
    creator_id: req.user._id,
    creator_name: req.user.name,
    parent: req.body.parent,
    content: req.body.content,
  });

  newComment.save().then((comment) => res.send(comment));
});

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.get("/chat", (req, res) => {
  let query;
  if (req.query.recipient_id === "ALL_CHAT") {
    // get any message sent by anybody to ALL_CHAT
    query = { "recipient._id": "ALL_CHAT" };
  } else {
    // get messages that are from me->you OR you->me
    query = {
      $or: [
        { "sender._id": req.user._id, "recipient._id": req.query.recipient_id },
        { "sender._id": req.query.recipient_id, "recipient._id": req.user._id },
      ],
    };
  }

  Message.find(query).then((messages) => res.send(messages));
});

router.post("/message", auth.ensureLoggedIn, (req, res) => {
  console.log(`Received a chat message from ${req.user.name}: ${req.body.content}`);

  // insert this message into the database
  const message = new Message({
    recipient: req.body.recipient,
    sender: {
      _id: req.user._id,
      name: req.user.name,
    },
    content: req.body.content,
  });
  message.save();

  if (req.body.recipient._id == "ALL_CHAT") {
    socketManager.getIo().emit("message", message);
  } else {
    socketManager.getSocketFromUserID(req.user._id).emit("message", message);
    if (req.user._id !== req.body.recipient._id) {
      socketManager.getSocketFromUserID(req.body.recipient._id).emit("message", message);
    }
  }
});

router.get("/activeUsers", (req, res) => {
  res.send({ activeUsers: socketManager.getAllConnectedUsers() });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;


// edit profile
router.post("/profile", auth.ensureLoggedIn, (req, res) => {
  User.find({ googleid: req.query.googleid }).then((userContent) => {
    res.send(userContent);
  });
  SocialMedia.find({ googleid: req.query.googleid }).then((userContent) => {
    res.send(userContent);
  });
  // TODO: insert code to change fields
});

// get profile data
router.get("/profile", (req, res) => {
  User.find({ googleid: req.query.googleid }).then((userContent) => {
    res.send(userContent);
  });
});

module.exports = router;
