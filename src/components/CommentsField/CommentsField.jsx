import { useState } from "react";

function CommentsField() {
	return (
		<>
			<label className="InputLabel">Comments</label>
			<textarea placeholder="What comments do you have?" />
		</>
	);
}

export default CommentsField;
