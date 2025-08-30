"use client"

import useFetchWeatherData from "@/hooks/useFetchWeather"; 

interface WeatherWidgetProps {
  city?: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ city = "India" }) => {
  const { data, isLoading, error } = useFetchWeatherData(city);

  return (
    <div className="p-4 bg-white rounded border-2 border-gray-300">
      {isLoading && <h1>Loading...</h1>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && data && (
        <div>
          <h2 className="text-xl font-semibold">{`Weather in ${city}`}</h2>
          <div className="mt-2">
            <p className="text-lg">{`Temperature: ${data.temperature}°C`}</p>
            <p>{`Wind Speed: ${data.windspeed} km/h`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
