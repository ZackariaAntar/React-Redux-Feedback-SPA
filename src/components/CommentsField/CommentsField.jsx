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
			<label className="InputLabel">Comments</label>
			<textarea
				value={comment}
				placeholder="What comments do you have?"
				onChange={(e) => setComment(e.target.value)}
			/>
			<button onClick={handleClick}>
				<Link to={"/review"}>NEXT</Link>
			</button>
		</>
	);
}

export default CommentsField;
