"use client";

import useWeather from "@/hooks/useWeather";

interface TemperatureProps {
    value: number;
    className?: string;
    showUnit?: boolean;
}

const Temperature = ({
    value,
    className = "",
    showUnit = true,
}: TemperatureProps) => {
    const { convertTemperature, temperatureUnit } = useWeather();

    const displayTemp = convertTemperature(value);
    const unit = temperatureUnit === "celsius" ? "°C" : "°F";

    return (
        <span className={className}>
            {displayTemp}
            {showUnit && unit}
        </span>
    );
};

export default Temperature;
