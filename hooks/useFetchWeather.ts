"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherData } from "@/types/hooks";
import { URLS } from "@/constants/urls";

export default function useFetchWeatherData(city: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          URLS.WEATHERURL
        );
        setData(response.data.current_weather);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { data, isLoading, error };
}
