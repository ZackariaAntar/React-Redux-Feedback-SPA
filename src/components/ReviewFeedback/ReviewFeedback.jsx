import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function ReviewFeedback() {
	const inputStore = useSelector((store) => store.inputStore);
	const postReflection = (event) => {
		event.preventDefault();
		axios
			.post("/feedback", { inputStore })
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<h1 className="section-header">
				Review Feedback Before Submitting
			</h1>
			<div className="review-wrapper">
				<h2>
					Feeling: <span className="score"> {inputStore.feeling}</span>
				</h2>
				<h2>
					Understanding:
					<span className="score"> {inputStore.understanding}</span>
				</h2>
				<h2>
					Supported:
					<span className="score"> {inputStore.support}</span>
				</h2>
				<h2>
					Comments:
					<span className="score"> {inputStore.comment}</span>
				</h2>
			</div>
			<button className="next-button" onClick={postReflection}>
				<Link to={"/thanks"}> Submit</Link>
			</button>
		</>
	);
}

export default ReviewFeedback;
