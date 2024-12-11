import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { useStoreContext } from "../context/index.jsx";

const RegisterView = () => {
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const {email, setEmail} = useStoreContext();
    const {firstName, setFirstName} = useStoreContext();
    const {lastName, setLastName} = useStoreContext();
    const { genres } = useStoreContext();
    const navigate = useNavigate();

    const checkPass = (e) => {
        e.preventDefault();
        if (pass1 == pass2) {
            setFirstName(e.target.firstname.value);
            setLastName(e.target.lastname.value);
            setEmail(e.target.email.value);
            navigate("/movies");
        } else {
            alert("Passwords don't match!");
        }
    }

    return (
        <div>
            <Header />
            <div className="form-container">
                <form className="form" onSubmit={(e) => checkPass(e)}>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="firstname" required />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="lastname" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="pass" value={pass1} onChange={(event) => { setPass1(event.target.value) }} required />
                    <label htmlFor="reenter-pass">Re-enter Password:</label>
                    <input type="password" id="reenter-pass" value={pass2} onChange={(event) => { setPass2(event.target.value) }} required />
                    {genres.map((genre) => (
                        <div key={genre.id} className="genre-checkbox">
                            <input type="checkbox" id={genre.genre} />
                            <label htmlFor={genre.genre}>{genre.genre}</label>
                        </div>
                    ))}
                    <input type="submit" value={"Sign Up"} required />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterView;