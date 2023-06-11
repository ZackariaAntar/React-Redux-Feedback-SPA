import { useState } from "react";
import NextButton from "../NextButton/NextButton";
import { useDispatch } from "react-redux";

function CommentsField() {
	const [comment, setComment] = useState("");
	const dispatch = useDispatch();

	return (
		<>
			<h1 className="section-header">What comments do you have?</h1>
			<div className="input-wrapper">
				<label className="InputLabel">
					<p>Comments?</p>
					<textarea
						className="text-area"
						value={comment}
						placeholder="☺️ Feel free to share your thoughts and feeling and/or let us know how we can improve! ☺️"
						onChange={(e) => setComment(e.target.value)}
					/>
				</label>
			</div>
			<NextButton
				onClick={dispatch({
					type: "ADD_REFLECTION",
					payload: { comment: comment },
				})}
				used={comment}
				path={"/review"}
			/>
		</>
	);
}

export default CommentsField;
