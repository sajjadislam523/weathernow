# Weather Application 🌤️

A modern, fast, and user-friendly weather application designed to deliver accurate forecasts with a clean UI, elegant animations, and responsive design. This app focuses on simplicity, speed, and visual experience while offering meaningful weather insights for everyday use.

---

## 📌 Project Overview

**Purpose:**  
To provide real-time and forecasted weather information through a clean and interactive interface that is fast, responsive, and visually appealing.

**Target Audience:**

-   Daily commuters
-   Outdoor enthusiasts
-   Travelers
-   Anyone who wants a fast and elegant weather experience

**Core Value Proposition:**

-   Minimalist and distraction-free UI
-   Animated weather-based backgrounds
-   Hyper-local weather updates
-   Offline caching of the last viewed data
-   Cross-platform compatibility (Web & Mobile ready)

---

## 🚀 Features

### ✅ MVP Features

-   Current weather display
-   Hourly forecast (24 hours)
-   7-day forecast
-   Location search and save
-   Temperature unit switching (°C/°F)
-   Wind speed unit switching
-   Offline cached data
-   Basic push notifications
-   PWA support

### 🔜 Advanced Features

-   Real-time alerts
-   Radar maps
-   Severe weather notifications
-   Interactive weather charts
-   Animation settings
-   Widget support

---

## 🛠️ Technology Stack

### Frontend

-   Next.js (TypeScript)
-   Tailwind CSS
-   Framer Motion (animations)

### Backend

-   Node.js / FastAPI
-   Redis (cache)
-   MongoDB / PostgreSQL

### APIs

-   OpenWeatherMap
-   AccuWeather / Weatherbit
-   Mapbox / Google Maps (geocoding)

---

## 📐 UI & Experience Philosophy

-   Minimal layout with bold typography
-   Dynamic background based on weather & time
-   Micro-animations to enhance user feedback
-   Accessibility first design
-   Dark mode support
-   Mobile-first layout

---

## 🏃 Development Workflow (Agile)

1. Planning & Requirement Analysis
2. UI & UX Design
3. Sprint-based Development
4. Testing & QA
5. Optimization
6. Production Release

---

## 📁 Project Structure

/src
/components
/pages
/utils
/hooks
/public
/assets
/docs

---

## ♿ Accessibility

-   Dynamic text scaling
-   High contrast colors
-   Keyboard navigation
-   Screen reader support
-   Reduced motion preference

---

## 📃 License

This project is open-source and free to use for learning and development purposes.

---

## ✨ Author

Built and maintained by Sajjadul Islam.

## Wireframe

┌────────────────────────────────────┐
│ 📍 Location Name ⚙️ 🔍 │
├────────────────────────────────────┤
│ |
│ 26°C |
│ ☀ Sunny |
│ Feels Like 28°C |
│ |
│ Humidity Wind Pressure |
│ 66% 12 km/h 1014hPa |
│ |
├────────────────────────────────────┤
│ Hourly Forecast → |
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ |
│ │ 1PM│ │ 2PM│ │ 3PM│ │ 4PM│ |
│ │ ☀ │ │ ☁ │ │ 🌧 │ │ 🌧 │ |
│ │ 26 │ │ 25 │ │ 24 │ │ 24 │ |
│ └────┘ └────┘ └────┘ └────┘ |
├────────────────────────────────────┤
│ 7-Day Forecast ↓ |
│ Mon ☀ 27° / 20° |
│ Tue 🌧 25° / 19° |
│ Wed ☁ 24° / 18° |
└────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 🔍 Search city or place │
├─────────────────────────────────────┤
│ 📍 Use Current Location │
│ │
│ Recent Searches │
│ --------------------------------- │
│ • Dhaka │
│ • Chittagong │
│ • New York │
│ │
│ Suggestions │
│ --------------------------------- │
│ • London │
│ • Tokyo │
│ • Paris │
└─────────────────────────────────────┘

┌───────────────────────────────────┐
│ ← Tuesday Forecast │
├───────────────────────────────────┤
│ 🌧 Rainy │
│ Max 26° / Min 18° │
│ │
│ Sunrise: 5:45 AM │
│ Sunset: 6:37 PM │
│ Wind: 10 km/h │
│ Humidity: 70% │
│ UV Index: High │
│ │
│ ─── Precipitation chart here ─── │
│ ─── Temperature graph here ─── │
└───────────────────────────────────┘

┌────────────────────────────┐
│ ⚙️ Settings │
├────────────────────────────┤
│ Temperature Unit │
│ (o) Celsius ( ) Fahrenheit │
│ │
│ Wind Speed │
│ (o) km/h ( ) mph │
│ │
│ Notifications │
│ [x] Rain Alert │
│ [ ] Storm Alert │
│ │
│ Accessibility │
│ [ ] Reduce Motion │
│ [x] High Contrast Mode │
└────────────────────────────┘

┌────────────────────────────┐
│ 📍 Saved Locations |
├────────────────────────────┤
│ ★ Dhaka │
│ Chittagong │
│ Cox's Bazar │
│ │
│ [+] Add Location │
└────────────────────────────┘

## 📁 Folder structure

/src
├── app/
│ ├── layout.tsx
│ ├── page.tsx # Home
│ ├── forecast/
│ │ └── page.tsx
│ ├── location/
│ │ └── page.tsx
│ ├── settings/
│ │ └── page.tsx
│
├── components/
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ └── Toggle.tsx
│ │
│ ├── weather/
│ │ ├── CurrentWeather.tsx
│ │ ├── HourlyForecast.tsx
│ │ ├── WeeklyForecast.tsx
│ │
│ ├── animations/
│ │ ├── RainAnimation.tsx
│ │ ├── SnowAnimation.tsx
│ │ └── SunAnimation.tsx
│
│ ├── layout/
│ │ ├── Header.tsx
│ │ └── Navigation.tsx
│
├── hooks/
│ ├── useWeather.ts
│ └── useLocation.ts
│
├── services/
│ ├── api.ts
│ └── weather.service.ts
│
├── styles/
│ └── globals.css
│
├── data/
│ └── locations.ts
│
├── utils/
│ └── formatters.ts
│
/public
├── icons/
├── images/
├── lottie/
/docs
