import { useState } from "react";
import NextButton from "../NextButton/NextButton";

function UnderstandingField() {
    const [understanding, setUnderstanding] = useState('')
	return (
		<>
			<label className="InputLabel">Understanding</label>
			<input
				value={understanding}
				type="text"
				placeholder="How well did you understand (1-5)"
				onChange={(e) => setUnderstanding(e.target.value)}
			/>
			<NextButton
				input={understanding}
				setInput={setUnderstanding}
				path={"/support"}
				type={"button"}
			/>
		</>
	);
}

export default UnderstandingField;
