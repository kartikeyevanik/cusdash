import NewsWidget from "@/components/widgets/news";
import WeatherWidget from "@/components/widgets/weather";

export default function Page() {
    return (
        <div className="p-4">
            <h1 className="font-bold text-[1.5rem]">Your Dashboard</h1>
            <p>Welcome back, here's your personalized view</p>
            <WeatherWidget />
            <NewsWidget />
        </div>
    )
}