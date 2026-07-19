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
<img width="1200" height="628" alt="Purple Phone Mockup Fashion Store Promotion Facebook Ad-2" src="https://github.com/user-attachments/assets/d1b7cd48-cdda-4a81-9051-ccc8297cc044" />
<img width="950" height="636" alt="Screenshot 2025-08-31 at 8 14 16" src="https://github.com/user-attachments/assets/d81f0a00-29c5-4595-a6af-4f3ac8446312" />

### Get Started
<img width="414" height="896" alt="IMG_3866" src="https://github.com/user-attachments/assets/485099a0-814b-4e96-88c2-04265c7feaae" />

### Campus Map
<img width="414" height="896" alt="IMG_3865" src="https://github.com/user-attachments/assets/d310ce13-3bf9-4263-a684-3a9ce3204ab5" />

### Facility List
<img width="414" height="896" alt="IMG_3864" src="https://github.com/user-attachments/assets/591c7094-a9d3-4d52-a22a-9b153a037b77" />

### Facility Detail
<img width="414" height="896" alt="IMG_3863" src="https://github.com/user-attachments/assets/5974a862-3f15-4cc0-b88b-617e7d2cc3fa" />

### Settings
<img width="414" height="896" alt="IMG_3867" src="https://github.com/user-attachments/assets/70e05b44-2a15-4361-a542-8b94b2f62c62" />

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
