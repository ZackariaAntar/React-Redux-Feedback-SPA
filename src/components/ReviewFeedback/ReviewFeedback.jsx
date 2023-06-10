import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";


function ReviewFeedback(){
    const inputStore = useSelector(store => store.inputStore)
    const postReflection = (event) =>{
        event.preventDefault()
        axios.post('/feedback', {inputStore})
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })

    }

    return (
		<>
			<h1>Review Feedback Before Submitting</h1>
			<ul>
				<li>{inputStore.feeling}</li>
				<li>{inputStore.understanding}</li>
				<li>{inputStore.support}</li>
				<li>{inputStore.comment}</li>
			</ul>
			<button onClick={postReflection}>
				<Link to={"/thanks"}> Submit</Link>
			</button>
		</>
	);
}

export default ReviewFeedback