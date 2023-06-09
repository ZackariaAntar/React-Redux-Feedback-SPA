import { Link } from "react-router-dom";

function NextButton({path}) {


	return (<button>
        <Link to = {path}>NEXT </Link>
        </button>
        );
}
export default NextButton;
