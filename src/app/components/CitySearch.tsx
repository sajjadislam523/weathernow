import useCitySearch from "@/app/hooks/useCitySearch";
import { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

export default function CitySearch({ onSearch }: Props) {
    const [query, setQuery] = useState("");

    const { cities, loading } = useCitySearch(query);

    return (
        <div className="relative z-50">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
                className="w-full p-2 rounded bg-white/10 text-white outline-none"
                placeholder="Search city..."
            />

            {loading && (
                <div className="absolute top-full mt-1 text-xs text-white/60">
                    Searching...
                </div>
            )}

            {cities.length > 0 && (
                <div className="absolute top-full mt-2 bg-black/80 backdrop-blur rounded w-full max-h-48 overflow-auto shadow-md">
                    {cities.map((c: any) => (
                        <div
                            key={`${c.lat}-${c.lon}`}
                            onClick={() => {
                                onSearch(c.name);
                                setQuery("");
                            }}
                            className="px-3 py-2 hover:bg-white/10 cursor-pointer"
                        >
                            {c.name}, {c.region ? `${c.region}, ` : ""}
                            {c.country}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
