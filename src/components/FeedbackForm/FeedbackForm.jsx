import {Route } from "react-router-dom";
import FeelingField from "../FeelingField/FeelingField";
import UnderstandingField from "../UnderstandingField/UnderstandingField";
import SupportField from "../SupportField/SupportField";
import CommentsField from "../CommentsField/CommentsField";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";

function FeedbackForm() {
	return (
		<>
			<form>
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
