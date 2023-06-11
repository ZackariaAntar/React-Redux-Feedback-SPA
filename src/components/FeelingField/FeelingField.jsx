import { useState } from "react";
import { useDispatch } from "react-redux";
import NextButton from "../NextButton/NextButton";


function FeelingField(){
    const dispatch = useDispatch()
    const [feeling, setFeeling] = useState('')


    return (
		<>
			<h1 className="section-header">How are you feeling today?</h1>
			<div className="input-wrapper">
				<label className="InputLabel">
					<p> Feeling?</p>
					<input
						className="num-input"
						value={feeling}
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