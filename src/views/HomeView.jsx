import Header from "../components/Header.jsx"
import Hero from "../components/Hero.jsx"
import Feature from "../components/Feature.jsx"
import Footer from "../components/Footer.jsx"
import { useStoreContext } from "../context/index.jsx"

const HomeView = () => {
    const setGenres = useStoreContext();
    setGenres([
        {
            genre: "Action",
            id: 28
        },
        {
            genre: "Family",
            id: 10751
        },
        {
            genre: "Science Fiction",
            id: 878
        },
        {
            genre: "Adventure",
            id: 12
        },
        {
            genre: "Fantasy",
            id: 14
        },
        {
            genre: "War",
            id: 10752
        },
        {
            genre: "Animation",
            id: 16
        },
        {
            genre: "History",
            id: 36
        },
        {
            genre: "Thriller",
            id: 53
        },
        {
            genre: "Comedy",
            id: 35
        }
    ]);
    return (
        <>
            <Header />
            <Hero />
            <Feature />
            <Footer />
        </>
    )
}

export default HomeView;