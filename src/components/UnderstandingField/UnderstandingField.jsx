import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function UnderstandingField() {
    const [understanding, setUnderstanding] = useState('')
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault();
		dispatch({ type: "ADD_REFLECTION", payload: { understanding: understanding } });
	};
    const inputStore = useSelector(store => store.inputStore)
    console.log(inputStore);
	return (
		<>
			<label className="InputLabel">Understanding</label>
			<input
				value={understanding}
				type="text"
				placeholder="How well did you understand (1-5)"
				onChange={(e) => setUnderstanding(e.target.value)}
			/>
			<button onClick={handleClick}>
				<Link to={"/support"}>NEXT</Link>
			</button>

		</>
	);
}

export default UnderstandingField;




