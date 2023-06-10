import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function ReviewFeedback(){
    const inputStore = useSelector(store => store.inputStore)

    return(
        <>
        <h1>Review Feedback</h1>
        <ul>
            <li>{inputStore.feeling}</li>
            <li>{inputStore.understanding}</li>
            <li>{inputStore.support}</li>
            <li>{inputStore.comment}</li>
        </ul>
        <button type={'submit'} to={'/thanks'}>Submit</button>

        </>
    )
}

export default ReviewFeedback