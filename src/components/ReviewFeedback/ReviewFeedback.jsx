import { useDispatch, useSelector } from "react-redux";
import NextButton from "../NextButton/NextButton";
import axios from "axios";
import { useState, Fragment } from "react";
import {
    Button,
	Dialog,
	DialogActions,
	DialogContent,
    Typography,
	DialogTitle,
	Fab,
    Menu,
    MenuItem
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditForm from "../EditForm/EditForm";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import {Link} from 'react-router-dom'

function ReviewFeedback() {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false)
    const [newFeeling, setNewFeeling] = useState('')
    const [newUnderstanding, setNewUnderstanding] = useState('')
    const [newSupport, setNewSupport] = useState('')
    const [newComment, setNewComment] = useState('')

    const inputStore = useSelector((store) => store.inputStore);

    // console.log(inputStore.comment);

    const postReflection = () => {
        axios.post("/feedback", inputStore )
        .then((response) => {
        console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
    const handleEdits =(e) =>{
        e.preventDefault()
        console.log(inputStore);
        dispatch({
            type:'ADD_REFLECTION',
                payload:{feeling:newFeeling,
                understanding:newUnderstanding,
                support:newSupport,
                comment:newComment}})
            setEditing(!editing)
        }

    const [openDialog, setOpenDialog] = useState(false)


	return (
		<>
			<Dialog open={openDialog}>
				<DialogTitle>
					<Typography variant="inherit">Edit feedback</Typography>
				</DialogTitle>

				<EditForm />
				<DialogActions>
					<Button
						variant="contained"
						onClick={() => {
							setOpenDialog(!openDialog);
						}}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						color="error"
						onClick={() => {
							setOpenDialog(!openDialog);
						}}
					>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
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
						<div className="review-wrapper">
							<h2>
								Feeling:
								<input
									className="new-num-input"
									type="number"
									value={newFeeling}
									required={true}
									placeholder={inputStore.feeling}
									onChange={(e) =>
										setNewFeeling(e.target.value)
									}
								/>
							</h2>
							<h2>
								Understanding:
								<input
									className="new-num-input"
									type="number"
									value={newUnderstanding}
									required={true}
									placeholder={inputStore.understanding}
									onChange={(e) =>
										setNewUnderstanding(e.target.value)
									}
								/>
							</h2>
							<h2>
								Supported:
								<input
									className="new-num-input"
									type="number"
									value={newSupport}
									required={true}
									placeholder={inputStore.support}
									onChange={(e) =>
										setNewSupport(e.target.value)
									}
								/>
							</h2>
							<h2>
								Comments:
								<textarea
									className="new-num-input"
									value={newComment}
									required={true}
									placeholder={inputStore.comment}
									onChange={(e) =>
										setNewComment(e.target.value)
									}
								/>
								<button
									className="next-button"
									type="submit"
									onClick={handleEdits}
								>
									{" "}
									SAVE
								</button>
							</h2>
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
					</div>
				</>
			)}
			<div onClick={postReflection}>
				<NextButton used={true} path={"/thanks"} />
			</div>
		</>
	);

            }




export default ReviewFeedback;


{/* <DialogContent>
					<Typography variant="inherit">
						Please make your changes below:
					</Typography>
				</DialogContent>
				 */}






    // <PopupState variant="popover" popupId="popup-menu">
	// 	{(popupState) => (
	// 		<Fragment>
	// 			<Menu {...bindMenu(popupState)}>
	// 				<MenuItem
	// 					component={Link}
	// 					to={"/"}
	// 					onClick={popupState.close}
	// 				>
	// 					Feeling
	// 				</MenuItem>
	// 				<MenuItem
	// 					component={Link}
	// 					to={"/understanding"}
	// 					onClick={popupState.close}
	// 				>
	// 					Understanding
	// 				</MenuItem>
	// 				<MenuItem
	// 					component={Link}
	// 					to={"/support"}
	// 					onClick={popupState.close}
	// 				>
	// 					Support
	// 				</MenuItem>
	// 				<MenuItem
	// 					component={Link}
	// 					to={"/comments"}
	// 					onClick={popupState.close}
	// 				>
	// 					Comments
	// 				</MenuItem>
	// 			</Menu>
	// 		</Fragment>
	// 	)}
	// </PopupState>;


    // <h1 className="section-header">
	// 			Review Feedback Before Submitting
	// 		</h1>
	// 		<div className="review-wrapper">
	// 			<h2>
	// 				Feeling:
	// 				{editing ? (
	// 					<input
    //                     className="new-num-input"
	// 						type="number"
	// 						value={newFeeling}
	// 						required={true}
	// 						placeholder={inputStore.feeling}
	// 						onChange={(e) => setNewFeeling(e.target.value)}
	// 					/>
	// 				) : (
	// 					<span className="score"> {inputStore.feeling}</span>
	// 				)}
	// 			</h2>
	// 			<h2>
	// 				Understanding:
	// 				<span className="score"> {inputStore.understanding}</span>
	// 			</h2>
	// 			<h2>
	// 				Supported:
	// 				<span className="score"> {inputStore.support}</span>
	// 			</h2>
	// 			<h2>
	// 				Comments:
	// 				<span className="score"> {inputStore.comment}</span>
	// 			</h2>
	// 		</div>