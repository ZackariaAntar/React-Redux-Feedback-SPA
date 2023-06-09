import { useState } from "react";
import NextButton from "../NextButton/NextButton";

function CommentsField() {
    const [comment, setComment] = useState('')
	return (
		<>
			<label className="InputLabel">Comments</label>
			<textarea
				value={comment}
				placeholder="What comments do you have?"
				onChange={(e) => setComment(e.target.value)}
			/>
			<NextButton
				input={comment}
				setInput={setComment}
				path={"/thanks"}
			/>
		</>
	);
}

export default CommentsField;
