import { useNavigate } from "react-router-dom";
import { Url } from "../../constants/url";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="login">login
            <button onClick={() => navigate(Url.home)} >Login</button>
        </div>
    );
}

export default Home;