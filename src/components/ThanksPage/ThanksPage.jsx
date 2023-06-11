import NextButton from "../NextButton/NextButton";

function ThanksPage() {
	return (
		<>
			<div className="FormField-container">
				<h1>Thanks for your feedback!</h1>
				<NextButton type={'button'} used = {true} path={"/"} />
			</div>
		</>
	);
}

export default ThanksPage;
