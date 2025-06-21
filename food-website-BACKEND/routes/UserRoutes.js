const express = require('express');
const UserController = require('../controllers/UserController');
const verifyTokenMiddleware =require('../middleware/verifyTokenMiddleware');
const UserRouter = express.Router();


UserRouter.post("/register", (req, res) => {
  new UserController().signIn(req.body)
    .then(success => {
      res.status(200).json(success);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

UserRouter.post("/login", (req, res) => {
  new UserController().login(req.body)
    .then(success => {
      res.status(200).json(success);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});
UserRouter.post("/profile", verifyTokenMiddleware, (req, res) => {
  const result = new UserController().getAllUsers();
  result
    .then((sucess) => {
      res.send(sucess);
    })
    .catch((err) => {
      res.send(err);
    });
});

UserRouter.get("/profile/:id", verifyTokenMiddleware, (req, res) => {
  const result = new UserController().profile(req.params.id);
  result
    .then((sucess) => {
      res.send(sucess);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = UserRouter;
