const mongoose = reqire("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  cookTime: { type: Number, required: false },
  ingredients: [
    new Schema({
      name: String,
      amount: String,
    }),
  ],
});

module.exports = mongoose.model("Recipes", RecipeSchema);
