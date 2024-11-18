const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const EventModel = require("./models/Event");
const app = express();

app.use(express.json());
app.use(cors());

// Connect to the 'users' database
const usersDb = mongoose.createConnection("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the 'events' database
const eventsDb = mongoose.createConnection("mongodb://127.0.0.1:27017/events", { useNewUrlParser: true, useUnifiedTopology: true });

// Define models using their respective connections
const UserModel = usersDb.model("User", require("./models/User").schema);
const EventModel = require("./models/Event")(eventsDb); // Pass the eventsDb connection

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "Success", user: { name: user.name, email: user.email } });
        } else {
          res.json({ message: "The password is incorrect" });
        }
      } else {
        res.json({ message: "No record exists" });
      }
    })
    .catch(err => res.json(err));
});

app.post('/register', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.post('/create', (req, res) => {
  EventModel.create(req.body)
    .then(event => res.json(event))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log('Server is running');
});
