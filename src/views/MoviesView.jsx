import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Genres from "../components/Genres.jsx"
import "./MoviesView.css"

const MoviesView = (props) => {
    return (
        <div>
            <Header />
            <div className="movies-view">
                <Genres genresList={props.genresList}/>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MoviesView;