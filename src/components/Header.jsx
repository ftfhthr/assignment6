import { useNavigate } from "react-router-dom";
import logo from "../assets/321.png";
import { useStoreContext } from "../context";
import "./Header.css"

const Header = () => {
    const { email } = useStoreContext();
    const navigate = useNavigate();

    const loginButtons = () => {
        if (email == "") {
            return (
                <>
                    <a href="/login">Log In</a>
                    <a href="/register">Sign Up</a>
                </>
            )
        }
    }

    const cart = () => {
        if (email != "") {
            return (
                <button onClick={() => navigate("/cart")}>Cart</button>
            )
        }
    }

    return (
        <div className="header">
            <a href="/">
                <img src={logo} alt="321 Movies Logo" />
            </a>
            <div className="navbar-container">
                {loginButtons()}
                {cart()}
            </div>
        </div>
    );
}

export default Header;