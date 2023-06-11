import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NextButton from "../NextButton/NextButton";

function UnderstandingField() {
	const [understanding, setUnderstanding] = useState("");
	const dispatch = useDispatch();
	return (
		<>
			<h1 className="section-header">
				How well are you understanding the content?
			</h1>
			<div className="input-wrapper">
				<label className="InputLabel">
					<p>Understanding?</p>

					<input
						className="num-input"
						value={understanding}
						type="number"
						placeholder="1-5"
						onChange={(e) => setUnderstanding(e.target.value)}
						min="0"
						max="5"
					/>
				</label>
			</div>
			<NextButton
				used={understanding}
				onClick={dispatch({
					type: "ADD_REFLECTION",
					payload: { understanding: understanding },
				})}
				path={"/support"}
			/>
		</>
	);
}

export default UnderstandingField;
