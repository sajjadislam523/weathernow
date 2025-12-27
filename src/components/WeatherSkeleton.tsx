export default function WeatherSkeleton() {
    return (
        <div className="animate-pulse p-6 bg-white/10 rounded-xl">
            <div className="h-10 bg-gray-400/30 rounded w-1/2 mb-4"></div>
            <div className="h-32 bg-gray-400/30 rounded mb-4"></div>
            <div className="h-6 bg-gray-400/30 rounded w-3/4"></div>
        </div>
    );
}
