import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../../constants/url";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = () => {
    const navigate = useNavigate();
    const { dark, toggleDark } = useContext(ThemeContext);
    return (
        <div className="header">
            <button onClick={() => toggleDark()} >{dark ? "Dark" : "Light"}</button>
            <button onClick={() => navigate(Url.login)} >Logout</button>
        </div>
    );
}
