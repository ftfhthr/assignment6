import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";

const SettingsView = () => {
    const { email } = useStoreContext();
    const { firstName, setFirstName } = useStoreContext();
    const { lastName, setLastName } = useStoreContext();
    const { genres, setGenres } = useStoreContext();
    const navigate = useNavigate();
    var checkedGenres = JSON.parse(JSON.stringify(genres));

    const updateSettings = (e) => {
        e.preventDefault();
        setFirstName(e.target.firstname.value);
        setLastName(e.target.lastname.value);
        setGenres(JSON.parse(JSON.stringify(checkedGenres)));
    }

    const setCheckedGenres = (e) => {
        checkedGenres = JSON.parse(JSON.stringify(genres));
        if (e.target.checked) {
            for (var i = 0; i < genres.length; i++) {
                if (e.target.id == genres[i].id) {
                    checkedGenres[i].checked = true;
                }
            }
        } else {
            for (var i = 0; i < genres.length; i++) {
                if (e.target.id == genres[i].id) {
                    checkedGenres[i].checked = false;
                }
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="form-container">
                <div className="form">
                    <form onSubmit={(e) => updateSettings(e)}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" readOnly value={email} />
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" name="firstname" defaultValue={firstName} />
                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" name="lastname" defaultValue={lastName} />
                        {genres.map((genre) => (
                            <div key={genre.id} className="genre-checkbox">
                                <input type="checkbox" id={genre.id} defaultChecked={genre.checked} onChange={(event) => setCheckedGenres(event)} />
                                <label htmlFor={genre.genre}>{genre.genre}</label>
                            </div>
                        ))}
                        <input type="submit" value={"Save Settings"} required />
                    </form>
                    <button onClick={() => navigate("/movies")}>Back</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SettingsView;