import { Link } from "react-router-dom";

function Welcome(){
    return(
        <>
            <h1>Welcome to the Page</h1>
            <Link to={'/start'}><button>Start</button></Link>
        </>
    )
}
export default Welcome;