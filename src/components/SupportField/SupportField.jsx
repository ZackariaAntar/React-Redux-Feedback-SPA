import { useState } from "react";
import NextButton from "../NextButton/NextButton";

function SupportField() {
    const [support, setSupport] = useState('')
	return (
		<>
			<label className="InputLabel">Support</label>
			<input
				value={support}
				type="text"
				placeholder="How supported did you feel (1-5)"
				onChange={(e) => setSupport(e.target.value)}
			/>
			
		</>
	);
}

export default SupportField;
