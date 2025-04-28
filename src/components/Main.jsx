import React from "react"
import IngredientsList from "./List"
import Recipe from "./Recipe"
import { getRecipeFromMistral } from "../AI"

export default function Main(){
    const [ingredients,setIngredients] = React.useState([])
    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients(prev=>[...prev,newIngredient])
    }
    const [recipe,setRecipe] = React.useState('')
    async function getRecipe(){
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
    }
    return(
        <>
            <form action={addIngredient}>
                    <input type="text" name='ingredient' placeholder='eg.- cheese...'/>
                    <input type="submit" value="+ Add-Ingredient" />
            </form>
            {ingredients.length > 0 ?
                <IngredientsList 
                    ingredients={ingredients} 
                    getRecipe={getRecipe}/>
                    :null
            }
            {recipe ? <Recipe recipe={recipe} />:null}
        </>
    )
}