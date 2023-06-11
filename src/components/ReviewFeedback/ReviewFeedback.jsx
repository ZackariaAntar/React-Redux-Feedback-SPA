import { useSelector } from "react-redux";
import NextButton from "../NextButton/NextButton";
import axios from "axios";

function ReviewFeedback() {
	const inputStore = useSelector((store) => store.inputStore);
    console.log(inputStore.comment);
	const postReflection = () => {
		axios.post("/feedback", { inputStore })
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
					Feeling:
					<span className="score"> {inputStore.feeling}</span>
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
			
            <div onClick={postReflection}>
                <NextButton
				    used={true}
				    path={"/thanks"}
			    />
            </div>
		</>
	);
}

export default ReviewFeedback;
