import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ThanksPage(){
    return(
        <>
        <h1>Thanks for your feedback</h1>
        <button>
            <Link to={'/'}>
                Submit new feedback
            </Link>
        </button>
        </>
    )
}

export default ThanksPage