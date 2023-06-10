import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";




function CommentsField() {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch();
     const handleClick = (e) => {
			e.preventDefault();
			dispatch({
				type: "ADD_REFLECTION",
				payload: { comment: comment },
			});
		};


	return (
		<>
			<h1>What comments do you have?</h1>
			<label className="InputLabel">Comments?</label>
			<textarea
				value={comment}
				placeholder="☺️ Feel free to share your thoughts and feeling and/or let us know how we can improve! ☺️"
				onChange={(e) => setComment(e.target.value)}
			/>
			<button onClick={handleClick}>
				<Link to={"/review"}>NEXT</Link>
			</button>
		</>
	);
}

export default CommentsField;
