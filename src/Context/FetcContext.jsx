import { createContext } from "react";
import apiService from "../api/apiService";
import { useState } from "react";

export const FetchContext = createContext();
export function FetchContextProvider({ children }) {

    const [coffeesDetail, setCoffeesDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                setLoading(true);
                const data = await apiService.getCoffeeById(); // API çağrısı
                setCoffees(data);
            } catch (err) {
                setError("Kahve demleme yöntemleri yüklenirken bir hata oluştu.");
                console.error("API Hatası:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCoffees();
    }, []);


    return (
        <FetchContext.Provider>
            {children}
        </FetchContext.Provider>
    );
}