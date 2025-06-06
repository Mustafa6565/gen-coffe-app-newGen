// Örnek: favoriteEspressoIds'ı localStorage'da kalıcı hale getirme
// StateCotrolProvider içinde
import { createContext, useCallback, useState, useEffect } from "react"; // useEffect'i ekleyin

export const StateControll = createContext();

export function StateCotrolProvider({ children }) {
    // localStorage'dan başlangıç değeri okuyun, yoksa boş dizi kullanın
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

    // favoriteEspressoIds değiştiğinde localStorage'a kaydedin
    useEffect(() => {
        localStorage.setItem('favoriteEspressoIds', JSON.stringify(favoriteEspressoIds));
    }, [favoriteEspressoIds]); // favoriteEspressoIds değiştiğinde çalışır

    return (
        <StateControll.Provider value={{ setFavoriteEspressoIds, handleToggleFavorite, favoriteEspressoIds }} >
            {children}
        </StateControll.Provider>
    );
}