import { Link } from "react-router-dom";

function NextButton({path , type}) {
    console.log('Button type:', type, '\nIs going to:', path);


	return (<button type={type}>
        <Link to = {path}>NEXT </Link>
        </button>
        );
}
export default NextButton;
