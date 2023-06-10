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
			<label className="InputLabel">Support</label>
			<input
				value={support}
				type="text"
				placeholder="How supported did you feel (1-5)"
				onChange={(e) => setSupport(e.target.value)}
			/>
			<button onClick={handleClick}>
				<Link to={"/comments"}>NEXT</Link>
			</button>
		</>
	);
}

export default SupportField;
