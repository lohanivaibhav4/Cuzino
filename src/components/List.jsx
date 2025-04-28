import React from "react"

export default function IngredientsList(props){

    const ingredientsHTML = props.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    
    return(
        <>
            <div className="list-div">
                <p>Ingredients available :</p>
                <ul className="list-ul">{ingredientsHTML}</ul>
                {props.ingredients.length > 3 ? <div className="get-recipe-div">
                    <div className="get-recipe-inner-div">
                        <p>Ready for a recipe ?</p>
                        <span>Generate a recipe form your list of ingredients.</span>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>:null}
            </div>
        </>
    )
}