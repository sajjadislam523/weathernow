import { WeatherResponse } from "@/types/weather";

export async function getWeatherData(q: string): Promise<WeatherResponse> {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!API_KEY || !baseUrl) {
        throw new Error("Missing WEATHER_API or BASE_URL in environment");
    }

    const url = `${baseUrl}?key=${API_KEY}&q=${q}&days=1&aqi=yes&alerts=yes`;

    const res = await fetch(url, { next: { revalidate: 600 } });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    return res.json();
}
