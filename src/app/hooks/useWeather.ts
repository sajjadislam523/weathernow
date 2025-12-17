import { WeatherContext } from "@/app/provider/weatherProvider";
import { useContext } from "react";

export default function useWeather() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeather must be used inside WeatherProvider");
    }

    return context;
}
