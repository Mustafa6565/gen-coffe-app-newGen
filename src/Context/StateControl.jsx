import { createContext, useCallback, useState, useEffect } from "react";
import apiService from "../api/apiService";

export const StateControll = createContext();

export function StateCotrolProvider({ children }) {
    // theme durumunu localStorage'dan başlat
    const [theme, setTheme] = useState(() => {
        try {
            const storedTheme = localStorage.getItem('theme');
            return storedTheme ? JSON.parse(storedTheme) : false;
        } catch (err) {
            console.error("Tema localStorage'dan yüklenirken hata:", err);
            return false;
        }
    });

    const handleSetTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    };

    const [favoriteEspressoIds, setFavoriteEspressoIds] = useState(() => {
        try {
            const storedFavorites = localStorage.getItem('favoriteEspressoIds');
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        } catch (err) {
            console.error("Favori ID'ler localStorage'dan yüklenirken hata:", err);
            return [];
        }
    });

    const [favoriteEspressoBeans, setFavoriteEspressoBeans] = useState([]);
    const [loadingFavoriteBeans, setLoadingFavoriteBeans] = useState(false);
    const [errorFavoriteBeans, setErrorFavoriteBeans] = useState(null);

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
        const fetchFavoriteBeans = async () => {
            if (favoriteEspressoIds.length === 0) {
                setFavoriteEspressoBeans([]);
                setLoadingFavoriteBeans(false);
                setErrorFavoriteBeans(null);
                return;
            }

            setLoadingFavoriteBeans(true);
            setErrorFavoriteBeans(null);
            const fetchedBeans = [];
            let hasError = false;

            for (const id of favoriteEspressoIds) {
                try {
                    const bean = await apiService.getEspressoBeanById(id);
                    if (bean) {
                        fetchedBeans.push(bean);
                    }
                } catch (err) {
                    console.error(`ID ${id} için kahve çekirdeği çekilirken hata:`, err);
                    setErrorFavoriteBeans("Favori kahve çekirdekleri yüklenirken bir hata oluştu.");
                    hasError = true;
                }
            }
            setFavoriteEspressoBeans(fetchedBeans);
            setLoadingFavoriteBeans(false);
            if (hasError) {
                setErrorFavoriteBeans('Favori çekirdekler yüklenirken bir hata oluştu.');
            }
        };
        fetchFavoriteBeans();
    }, [favoriteEspressoIds]);

    useEffect(() => {
        localStorage.setItem('favoriteEspressoIds', JSON.stringify(favoriteEspressoIds));
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [favoriteEspressoIds, theme]);

    return (
        <StateControll.Provider value={{
            favoriteEspressoIds,
            handleToggleFavorite,
            favoriteEspressoBeans,
            loadingFavoriteBeans,
            errorFavoriteBeans,
            setFavoriteEspressoIds,
            theme,
            handleSetTheme
        }}>
            {children}
        </StateControll.Provider>
    );
}
