"use client";
import { getWeatherData } from "@/app/lib/data";
import { WeatherResponse } from "@/app/types/weather";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import wind from "../../../public/Windblow.json";

import useTheme from "@/app/hooks/useTheme";
import CitySearch from "./CitySearch";
import HourlyTimeline from "./HourlyForecast";
import PermissionModal from "./PermissionModal";
import WeatherSkeleton from "./WeatherSkeleton";
import WeeklyTimeline from "./WeeklyForecast";

function getWeatherAnimation(condition: string, isDay: number) {
    const text = condition.toLowerCase();

    if (text.includes("rain"))
        return isDay ? "/weather/rain-day.json" : "/weather/rain-night.json";
    if (text.includes("cloud"))
        return isDay
            ? "/weather/cloudy-day.json"
            : "/weather/cloudy-night.json";
    if (text.includes("clear"))
        return isDay ? "/weather/sunny.json" : "/weather/clear-night.json";
    if (text.includes("storm")) return "/weather/storm.json";
    if (text.includes("fog") || text.includes("mist"))
        return "/weather/fog.json";
    if (text.includes("snow")) return "/weather/snow.json";
    if (text.includes("overcast")) return "/weather/overcast.json";

    return "/weather/default.json";
}

function getAqiColor(index: number) {
    if (index <= 1) return "bg-green-500";
    if (index === 2) return "bg-yellow-400";
    if (index === 3) return "bg-orange-500";
    return "bg-red-600";
}

function getUserLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
        });
    });
}

const CurrentWeather = () => {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);
    const [animationData, setAnimationData] = useState<any>(null);
    const [askPermission, setAskPermission] = useState(true);
    const [loading, setLoading] = useState(true);

    const currentWeather = weather?.current;

    console.log(weather);

    useTheme();

    // ✅ Fetch weather (used by geo + search)
    async function getWeather(query: string) {
        try {
            setLoading(true);

            const data = await getWeatherData(query);
            setWeather(data);

            const animationPath = getWeatherAnimation(
                data.current.condition.text,
                data.current.is_day
            );

            const animation = await fetch(animationPath).then((res) =>
                res.json()
            );
            setAnimationData(animation);
        } catch (error) {
            console.error("Weather fetch error:", error);
        } finally {
            setLoading(false);
        }
    }

    // ✅ Attempts location-based weather
    async function detectLocation() {
        try {
            const pos = await getUserLocation();
            const query = `${pos.coords.latitude},${pos.coords.longitude}`;
            await getWeather(query);
        } catch {
            console.log("Location denied, falling back to Dhaka");
            await getWeather("Dhaka");
        }
    }

    // ✅ Initial Load
    useEffect(() => {
        detectLocation();
    }, []);

    // ✅ LOADING SCREEN
    if (loading) return <WeatherSkeleton />;

    // ✅ SAFETY CHECK
    if (!currentWeather || !animationData) return null;

    const theme =
        currentWeather.is_day === 1
            ? "from-sky-300 via-blue-400 to-blue-600"
            : "from-slate-900 via-indigo-900 to-black";

    const AQI = currentWeather.air_quality["us-epa-index"];

    return (
        <>
            {/* ✅ PERMISSION MODAL */}
            {askPermission && (
                <PermissionModal
                    onAllow={() => {
                        setAskPermission(false);
                        detectLocation();
                    }}
                    onDeny={() => {
                        setAskPermission(false);
                        getWeather("Dhaka");
                    }}
                />
            )}

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`bg-linear-to-br ${theme} p-6 rounded-2xl shadow-xl relative overflow-hidden`}
            >
                {/* ✅ SEARCH */}
                <CitySearch onSearch={getWeather} />

                {/* Glass Effect */}
                {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0" /> */}

                {/* ✅ AQI Badge */}
                <div
                    className={`absolute top-3 right-3 px-3 py-1 text-xs rounded-full text-black ${getAqiColor(
                        AQI
                    )}`}
                >
                    AQI {AQI}
                </div>

                {/* ✅ Weather Animation */}
                <div className="h-[200px] relative z-10">
                    <Lottie
                        animationData={animationData}
                        className="h-full"
                        loop
                    />
                </div>

                {/* ✅ LOCATION */}
                <h2 className="text-white font-semibold text-center relative z-10">
                    {weather.location.name}, {weather.location.country}
                </h2>

                {/* ✅ TEMP */}
                <motion.h1
                    className="text-white text-5xl font-bold text-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {currentWeather.temp_c}°C
                </motion.h1>

                {/* ✅ CONDITION */}
                <p className="text-center text-white/80 relative z-10">
                    {currentWeather.condition.text}
                </p>

                {/* ✅ STATS */}
                <div className="grid grid-cols-2 gap-4 mt-6 text-white text-sm relative z-10">
                    <div>
                        <p className="opacity-70">Feels Like</p>
                        <p>{currentWeather.feelslike_c}°C</p>
                    </div>

                    <div>
                        <p className="opacity-70">Humidity</p>
                        <p>{currentWeather.humidity}%</p>
                    </div>

                    <div>
                        <p className="opacity-70">Wind</p>
                        <div className="flex items-center gap-2">
                            <motion.div
                                className="w-5"
                                animate={{ rotate: currentWeather.wind_degree }}
                                transition={{ type: "spring", stiffness: 30 }}
                            >
                                <Lottie
                                    animationData={wind}
                                    className="h-full"
                                />
                            </motion.div>
                            {currentWeather.wind_kph} km/h
                        </div>
                    </div>

                    <div>
                        <p className="opacity-70">Visibility</p>
                        <p>{currentWeather.vis_km} km</p>
                    </div>
                </div>

                {/* ✅ FORECASTS */}

                <HourlyTimeline
                    data={weather.forecast.forecastday[0].hour}
                    className="z-10"
                />
                <WeeklyTimeline
                    days={weather.forecast.forecastday}
                    className="z-10"
                />
            </motion.div>
        </>
    );
};

export default CurrentWeather;
