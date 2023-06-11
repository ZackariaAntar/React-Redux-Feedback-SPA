import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";


function Admin({getReflections}) {
	const reflections = useSelector((store) => store.reflections);
	useEffect(()=>{
		getReflections()
	},[])
	const [open, setOpen] = useState(false);
	const [id, setId] = useState('')

    const deleteItem = (id) => {
        console.log(id);
        axios.delete(`/feedback/delete/${id}`)
        .then((response)=>{
			setOpen(!open)
            console.log(response);
            getReflections()

        }).catch((err)=>{
            console.log(err);
        })

    }

	return (
		<>
			<Dialog open={open}>
				<DialogTitle>
					<Typography variant="inherit">
						Delete feedback from database
					</Typography>
				</DialogTitle>
				<DialogContent>
					<Typography variant="inherit">
						Are you sure you want to delete this entry?
					</Typography>
					<Typography variant="subtitle2">
						There's no going back!
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={()=>{setOpen
					(!open)}}>No</Button>
					<Button variant="contained" color="error" onClick={()=>{deleteItem(id)}}>
						Yes
					</Button>
				</DialogActions>
			</Dialog>

			<TableContainer
				component={Paper}
				sx={{
					marginLeft: 10,
					marginRight: 10,
					maxWidth: 900,
					fontSize: "1.75rem",
				}}
			>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead sx={{}}>
						<TableRow>
							<TableCell>Feeling</TableCell>
							<TableCell align="center">Understanding</TableCell>
							<TableCell align="center">Support</TableCell>
							<TableCell align="center">Comments</TableCell>
							<TableCell align="center">Delete</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{reflections.map((item) => (
							<TableRow
								key={item.id}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell
									component="th"
									scope="row"
									align="center"
								>
									{item.feeling}
								</TableCell>
								<TableCell align="center">
									{item.understanding}
								</TableCell>
								<TableCell align="center">
									{item.support}
								</TableCell>
								<TableCell align="center">
									{item.comments}
								</TableCell>
								<TableCell align="center">
									<IconButton
										onClick={() => { setId(item.id),
											setOpen(!open);
										}}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
export default Admin;


//  onClick={()=>{deleteItem(item.id)}}