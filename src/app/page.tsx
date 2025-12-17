"use client";

export default function Home() {
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "long" });
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const combinedDateTime = `${day} ${month} ${year} | ${hours}:${minutes}`;

    return (
        <div>
            <h1>{combinedDateTime}</h1>
        </div>
    );
}
