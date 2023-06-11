import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import ConfirmModal from "../ConfrimModal/ConfrimModal";

function Admin({getReflections}) {
	const createData = (feeling, understanding, support, comments, remove) => {
		return { feeling, understanding, support, comments, remove };
	};
	const reflections = useSelector((store) => store.reflections);
    const deleteItem = (id) => {
        console.log(id);
        axios.delete(`/feedback/delete/${id}`)
        .then((response)=>{
            console.log(response);
            getReflections()

        }).catch((err)=>{
            console.log(err);
        })
        console.log('Changing');
    }

	return (
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
							<TableCell align="center">{item.support}</TableCell>
							<TableCell align="center">
								{item.comments}
							</TableCell>
							<TableCell align="center">
								<IconButton
									onClick={ () => {
										deleteItem(item.id)
                                    }
									}
								>
									<DeleteIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
export default Admin;
