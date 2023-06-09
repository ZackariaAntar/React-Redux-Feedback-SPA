import {Route } from "react-router-dom";
import axios from "axios";
import FeelingField from "../FeelingField/FeelingField";
import UnderstandingField from "../UnderstandingField/UnderstandingField";
import SupportField from "../SupportField/SupportField";
import CommentsField from "../CommentsField/CommentsField";
import NextButton from "../NextButton/NextButton";
import { useSelector } from "react-redux";

function FeedbackForm() {
    const inputStore = useSelector(store=>store.inputStore)
    const postReflection = (event) =>{
        event.preventDefault()
        axios.post('/feedback', {inputStore})

    }
	return (
		<>
			<form onSubmit={postReflection}>
				<Route exact path="/">
					<FeelingField />
					<NextButton type={"button"} path={"/understanding"} />
				</Route>

				<Route exact path="/understanding">
					<UnderstandingField />
					<NextButton path={"/support"} type={"button"} />
				</Route>

				<Route exact path="/support">
					<SupportField />
					<NextButton path={"/comments"} type={"button"} />
				</Route>

				<Route exact path="/comments">
					<CommentsField />
					<NextButton path={"/thanks"} type={"submit"} />
				</Route>
			</form>
		</>
	);
}

export default FeedbackForm;
