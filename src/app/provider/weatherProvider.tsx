"use client";

import { getWeatherData } from "@/app/lib/data";
import { Current, Forecast, Location } from "@/app/types/weather";
import { createContext, useEffect, useState } from "react";

interface WeatherContextType {
    currentWeather: Current | null;
    forecast: Forecast | null;
    location: Location | null;
    loading: boolean;
    error: string | null;
    query: string;
    setCity: (q: string) => void;
    refresh: () => void;
}

export const WeatherContext = createContext<WeatherContextType | null>(null);

function getUserLocation(): Promise<string> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => resolve(`${pos.coords.latitude},${pos.coords.longitude}`),
            reject,
            { enableHighAccuracy: true, timeout: 10000 }
        );
    });
}

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
    const [query, setQuery] = useState("Dhaka");
    // const [weather, setWeather] = useState<WeatherResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentWeather, setCurrentWeather] = useState<Current | null>(null);
    const [forecast, setForecast] = useState<Forecast | null>(null);
    const [location, setLocation] = useState<Location | null>(null);

    const fetchWeather = async (q: string) => {
        try {
            setLoading(true);
            setError(null);
            const data = await getWeatherData(q);
            setCurrentWeather(data.current);
            setForecast(data.forecast);
            setLocation(data.location);
            // setWeather(data);
        } catch (err) {
            setError(err as string);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        async function detectLocation() {
            try {
                const q = await getUserLocation();
                setQuery(q);
                fetchWeather(q);
            } catch {
                fetchWeather("Dhaka");
            }
        }
        detectLocation();
    }, []);

    const setCity = (city: string) => {
        setQuery(city);
        fetchWeather(city);
    };

    const contextData = {
        // weather,
        currentWeather,
        forecast,
        location,
        loading,
        error,
        query,
        setCity,
        refresh: () => fetchWeather(query),
    };

    return (
        <WeatherContext.Provider value={contextData}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
