import { useState } from "react";
import NextButton from "../NextButton/NextButton";
import { useSelector } from "react-redux";

function UnderstandingField() {
    const [understanding, setUnderstanding] = useState('')
    const inputStore = useSelector(store => store.inputStore)
    console.log(inputStore);
	return (
		<>
			<label className="InputLabel">Understanding</label>
			<input
				value={understanding}
				type="text"
				placeholder="How well did you understand (1-5)"
				onChange={(e) => setUnderstanding(e.target.value)}
			/>

		</>
	);
}

export default UnderstandingField;
