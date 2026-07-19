# CrowdView

A mobile app that lets students check real-time crowd levels at campus facilities — dining halls, libraries, gyms, and more — before heading over.

**Timeline:** June 2025 – July 2025
**Status:** Front-end complete; back-end (including database) in progress

## Motivation

At many universities, a large share of students live on campus and rely daily on shared facilities like dining halls, libraries, and gyms. Without visibility into current crowd levels, students often face long wait times or arrive only to find a facility too full to use comfortably.

CrowdView was built to solve this problem: giving students an at-a-glance view of facility crowd levels so they can make better decisions about when and where to go, ultimately creating a more comfortable campus experience. The project began as a collaboration with a designer-focused friend, with the goal of building something genuinely useful for everyday student life.

## Role & Contributions

Worked as a full-stack engineer on the project, with primary focus on:

- **Front-end development** — Built the entire user-facing mobile app using React Native and TypeScript.
- **Interactive mapping** — Implemented a map-based UI with `react-native-maps` for browsing campus facilities.
- **Navigation** — Set up dynamic navigation from the map and facility list to individual facility detail screens.
- **State management** — Managed client-side state using React Hooks (`useState`, `useEffect`).
- **Research framing** — Formulated a hypothesis framework to evaluate how real-time crowd visibility could influence students' decision-making around campus facility usage.

Back-end and database work (to support real-time crowd data) was scoped but not completed within this project timeline.

## Features

- **Get Started** — Onboarding screen introducing the app.
- **Campus Map** — Interactive map showing campus facilities and their locations.
- **Facility List** — Browsable list of all campus facilities.
- **Facility Detail** — Individual screen per facility with detailed information (and, in the intended full version, real-time crowd status).
- **Settings** — User preferences and app configuration.

## App Screens

*(Screenshots captured via Expo Go)*

### Get Started
<!-- ![get_started](link-to-screenshot) -->

### Campus Map
<!-- ![campus_map](link-to-screenshot) -->

### Facility List
<!-- ![facility_list](link-to-screenshot) -->

### Facility Detail
<!-- ![facility_detail](link-to-screenshot) -->

### Settings
<!-- ![settings](link-to-screenshot) -->

## Technologies Used

- **Framework:** React Native
- **Language:** TypeScript
- **Mapping:** react-native-maps
- **State Management:** React Hooks (useState, useEffect)
- **Testing/Preview:** Expo Go

## Project Status & Next Steps

- ✅ Front-end UI and navigation complete
- ✅ Interactive campus map and facility screens implemented
- ⬜ Back-end API for real-time crowd data
- ⬜ Database design and integration
- ⬜ Live crowd-level data pipeline (e.g., sensor input, manual check-ins, or occupancy estimation)

## Getting Started (Development)

### Prerequisites

- Node.js
- Expo CLI / Expo Go app (for testing on a physical device or simulator)

### Setup

```bash
git clone https://github.com/kaito1105/crowdview.git
cd crowdview
npm install
npx expo start
```

Scan the QR code with Expo Go to preview the app on your device.

## License

This project was developed independently for educational and portfolio purposes.