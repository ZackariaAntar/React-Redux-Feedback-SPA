import {Route } from "react-router-dom";
import axios from "axios";
import FeelingField from "../FeelingField/FeelingField";
import UnderstandingField from "../UnderstandingField/UnderstandingField";
import SupportField from "../SupportField/SupportField";
import CommentsField from "../CommentsField/CommentsField";
import { useSelector } from "react-redux";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import NextButton from "../NextButton/NextButton";


function FeedbackForm() {
    const inputStore = useSelector(store=>store.inputStore)
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
			<form onSubmit={postReflection}>
				<Route exact path="/">
					<FeelingField />
				</Route>
				<Route exact path="/understanding">
					<UnderstandingField />
				</Route>

				<Route exact path="/support">
					<SupportField />
				</Route>

				<Route exact path="/comments">
					<CommentsField />
				</Route>

				<Route exact path="/review">
					<ReviewFeedback />
				</Route>
			</form>
		</>
	);
}

export default FeedbackForm;
