export type WeatherData = {
    interval: number,
    is_day: number,
    temperature: number,
    time: string,
    weathercode: number,
    winddirection: number,
    windspeed: number
}

export type NewsArticle = {
    source: { name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}