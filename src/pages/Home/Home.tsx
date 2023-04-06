import { useNavigate } from "react-router-dom";
import { Url } from "../../constants/url";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            home
            <button onClick={() => navigate(Url.login)} >Logout</button>
        </div>
    );
}

export default Home;