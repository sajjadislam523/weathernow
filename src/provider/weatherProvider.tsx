"use client";

import { getWeatherData } from "@/lib/data";
import { Current, Forecast, Location } from "@/types/weather";
import { createContext, useEffect, useState } from "react";

type TemperatureUnit = "celsius" | "fahrenheit";

interface WeatherContextType {
    currentWeather: Current | null;
    forecast: Forecast | null;
    location: Location | null;
    loading: boolean;
    error: string | null;
    query: string;
    setCity: (q: string) => void;
    refresh: () => void;
    toggleTemperatureUnit: () => void;
    temperatureUnit: TemperatureUnit;
    convertTemperature: (temp: number) => number;
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentWeather, setCurrentWeather] = useState<Current | null>(null);
    const [forecast, setForecast] = useState<Forecast | null>(null);
    const [location, setLocation] = useState<Location | null>(null);
    const [temperatureUnit, setTemperatureUnit] =
        useState<TemperatureUnit>("celsius");

    const fetchWeather = async (q: string) => {
        try {
            setLoading(true);
            setError(null);
            const data = await getWeatherData(q);
            setCurrentWeather(data.current);
            setForecast(data.forecast);
            setLocation(data.location);
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

    // Load temperature preference from localStorage
    useEffect(() => {
        const savedUnit = localStorage.getItem(
            "temperatureUnit"
        ) as TemperatureUnit;
        if (savedUnit) {
            setTemperatureUnit(savedUnit);
        }
    }, []);

    const toggleTemperatureUnit = () => {
        setTemperatureUnit((prev) => {
            const newUnit = prev === "celsius" ? "fahrenheit" : "celsius";
            localStorage.setItem("temperatureUnit", newUnit);
            return newUnit;
        });
    };

    const convertTemperature = (celsius: number): number => {
        if (temperatureUnit === "fahrenheit") {
            return Math.round((celsius * 9) / 5 + 32);
        }
        return Math.round(celsius);
    };

    const setCity = (city: string) => {
        setQuery(city);
        fetchWeather(city);
    };

    const contextData = {
        currentWeather,
        forecast,
        location,
        loading,
        error,
        query,
        setCity,
        refresh: () => fetchWeather(query),
        temperatureUnit,
        toggleTemperatureUnit,
        convertTemperature,
    };

    return (
        <WeatherContext.Provider value={contextData}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
