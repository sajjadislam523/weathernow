"use client";

import useWeather from "@/hooks/useWeather";
import { useEffect } from "react";

const BackgroundManager = () => {
    const { currentWeather } = useWeather();

    const getBackgroundClass = (conditionText: string): string => {
        const condition = conditionText.toLowerCase();

        if (condition.includes("rain")) {
            return "bg-[url(/weather/background/rain-bg.jpg)]";
        } else if (condition.includes("clear") || condition.includes("sunny")) {
            return "bg-[url(/weather/background/sunny-bg.jpg)]";
        } else if (
            condition.includes("cloud") ||
            condition.includes("overcast")
        ) {
            return "bg-[url(/weather/background/cloudy-bg.jpg)]";
        } else if (condition.includes("snow") || condition.includes("sleet")) {
            return "bg-[url(/weather/background/snow-day.jpg)]";
        } else if (
            condition.includes("thunder") ||
            condition.includes("storm")
        ) {
            return "bg-[url(/weather/background/thunder-bg.jpg)]";
        } else if (condition.includes("mist") || condition.includes("fog")) {
            return "bg-[url(/weather/background/fog-bg.jpg)]";
        }

        return "bg-[url(/weather/background/sunny-bg.jpg)]";
    };

    useEffect(() => {
        if (!currentWeather) return;

        const body = document.body;
        const newBackgroundClass = getBackgroundClass(
            currentWeather.condition.text
        );

        // List of all possible background classes
        const allBackgroundClasses = [
            "bg-[url(/weather/background/rain-bg.jpg)]",
            "bg-[url(/weather/background/sunny-bg.jpg)]",
            "bg-[url(/weather/background/cloudy-bg.jpg)]",
            "bg-[url(/weather/background/snow-bg.jpg)]",
            "bg-[url(/weather/background/thunder-bg.jpg)]",
            "bg-[url(/weather/background/fog-bg.jpg)]",
        ];

        // Remove all existing background classes
        allBackgroundClasses.forEach((className) => {
            body.classList.remove(className);
        });

        // Add new background class
        body.classList.add(
            newBackgroundClass,
            "bg-cover",
            "bg-no-repeat",
            "bg-center"
        );

        // Add smooth transition
        body.style.transition = "background-image 0.5s ease-in-out";
    }, [currentWeather]);

    return null;
};

export default BackgroundManager;
