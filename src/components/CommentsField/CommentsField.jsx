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
			<h1 className="section-header">What comments do you have?</h1>
			<label className="InputLabel">
                <p>
                    Comments?
                </p>
			<textarea
				className="text-area"
				value={comment}
				placeholder="☺️ Feel free to share your thoughts and feeling and/or let us know how we can improve! ☺️"
				onChange={(e) => setComment(e.target.value)}
                />
            </label>
			<button className="next-button" onClick={handleClick}>
				<Link to={"/review"}>NEXT</Link>
			</button>
		</>
	);
}

export default CommentsField;