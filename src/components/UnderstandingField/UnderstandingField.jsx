import { useState } from "react";

function UnderstandingField() {
	return (
		<>
			<label className="InputLabel">Understanding</label>
			<input
				type="text"
				placeholder="How well did you understand (1-5)"
			/>
		</>
	);
}

export default UnderstandingField;
