import { Link } from "react-router-dom";

function NextButton({path , type}) {
    console.log(type);


	return (<button type={type}>
        <Link to = {path}>NEXT </Link>
        </button>
        );
}
export default NextButton;
