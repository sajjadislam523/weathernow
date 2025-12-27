import { searchCities } from "@/lib/searchCities";
import { useEffect, useState } from "react";

export default function useCitySearch(query: string) {
    const [cities, setCities] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query || query.length < 2) {
            setCities([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                setLoading(true);

                const result = await searchCities(query);
                setCities(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    return { cities, loading };
}
