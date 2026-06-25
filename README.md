# Weather App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Overview

The Weather App is a React-based web application that provides real-time weather information for cities worldwide. The application retrieves weather data from a public weather API and displays current weather conditions through a simple, responsive, and user-friendly interface.

Users can search for a city to view information such as temperature, weather conditions, humidity, wind speed, atmospheric pressure, and the "feels like" temperature. The application communicates with the weather service using REST APIs and presents the retrieved data in an organized format.

The project demonstrates frontend development using React, API integration, asynchronous data fetching, state management with React Hooks, and responsive web design.

## Features

- Search weather information by city name
- Display current temperature
- Show weather conditions with icons
- Display "feels like" temperature
- View humidity levels
- Display wind speed
- Show atmospheric pressure
- Display minimum and maximum temperatures
- Responsive user interface for desktop and mobile devices
- Real-time weather updates using REST APIs
- Loading indicator during API requests
- Error handling for invalid city names and network failures

## Technology Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend library |
| JavaScript (ES6+) | Application logic |
| HTML5 | Page structure |
| CSS3 | User interface styling |
| REST API | Weather data retrieval |
| Fetch API / Axios | HTTP requests |
| OpenWeather API | Weather information source |
| Node.js | Development environment |
| npm | Package management |

## Project Structure

```text
weather-app/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── package.json
├── package-lock.json
├── README.md
├── USER_GUIDE.md
├── TECHNICAL_OVERVIEW.md
├── INSTALLATION_GUIDE.md
└── TROUBLESHOOTING.md
```
