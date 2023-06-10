import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function FeelingField(){
    const dispatch = useDispatch()
    const [feeling, setFeeling] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
			dispatch({ type: "ADD_REFLECTION", payload: {feeling: feeling} });


		};
    console.log(feeling);

    return (
		<>
        <h1>How are you feeling today?</h1>
			<label className="InputLabel">Feeling?</label>
			<input
				value={feeling}
				type="text"
				placeholder="1-5"
				onChange={(e) => setFeeling(e.target.value)}
			/>
			<button disabled={!feeling} onClick={handleClick}>{feeling ? (<Link to={"/understanding"}> NEXT</Link>):("NEXT")}
			</button>
		</>
	);
}
export default FeelingField