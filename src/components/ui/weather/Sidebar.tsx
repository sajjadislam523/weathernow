"use client";

import CitySearch from "@/components/CitySearch";
import Temperature from "@/components/Temperature";
import useWeather from "@/hooks/useWeather";
import { motion } from "framer-motion";
import { FiCompass, FiDroplet, FiEye, FiWind } from "react-icons/fi";

const Sidebar = () => {
    const { currentWeather, forecast, location, loading, setCity, error } =
        useWeather();

    return (
        <aside className="h-full w-full flex flex-col gap-6 bg-black/30 backdrop-blur-lg border-r border-white/10 p-5 text-white">
            <CitySearch onSearch={setCity} />

            {!loading && currentWeather && (
                <motion.img
                    src={currentWeather.condition.icon}
                    alt="weather"
                    className="w-20 mx-auto"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                />
            )}

            <div className="text-center">
                <h2 className="text-xl font-semibold">{location?.name}</h2>
                <p className="text-sm opacity-70">{location?.country}</p>
            </div>

            <div className="text-center">
                {loading ? (
                    <p className="animate-pulse">Loading...</p>
                ) : (
                    currentWeather && (
                        <div className="text-6xl font-bold">
                            <Temperature value={currentWeather?.temp_c} />
                        </div>
                    )
                )}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                <Stat
                    icon={<FiDroplet />}
                    label="Humidity"
                    value={`${currentWeather?.humidity}%`}
                />

                <Stat
                    icon={<FiWind />}
                    label="Wind"
                    value={`${currentWeather?.wind_kph} km/h`}
                />

                <Stat
                    icon={<FiEye />}
                    label="Visibility"
                    value={`${currentWeather?.vis_km} km`}
                />

                <Stat
                    icon={<FiCompass />}
                    label="Direction"
                    value={currentWeather?.wind_dir}
                />
            </div>

            {error && (
                <p className="text-red-400 text-xs mt-auto">
                    Failed to load weather data.
                </p>
            )}
        </aside>
    );
};

export default Sidebar;

function Stat({ icon, label, value }: any) {
    return (
        <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
            <div className="text-lg text-blue-300">{icon}</div>
            <div>
                <p className="text-xs opacity-70">{label}</p>
                <p className="font-semibold">{value}</p>
            </div>
        </div>
    );
}
