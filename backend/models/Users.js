const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  favouriteRecipe: [
    { type: mongoose.Schema.Types.ObjectId, ref: "recipeName" },
  ],
});

module.exports = mongoose.model("Users", UserSchema);
