const UserModel = require("../models/UserModel");
const {
  encryptPassword,
  decryptPassword,
  createToken,
  verifyToken
} = require("../helpers.js")


class UserController {
  signIn(data) {
    return new Promise(async (res, rej) => {
      try {
        const existingUser = await UserModel.findOne({ email: data.email });

        if (existingUser) {
          return rej({ status: 0, msg: "User already exists" });
        }

        const encryptPass = await encryptPassword(data.password);
        const user = new UserModel({
          name: data.name,
          email: data.email,
          password: encryptPass,
        });

        user
          .save()
          .then(() => res({ status: 1, user }))
          .catch(() => rej({ status: 0, msg: "Internal server error while saving user" }));
      } catch (err) {
        rej({ status: 0, msg: "Internal server error" });
      }
    });
  }

  login(data) {
    return new Promise(async (res, rej) => {
      try {
        const { email, password } = data;
        const user = await UserModel.findOne({ email });

        if (!user) {
          return rej({ status: 0, msg: "Your email is not correct" });
        }

        const decryptPass = await decryptPassword(user.password);
        if (decryptPass === password) {
          const token = await createToken({ email });
          res({ status: 1, msg: "User logged in", token, user });
        } else {
          rej({ status: 0, msg: "Your password is not correct" });
        }
      } catch (err) {
        console.log("login controller", err.message);
        rej({ status: 0, msg: "Internal server error" });
      }
    });
  }

    profile(id) {
    return new Promise(async (res, rej) => {
      try {
        const user = await UserModel.findById(id);
        res({ status: 1, user });
      } catch (error) {
        console.log("error form usr ctr", error.message);
      }
    });
  }

  getAllUsers() {
    return new Promise(async (res, rej) => {
      const users = await UserModel.find();
      res({ status: 1, users });
    }); 
  }

}



module.exports = UserController;
