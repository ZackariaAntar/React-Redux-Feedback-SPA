import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function NextButton({ path, used }) {
	return (
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
					marginBottom: "25px",
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
						marginBottom: "25px",
					},
				},
			]}
			disabled={!used}
			variant="contained"
			component={Link}
			to={path}
		>
			NEXT
		</Button>
	);
}

export default NextButton;
