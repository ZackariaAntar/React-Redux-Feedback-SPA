import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function NextButton({path , type, input, setInput}) {
    const dispatch = useDispatch()
    console.log('Button type:', type, '\nIs going to:', path);
    const handleClick = () => {
        dispatch({type:'ADD_REFLECTION', payload: {input} })
        setInput('')
    }


	return (<button type={type} onClick={handleClick}>
        <Link to = {path}>NEXT </Link>
        </button>
        );
}
export default NextButton;
