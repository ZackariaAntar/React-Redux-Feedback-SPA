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
			<h1 className="section-header">How are you feeling today?</h1>
			<div className="input-wrapper">
                <label className="InputLabel">
                    <p> Feeling?</p>
                    <input
                        className="num-input"
                        value={feeling}
                        type="text"
                        placeholder="1-5"
                        onChange={(e) => setFeeling(e.target.value)}
                        />
                </label>
            </div>
			<button
				className="next-button"
				disabled={!feeling}
                href="/understanding"
				onClick={handleClick}
			>
				{feeling ? <Link to={"/understanding"}> NEXT</Link> : "NEXT"}
			</button>
		</>
	);
}
export default FeelingField