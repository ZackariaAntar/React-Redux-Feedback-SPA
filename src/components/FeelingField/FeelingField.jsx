import { useState } from "react";
import NextButton from "../NextButton/NextButton";
function FeelingField(){
    const [feeling, setFeeling] =useState('')
    console.log(feeling);
    return (
		<>
			<label className="InputLabel">Feeling</label>
			<input
				value={feeling}
				type="text"
				placeholder="How are you feeling (1-5)"
				onChange={(e) => setFeeling(e.target.value)}
			/>
			<NextButton input={feeling} setInput={setFeeling} type={"button"} path={"/understanding"} />
		</>
	);
}
export default FeelingField