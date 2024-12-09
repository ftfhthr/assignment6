import { Link } from "react-router-dom";
import "./Genres.css"

const Genres = (props) => {
    return (
        <div className="genres">
            {props.genresList.map((genre) => (
                <Link key={genre.id} to={`/movies/genre/${genre.id}`}>{genre.genre}</Link>
            ))}
            <a href="/">Log Out</a>
        </div>
    )
}

export default Genres;