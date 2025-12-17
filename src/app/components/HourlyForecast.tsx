type HourlyForecastProps = {
    data: any[];
    className?: string;
};

export default function HourlyForecast({
    data,
    className,
}: HourlyForecastProps) {
    return (
        <div className={`flex gap-4 overflow-x-auto mt-4 ${className}`}>
            {data.map((hour, idx) => (
                <div
                    key={idx}
                    className="bg-white/10 p-3 rounded-lg min-w-20 text-center"
                >
                    <p className="text-sm">{hour.time.split(" ")[1]}</p>
                    <img src={hour.condition.icon} className="mx-auto" />
                    <p>{hour.temp_c}°</p>
                </div>
            ))}
        </div>
    );
}
