import { createContext, useCallback, useState, useEffect } from "react";
import apiService from "../api/apiService"; // apiService'in doğru yolu olduğundan emin olun

export const StateControll = createContext();

export function StateCotrolProvider({ children }) {
    // theme durumunu localStorage'dan başlat
    const [theme, setTheme] = useState(() => {
        try {
            const storedTheme = localStorage.getItem('theme');
            // localStorage'dan alınan değer bir string olduğu için JSON.parse ile boolean'a çeviriyoruz
            // Eğer yoksa veya hata oluşursa varsayılan olarak false (açık tema) kullanıyoruz
            return storedTheme ? JSON.parse(storedTheme) : false;
        } catch (err) {
            console.error("Tema localStorage'dan yüklenirken hata:", err);
            return false; // Hata durumunda varsayılan tema
        }
    });

    const handleSetTheme = () => {
        setTheme((prevTheme) => !prevTheme); // Önceki değeri kullanarak temayı değiştir
    };

    const [favoriteEspressoIds, setFavoriteEspressoIds] = useState(() => {
        try {
            const storedFavorites = localStorage.getItem('favoriteEspressoIds');
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        } catch (err) {
            console.error("Favori ID'ler localStorage'dan yüklenirken hata:", err); // console.log yerine console.error kullanın
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

            // Tüm favori çekirdekleri paralel olarak çekmek daha verimli olabilir
            // Ancak mevcut for döngüsü de çalışır.
            // Hata yönetimi için ayrı ayrı yakalama önemlidir.
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
            if (hasError) { // Eğer bir hata oluştuysa ve henüz bir hata mesajı ayarlanmadıysa
                setErrorFavoriteBeans('Favori çekirdekler yüklenirken bir hata oluştu.');
            }
        };
        fetchFavoriteBeans();
    }, [favoriteEspressoIds]);

    // favoriteEspressoIds ve theme değiştiğinde localStorage'a kaydet
    useEffect(() => {
        localStorage.setItem('favoriteEspressoIds', JSON.stringify(favoriteEspressoIds));
        localStorage.setItem('theme', JSON.stringify(theme)); // theme'i ayrı olarak kaydet
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
