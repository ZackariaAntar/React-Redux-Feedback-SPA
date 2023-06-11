import { useState } from "react";
import { useDispatch } from "react-redux";
import NextButton from "../NextButton/NextButton";

function SupportField() {
	const [support, setSupport] = useState("");
	const dispatch = useDispatch();
	return (
		<>
			<h1 className="section-header">
				How well are you being supported?
			</h1>
			<div className="input-wrapper">
				<label className="InputLabel">
					<p>Support?</p>
					<input
						className="num-input"
						value={support}
						type="number"
						placeholder="1-5"
						onChange={(e) => setSupport(e.target.value)}
						min="0"
						max="5"
					/>
				</label>
			</div>

			<NextButton
				onClick={dispatch({
					type: "ADD_REFLECTION",
					payload: { support: support },
				})}
				used={support}
				path={"/comments"}
			/>
		</>
	);
}

export default SupportField;
