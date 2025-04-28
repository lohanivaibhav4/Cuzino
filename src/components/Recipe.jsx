import Markdown from "react-markdown"
export default function Recipe(props){
    return(
        <section className="recipe-section">
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    )
}