// Örnek: favoriteEspressoIds'ı localStorage'da kalıcı hale getirme
// StateCotrolProvider içinde
import { createContext, useCallback, useState, useEffect } from "react"; // useEffect'i ekleyin

export const StateControll = createContext();

export function StateCotrolProvider({ children }) {
    const [favoriteEspressoIds, setFavoriteEspressoIds] = useState(() => {
        const storedFavorites = localStorage.getItem('favoriteEspressoIds');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const handleToggleFavorite = useCallback((id) => {
        setFavoriteEspressoIds((prevFavoriteIds) => {
            if (prevFavoriteIds.includes(id)) {
                return prevFavoriteIds.filter((favId) => favId !== id);
            } else {
                return [...prevFavoriteIds, id];
            }
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteEspressoIds', JSON.stringify(favoriteEspressoIds));
    }, [favoriteEspressoIds]);





    return (
        <StateControll.Provider value={{ setFavoriteEspressoIds, handleToggleFavorite, favoriteEspressoIds }} >
            {children}
        </StateControll.Provider>
    );
}