import { ReactNode } from "react"

export type WidgetContainerProps = {
    title: string,
    children: ReactNode
}

export type WeatherWidgetProps = {
    city: string
}

export type NewsWidgetProps = {
    country?: string; 
}