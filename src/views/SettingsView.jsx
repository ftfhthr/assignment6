import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";

const SettingsView = (props) => {
    const { email } = useStoreContext();
    const { genres } = useStoreContext();
    const navigate = useNavigate();
    
    const updateSettings = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className="form-container">
                <form onSubmit={(e) => updateSettings(e)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" readOnly value={email}/>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" />
                    {genres.map((genre) => (
                        <div key={genre.id} className="genre-checkbox">
                            <input type="checkbox" id={genre.genre} defaultChecked={genre.checked} />
                            <label htmlFor={genre.genre}>{genre.genre}</label>
                        </div>
                    ))}
                    <input type="submit" value={"Save Settings"} required />
                    <button onClick={() => navigate("/movies")}>Back</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default SettingsView;