export async function searchCities(query: string) {
    if (!query) return;

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
    const BASE_URL = "https://api.weatherapi.com/v1/search.json";

    const url = `${BASE_URL}?key=${API_KEY}&q=${query}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch cities");
    }

    return res.json();
}
