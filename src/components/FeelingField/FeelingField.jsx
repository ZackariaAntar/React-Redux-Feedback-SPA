import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NextButton from "../NextButton/NextButton";


function FeelingField(){
    const dispatch = useDispatch()
	// const inputStore = useSelector((store) => store.inputStore);
	const [history, setHistory] = useState("");

	// useEffect(()=>{
	// 	setHistory(inputStore.feeling)
	// },[])
	    const [feeling, setFeeling] = useState({name: ''});





    return (
		<>
			<h1 className="section-header">How are you feeling today?</h1>
			<div className="input-wrapper">
				<label className="InputLabel">
					<p> Feeling?</p>
					<input
						className="num-input"
						name={feeling}
						type="number"
						placeholder="1-5"
						onChange={(e) => setFeeling(e.target.value)}
					/>
				</label>
			</div>

			<NextButton
				onClick={dispatch({
					type: "ADD_REFLECTION",
					payload: { feeling: feeling },
				})}
				used={feeling}
				path={"/understanding"}
			/>
		</>
	);
}
export default FeelingField