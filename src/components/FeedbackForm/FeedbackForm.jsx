import {Route, Link } from "react-router-dom";
import FeelingField from "../FeelingField/FeelingField";
import UnderstandingField from "../UnderstandingField/UnderstandingField";
import SupportField from "../SupportField/SupportField";
import CommentsField from "../CommentsField/CommentsField";

function FeedbackForm() {
    const postReflection = () =>{

    }
	return (
		<>
			<form>
				<Route>
					<FeelingField />
				</Route>

				<Route>
					<UnderstandingField />
				</Route>
				<Route>
                    <SupportField />
				</Route>

				<Route>
					<CommentsField />
				</Route>
                
			</form>
		</>
	);
}

export default FeedbackForm;
