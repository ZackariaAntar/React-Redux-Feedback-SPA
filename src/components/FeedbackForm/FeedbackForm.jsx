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
					<div className="FormField-container">
					    <FeelingField />
                    </div>
				</Route>

				<Route exact path="/understanding">
					<div className="FormField-container">
					    <UnderstandingField />
                    </div>
				</Route>

				<Route exact path="/support">
					<div className="FormField-container">
					    <SupportField />
                    </div>
				</Route>

				<Route exact path="/comments">
					<div className="FormField-container">
					    <CommentsField />
                    </div>
				</Route>

				<Route exact path="/review">
					<div className="FormField-container">
					    <ReviewFeedback />
                    </div>
				</Route>
			</form>
		</>
	);
}

export default FeedbackForm;
