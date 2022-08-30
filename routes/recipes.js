var recipes = require("../recipes.json");
var router = require("express").Router();

const numberOfRecipes = recipes.length;

router.get("/shopping-list", (req, res) => {
  const myQuerry = req.query;
  const id = myQuerry.ids;
  console.log(id);

  // to check if req id is passed or not
  if (id === null || id === undefined) {
    return res.status(400).json({ message: "ID NOT FOUND!!" });
  }

  // to check if string
  if (isNaN(id)) {
    return res
      .sendStatus(404)
      .json({ message: "NOT FOUND!!!!!(not a valid number)" });
  }

  //

  //to check if id is in order with the recipes.json file and within the limit
  if (id < 1 || id > numberOfRecipes) {
    return res.sendStatus(404).json({ message: "NOT FOUND!!!!!" });
  }

  //if request is correct
  const ingredientsOfRecipe = recipes[id - 1].ingredients;

  return res.status(200).json({ ingredients: ingredientsOfRecipe });
});
module.exports = router;
