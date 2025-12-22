import { Hour } from "@/app/types/weather";

const HourlyCard = ({ hour }: { hour: Hour }) => {
    return (
        <div className="flex flex-col items-center gap-1 rounded-md p-2 bg-white/10 text-center">
            <p className="text-sm opacity-70">{hour.time.split(" ")[1]}</p>

            <img
                src={hour.condition.icon}
                alt={hour.condition.text}
                className="w-8"
            />
            <p className="font-semibold">{hour.temp_c}°</p>
        </div>
    );
};

export default HourlyCard;
