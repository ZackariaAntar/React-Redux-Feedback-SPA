import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ThanksPage(){
    return(
        <>
        <div className="FormField-container">
        <h1>Thanks for your feedback!</h1>
        <button className="next-button">
            <Link to={'/'}>
                Submit new feedback
            </Link>
        </button>
        </div>
        </>
    )
}

export default ThanksPage