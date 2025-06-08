// Örnek: favoriteEspressoIds'ı localStorage'da kalıcı hale getirme
// StateCotrolProvider içinde
import { createContext, useCallback, useState, useEffect } from "react"; // useEffect'i ekleyin
import apiService from "../api/apiService";

export const StateControll = createContext();

export function StateCotrolProvider({ children }) {
    const [favoriteEspressoIds, setFavoriteEspressoIds] = useState(() => {
        try {
            const storedFavorites = localStorage.getItem('favoriteEspressoIds');
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        }
        catch (err) {
            console.log(err.message)
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
                    const bean = await apiService.getEspressoBeanById(id)
                    if (bean) {
                        fetchedBeans.push(bean);
                    }
                } catch (err) {
                    console.log(`ID ${id} için kahve çekirdeği çekilirken hata:`, err)
                    setErrorFavoriteBeans("Favori kahve çekirdekleri yüklenirken bir hata oluştu.");
                    hasError = true;
                }

            }
            setFavoriteEspressoBeans(fetchedBeans);
            setLoadingFavoriteBeans(false);
            if (hasError && !errorFavoriteBeans) {
                setErrorFavoriteBeans('Yüklenirken Bir Hata Oluştu')
            }
        };
        fetchFavoriteBeans();
    }, [favoriteEspressoIds])

    useEffect(() => {
        localStorage.setItem('favoriteEspressoIds', JSON.stringify(favoriteEspressoIds));
    }, [favoriteEspressoIds]);






    return (
        <StateControll.Provider value={{
            favoriteEspressoIds,
            handleToggleFavorite,
            favoriteEspressoBeans,
            loadingFavoriteBeans,
            errorFavoriteBeans,
            setFavoriteEspressoIds
        }} >
            {children}
        </StateControll.Provider>
    );
}