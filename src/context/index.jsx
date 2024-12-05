import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [cart, setCart] = useState(Map());

    const [genresList, setGenres] = useState([
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
        <StoreContext.Provider value={{ email, setEmail, cart, setCart, genresList, setGenres }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}