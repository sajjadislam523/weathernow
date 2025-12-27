"use client";

import HourlyCard from "@/components/HourlyCard";
import ToogleTemperature from "@/components/ToogleTemperature";
import useWeather from "@/hooks/useWeather";

export default function Home() {
    const { currentWeather, forecast } = useWeather();
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "long" });
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const combinedDateTime = `${day} ${month} ${year} | ${hours}:${minutes}`;

    const nowEpoch = Math.floor(Date.now() / 1000);

    const next10Hours = forecast?.forecastday[0].hour
        .filter((hour) => hour.time_epoch >= nowEpoch)
        .slice(0, 10);

    return (
        <div className="flex flex-col justify-between h-full bg-black/40 md:p-12 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-white">{combinedDateTime}</h1>
                <div>
                    <ToogleTemperature />
                </div>
            </div>

            <div className="space-y-8">
                <p className="text-6xl font-bold uppercase text-white">
                    {currentWeather?.condition.text}
                </p>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide text-white">
                    {next10Hours?.map((hour) => (
                        <HourlyCard key={hour.time} hour={hour} />
                    ))}
                </div>
            </div>
        </div>
    );
}
