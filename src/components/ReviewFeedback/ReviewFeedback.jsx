import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { Button, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function ReviewFeedback() {
	const dispatch = useDispatch();
	const [editing, setEditing] = useState(false);
	const [newFeeling, setNewFeeling] = useState("");
	const [newUnderstanding, setNewUnderstanding] = useState("");
	const [newSupport, setNewSupport] = useState("");
	const [newComment, setNewComment] = useState("");

	const inputStore = useSelector((store) => store.inputStore);

	const postReflection = () => {
		axios
			.post("/feedback", inputStore)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleEdits = (e) => {
		e.preventDefault();
		console.log(inputStore);
		dispatch({
			type: "ADD_REFLECTION",
			payload: {
				feeling: newFeeling,
				understanding: newUnderstanding,
				support: newSupport,
				comment: newComment,
			},
		});
		setEditing(!editing);
		setToggle(!toggle);
	};

	const [toggle, setToggle] = useState(false);

	return (
		<>
			<Fab
				sx={{ float: "right", marginRight: 5, marginTop: 3.5 }}
				color={"success"}
				aria-label="edit"
				onClick={() => {
					setEditing(!editing);
				}}
			>
				<EditIcon />
			</Fab>
			{editing ? (
				<>
					<h1 className="section-header">
						Review Feedback Before Submitting
					</h1>
					<form onSubmit={handleEdits}>
						<div className="new-review-wrapper">
							<label className="NewInputLabel">
								<p>Feeling:</p>

								<input
									className="new-num-input"
									type="number"
									value={newFeeling}
									placeholder={inputStore.feeling}
									onChange={(e) =>
										setNewFeeling(e.target.value)
									}
									required
									min="0"
									max="5"
								/>
							</label>

							<label className="NewInputLabel">
								<p>Understanding:</p>

								<input
									className="new-num-input"
									type="number"
									value={newUnderstanding}
									placeholder={inputStore.understanding}
									onChange={(e) =>
										setNewUnderstanding(e.target.value)
									}
									required
									min="0"
									max="5"
								/>
							</label>

							<label className="NewInputLabel">
								<p>Supported:</p>

								<input
									className="new-num-input"
									type="number"
									value={newSupport}
									placeholder={inputStore.support}
									onChange={(e) =>
										setNewSupport(e.target.value)
									}
									required="true"
									min="0"
									max="5"
								/>
							</label>

							<label className="NewInputLabel">
								<p>Comments:</p>

								<textarea
									className="new-text-area"
									value={newComment}
									placeholder={inputStore.comment}
									onChange={(e) =>
										setNewComment(e.target.value)
									}
								/>
							</label>
							<button
								className="next-button"
								type="submit"
								onClick={handleEdits}
							>
								SAVE
							</button>
						</div>
					</form>
				</>
			) : (
				<>
					<h1 className="section-header">
						Review Feedback Before Submitting
					</h1>
					<div className="review-wrapper">
						<h2>
							Feeling:
							<span className="score"> {inputStore.feeling}</span>
						</h2>
						<h2>
							Understanding:
							<span className="score">
								{" "}
								{inputStore.understanding}
							</span>
						</h2>
						<h2>
							Supported:
							<span className="score"> {inputStore.support}</span>
						</h2>
						<h2>
							Comments:
							<span className="score"> {inputStore.comment}</span>
						</h2>
						<div>
							<Button
								sx={[
									{
										width: "180px",
										padding: "15px 2px",
										bgcolor: "#033077",
										fontFamily: "Helvetica Neue",
										fontWeight: "600",
										fontSize: "1.25rem",
										borderRadius: "8px",
										border: "5px solid transparent",
									},
									{
										"&:hover": {
											boxShadow: "5px 5px 1px #6e6e6e",
											cursor: "pointer",
											bgcolor: "transparent",
											color: "#033076",
											border: "5px solid #033076",
										},
									},
									{
										"&:disabled": {
											width: "180px",
											padding: "15px 2px",
											borderRadius: "8px",
											color: "aliceblue",
											bgcolor: "#032f765f",
											cursor: "no-drop",
											fontFamily: "Helvetica Neue",
											fontWeight: "600",
											fontSize: "1.25rem",
										},
									},
								]}
								onClick={postReflection}
								disabled={editing}
								variant="contained"
								component={Link}
								to={"/thanks"}
							>
								SUBMIT
							</Button>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default ReviewFeedback;
