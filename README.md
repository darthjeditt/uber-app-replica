# Uber App Replica

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Your machine must have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI by running `npm install -g expo-cli`.
- **Google Cloud Account**: You must have a Google Cloud account with billing enabled to access the required APIs.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/darthjeditt/uber-app-replica.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd uber-app-replica
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

## Google Cloud API Setup

This project requires the following Google Cloud APIs:

- Places API
- Distance Matrix API
- Directions API

Follow these steps to enable the APIs:

1. **Go to [Google Cloud Platform Console](https://console.cloud.google.com/)**.
2. **Create a new project or select an existing one**.
3. **Navigate to "APIs & Services" > "Dashboard"**.
4. **Click on "+ ENABLE APIS AND SERVICES"**.
5. **Search and enable the following APIs**:
   - Places API
   - Distance Matrix API
   - Directions API
6. **Create credentials and copy the API key**.

> **Note**: You must have a billing account associated with your Google Cloud account for these APIs to work.

## Running the App

1. **Create a `.env` file in the root directory and add your Google Maps API key**:

   ```env
   GOOGLE_MAPS_APIKEY=your_google_maps_api_key
   ```

2. **Start the development server**:

   ```bash
   expo start
   ```

3. **Open the app on an Android or iOS phone/emulator**.

## File Structure

Here's a brief overview of the main files and folders:

- `Map.js`: Contains the map component.
- `NavFavourites.js`: Handles navigation favorites.
- `NavigateCard.js`: Navigation card component.
- `NavOptions.js`: Navigation options component.
- `RideOptionsCard.js`: Ride options card component.
- `HomeScreen.js`: Home screen component.
- `MapScreen.js`: Map screen component.
- `NavSlice.js`: Redux slice for navigation.
- `App.js`: Main entry point of the app.

## Summary

The "Uber App Replica" is a mobile application built using React Native and Expo, designed to emulate the core functionalities of the Uber app. It allows users to select a starting point (origin) and a destination, and then provides directions and estimated travel time between the two points. The app integrates with Google Maps and requires specific Google Cloud APIs to function correctly. This README provides a step-by-step guide on setting up the project and its dependencies.