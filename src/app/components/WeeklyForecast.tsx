type WeeklyForecastProps = {
    days: any[];
    className?: string;
};

export default function WeeklyForecast({
    days,
    className,
}: WeeklyForecastProps) {
    return (
        <div className={`mt-4 space-y-2 ${className}`}>
            {days.map((day, idx) => (
                <div
                    key={idx}
                    className="flex justify-between bg-white/10 p-3 rounded"
                >
                    <p>{day.date}</p>
                    <img src={day.day.condition.icon} />
                    <p>{day.day.avgtemp_c}°C</p>
                </div>
            ))}
        </div>
    );
}
