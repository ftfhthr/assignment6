import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StoreProvider } from "./context/index.jsx"
import HomeView from "./views/HomeView.jsx"
import LoginView from "./views/LoginView.jsx"
import RegisterView from "./views/RegisterView.jsx"
import MoviesView from "./views/MoviesView.jsx"
import GenreView from "./views/GenreView.jsx"
import DetailView from "./views/DetailView.jsx"
import CartView from "./views/CartView.jsx"
import SettingsView from "./views/SettingsView.jsx"
import './App.css'

function App() {
	const genresList = [
        {
            genre: "Action",
            id: 28,
            checked: false
        },
        {
            genre: "Family",
            id: 10751,
            checked: false
        },
        {
            genre: "Science Fiction",
            id: 878,
            checked: false
        },
        {
            genre: "Adventure",
            id: 12,
            checked: false
        },
        {
            genre: "Fantasy",
            id: 14,
            checked: false
        },
        {
            genre: "War",
            id: 10752,
            checked: false
        },
        {
            genre: "Animation",
            id: 16,
            checked: false
        },
        {
            genre: "History",
            id: 36,
            checked: false
        },
        {
            genre: "Thriller",
            id: 53,
            checked: false
        },
        {
            genre: "Comedy",
            id: 35,
            checked: false
        }
    ]

	return (
		<StoreProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomeView />} />
					<Route path="/login" element={<LoginView />} />
					<Route path="/register" element={<RegisterView genresList={genresList} />} />
					<Route path="/movies" element={<MoviesView genresList={genresList} />}>
						<Route path="genre/:genre_id" element={<GenreView />} />
						<Route path="details/:id" element={<DetailView />} />
					</Route>
					<Route path="/cart" element={<CartView />} />
					<Route path="/settings" element={<SettingsView genresList={genresList} />} />
				</Routes>
			</BrowserRouter>
		</StoreProvider>
	)
}

export default App
