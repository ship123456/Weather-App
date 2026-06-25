# Weather App Installation Guide

## Table of Contents

- [Introduction](#introduction)
- [System Requirements](#system-requirements)
- [Prerequisites](#prerequisites)
- [Downloading the Project](#downloading-the-project)
- [Installing Dependencies](#installing-dependencies)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Verifying the Installation](#verifying-the-installation)
- [Common Installation Issues](#common-installation-issues)
- [Uninstalling the Application](#uninstalling-the-application)

## Introduction

This guide provides step-by-step instructions for installing and configuring the Weather App on a local system. It includes system requirements, project setup, dependency installation, environment configuration, and verification steps to ensure the application runs successfully.

## System Requirements

Before installing the Weather App, ensure your system meets the following requirements:

- Operating System: Windows, macOS, or Linux
- Node.js (version 18 or later)
- npm (Node Package Manager)
- A modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari)
- An active internet connection

## Prerequisites

Before proceeding with the installation, ensure that:

- Node.js is installed on your system.
- npm is available from the command line.
- You have a valid OpenWeather API key.
- Git is installed if you plan to clone the project repository.

## Downloading the Project

Clone the Weather App repository using Git.

### Clone the Repository

```bash
git clone https://github.com/yourusername/weather-app.git
```

### Navigate to the Project Directory

```bash
cd weather-app
```

## Installing Dependencies

Install all required project dependencies by running the following command:

```bash
npm install
```

This command installs all project dependencies defined in the `package.json` file.

## Environment Configuration

Create a `.env` file in the project root directory and add your OpenWeather API key.

```env
REACT_APP_WEATHER_API_KEY=your_api_key
```

Replace `your_api_key` with your valid OpenWeather API key before running the application.

> **Note:** Never commit your `.env` file or API keys to a public repository.

## Running the Application

Start the development server using the following command:

```bash
npm start
```

After the application starts successfully, open your web browser and navigate to:

```text
http://localhost:3000
```

If port 3000 is already in use, React may prompt you to run the application on a different available port.

## Verifying the Installation

The installation is successful if:

- The application loads without errors.
- The home page is displayed.
- You can search for a city.
- Current weather information is displayed successfully.
- No installation or runtime errors appear in the browser console.

## Common Installation Issues

| Issue | Possible Solution |
|--------|-------------------|
| `npm install` fails | Verify that Node.js and npm are installed correctly. |
| Missing API key | Confirm that the `.env` file contains a valid API key. |
| Application does not start | Verify that all project dependencies are installed. |
| Port 3000 is already in use | Close the application using port 3000 or start the app on a different port. |

## Uninstalling the Application

To remove the Weather App from your local system:

1. Stop the development server.
2. Delete the project directory.
3. Remove the `.env` file if it contains sensitive API keys.
4. Uninstall Node.js or project dependencies if they are no longer required.
