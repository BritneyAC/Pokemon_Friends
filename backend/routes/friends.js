const router = require("express").Router();
let Friend = require("../models/friend.model");

router.route("/").get((req, res) => {
  Friend.find()
    .then(friends => res.json(friends))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newFriend = new User({username});

  Friend.save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;