import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import axios from "axios";

function App() {
  const APP_ID = "40e08def";
  const KEY_ID = "92071cc82f140af3dc1da9354be17f03";

  const [recipes, setrecipes] = useState([]);
  const [input, setinput] = useState("");
  const [query, setquery] = useState([]);

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY_ID}`
      )
      .then((res) => {
        console.log("res is ", res);
        // return res.data.hits;
        return res.data.hits;
      })
      .catch(function (error) {
        console.log(error);
      });
    setrecipes(response);
  };

  // handlers
  const inputHandler = (e) => {
    setinput(e.target.value);
    console.log("e is", e.target.value);
  };

  // onst submitHandler = (recipes) => {
  //   let arr = [];
  //   for (let i = 0; i < recipes; i++) {
  //     if (recipes[i].recipe.label == input) {
  //       arr.push(recipes[i]);
  //     }
  //   }
  //   console.log("arr is ", arr);
  //   setrecipes(arr);
  // };

  const getSearch = (e) => {
    e.preventDefault();
    setquery(input);
  };
  return (
    <div>
      <form onSubmit={getSearch}>
        <input onChange={inputHandler} value={input}></input>
        <button>Click me or press enter and see what happens;)</button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
