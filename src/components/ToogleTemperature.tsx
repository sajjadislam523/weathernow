import useWeather from "@/hooks/useWeather";

const ToogleTemperature = () => {
    const { temperatureUnit, toggleTemperatureUnit } = useWeather();

    return (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <button
                onClick={toggleTemperatureUnit}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    temperatureUnit === "celsius"
                        ? "bg-white text-black"
                        : "text-white/70 hover:text-white"
                }`}
            >
                °C
            </button>
            <button
                onClick={toggleTemperatureUnit}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    temperatureUnit === "fahrenheit"
                        ? "bg-white text-black"
                        : "text-white/70 hover:text-white"
                }`}
            >
                °F
            </button>
        </div>
    );
};

export default ToogleTemperature;
