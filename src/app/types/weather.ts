export interface WeatherResponse {
    alerts: Alerts;
    current: Current;
    forecast: Forecast;
    location: Location;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    uv: number;
    vis_km: number;
    gust_kph: number;
    air_quality: AirQuality;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface AirQuality {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    "us-epa-index": number;
    "gb-defra-index": number;
}

export interface Forecast {
    forecastday: ForecastDay[];
}

export interface ForecastDay {
    date: string;
    day: Day;
    hour: Hour[];
}

export interface Day {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    avghumidity: number;
    condition: Condition;
    uv: number;
    air_quality: AirQuality;
}

export interface Hour {
    time: string;
    temp_c: number;
    is_day: number;
    condition: Condition;
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
    chance_of_rain: number;
    air_quality: AirQuality;
}

export interface Alerts {
    alert: [];
}
