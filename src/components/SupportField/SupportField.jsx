import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function SupportField() {
    const [support, setSupport] = useState('')
    const dispatch = useDispatch()
     const handleClick = (e) => {
			e.preventDefault();
			dispatch({
				type: "ADD_REFLECTION",
				payload: { support: support },
			});
		};

	return (
		<>
			<h1>How well are you being supported?</h1>
			<label className="InputLabel">Support?</label>
			<input
				value={support}
				type="number"
				placeholder="1-5"
				onChange={(e) => setSupport(e.target.value)}
			/>
			<button disabled={!support} onClick={handleClick}>
				{support ? <Link to={"/comments"}>NEXT</Link> : "NEXT"}
			</button>
		</>
	);
}

export default SupportField;
