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
			<h1 className="section-header">
				How well are you understanding the content?
			</h1>
            <div className="input-wrapper">

			<label className="InputLabel">
                <p>
                Understanding?
                </p>

			<input
				className="num-input"
				value={understanding}
				type="number"
				placeholder="1-5"
				onChange={(e) => setUnderstanding(e.target.value)}
                />
            </label>
            </div>
			<button
				className="next-button"
				disabled={!understanding}
				onClick={handleClick}
			>
				{understanding ? <Link to={"/support"}>NEXT</Link> : "NEXT"}
			</button>
		</>
	);
}

export default UnderstandingField;




