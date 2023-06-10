import { useSelector } from "react-redux";

function ReviewFeedback(){
    const inputStore = useSelector(store => store.inputStore)

    return(
        <>
        <h1>Review Feedback</h1>
        <ul>
            <li>{inputStore.input.feeling}</li>
            <li>{inputStore.input.understanding}</li>
            <li>{inputStore.input.support}</li>
            <li>{inputStore.input.comment}</li>
        </ul>

        </>
    )
}

export default ReviewFeedback