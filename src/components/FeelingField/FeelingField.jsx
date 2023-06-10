import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function FeelingField(){
    const dispatch = useDispatch()
    const [feeling, setFeeling] = useState({feeling: ''})
    const handleClick = (e) => {
        e.preventDefault()
			dispatch({ type: "ADD_REFLECTION", payload: {feeling: feeling} });
		};
    console.log(feeling);

    return (
		<>
			<label className="InputLabel">Feeling</label>
			<input
				value={feeling}
				type="text"
				placeholder="How are you feeling (1-5)"
				onChange={(e) => setFeeling(e.target.value)}
			/>
			<button onClick={handleClick}>
				<Link to={'/understanding'}>NEXT </Link>
			</button>
		</>
	);
}
export default FeelingField