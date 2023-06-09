import {Route, Link } from "react-router-dom";
import FeelingField from "../FeelingField/FeelingField";
import UnderstandingField from "../UnderstandingField/UnderstandingField";
import SupportField from "../SupportField/SupportField";
import CommentsField from "../CommentsField/CommentsField";
import NextButton from "../NextButton/NextButton";

function FeedbackForm() {
    const postReflection = () =>{

    }
	return (
		<>
			<form>
				<Route exact path="/">
					<FeelingField />
					<NextButton path={"/understanding"} />
				</Route>

				<Route exact path="/understanding">
					<UnderstandingField />
					<button>
						<Link to="/support"> NEXT</Link>
					</button>
				</Route>
				<Route exact path="/support">
					<SupportField />
					<button>
						<Link to="/comments"> NEXT</Link>
					</button>
				</Route>

				<Route exact path="/comments">
					<CommentsField />
					<button type="submit">NEXT</button>
				</Route>
			</form>
		</>
	);
}

export default FeedbackForm;
