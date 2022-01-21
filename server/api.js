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
const Avatar = require("./models/avatar");

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

// router.get("/status", auth.ensureLoggedIn, (req, res) => {
//   Status.find({ googleid: req.query.googleid }).then((currentStatus) => {
//     res.send(currentStatus);
//   });
// });

// router.post("/status", auth.ensureLoggedIn, (req, res) => {
//   const newStatus = new Status({
//     googleid: req.user.googleid,
//     content: req.body.content,
//   });
//   newStatus.save().then((status) => res.send(status));
// });

// router.get("/socialMedia", (req, res) => {
//   SocialMedia.findById(req.query.userid).then((socials) => {
//     res.send(socials);
//   });
// });

// router.post("/socialMedia", (req, res) => {
//   const newSocial = new SocialMedia({
//     content: req.body.content,
//     type: req.body.type,
//   });
//   newSocial.save().then((social) => res.send(social));
// });

// router.get("/socialMedia", (req, res) => {
//   SocialMedia.findById(req.query.userid).then((socials) => {
//     res.send(socials);
//   });
// });

router.get("/socialMedia", (req, res) => {
  SocialMedia.findOne({ user: req.query.user, type: req.query.type }).then((socialMedia) =>
    res.send(socialMedia)
  );
});

router.post("/socialMedia", auth.ensureLoggedIn, (req, res) => {
  SocialMedia.findOne({ user: req.body.user, type: req.body.type }).then((socialMedia) => {
    if (socialMedia != null) {
      socialMedia.content = req.body.content;
      socialMedia.save().then((socialMedia) => res.send(socialMedia));
    } else {
      const newSocialMedia = new SocialMedia({
        user: req.body.user,
        type: req.body.type,
        content: req.body.content,
      });
      newSocialMedia.save().then((socialMedia) => res.send(socialMedia));
    }
  });
});

// router.post("/socialMedia", (req, res) => {
//   const newSocial = new SocialMedia({
//     content: req.body.content,
//     type: req.body.type,
//   });
//   newSocial.save().then((social) => res.send(social));
// });

// router.get("/users", (req, res) => {
//   const newSocial = new SocialMedia({
//     content: req.body.content,
//   });
//   newSocial.save().then((social) => res.send(social));
// });

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

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

router.get("/users", (req, res) => {
  User.find({}).then((users) => res.send(users));
});

router.get("/status", (req, res) => {
  Status.findOne({ user: req.query.user }).then((status) => res.send(status));
});

router.post("/status", auth.ensureLoggedIn, (req, res) => {
  Status.findOne({ user: req.body.user }).then((status) => {
    if (status != null) {
      status.content = req.body.content;
      status.save().then((status) => res.send(status));
    } else {
      const newStatus = new Status({
        user: req.body.user,
        name: req.body.name,
        content: req.body.content,
      });
      newStatus.save().then((status) => res.send(status));
    }
  });
});

router.get("/statuses", (req, res) => {
  Status.find({}).then((statuses) => res.send(statuses));
})

router.get("/avatar", (req, res) => {
  Avatar.findOne({ user: req.query.user }).then((avatar) => res.send(avatar));
});

router.post("/avatar", auth.ensureLoggedIn, (req, res) => {
  Avatar.findOne({ user: req.body.user }).then((avatar) => {
    if (avatar != null) {
      avatar.avatarURL = req.body.content;
      avatar.save().then((avatar) => res.send(avatar));
    } else {
      const newAvatar = new Avatar({
        user: req.body.user,
        avatarURL: req.body.content,
      });
      newAvatar.save().then((avatar) => res.send(avatar));
    }
  });
});

//CONTACT METHODS:
router.get("/contact", auth.ensureLoggedIn, (req, res) => {
  Contact.find({ user: req.body.user }).then((contactMembers) => res.send(contactMembers));
});

router.post("/contact", auth.ensureLoggedIn, (req, res) => {
  Contact.find({ user: req.body.user, type: req.body.type }).then((contacts) => {
    if (contacts != null) {
      //contact post body must have members in a LIST
      contacts.members.concat([req.body.content]);
      contacts.save().then((contacts) => res.send(contacts));
    } else {
      const newContact = new Contact({
        user: req.body.user,
        type: req.body.type,
        members: req.body.members,
      });
      newContact.save().then((contacts) => res.send(contacts));
    }
  });
});


module.exports = router;

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});
