import { useState } from "react";
import NextButton from "../NextButton/NextButton";

function CommentsField() {
    const [comment, setComment] = useState({comment: ''})

	return (
		<>
			<label className="InputLabel">Comments</label>
			<textarea
				value={comment}
				placeholder="What comments do you have?"
				onChange={(e) => setComment(e.target.value)}
			/>

		</>
	);
}

export default CommentsField;
