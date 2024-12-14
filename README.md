# Vue 3 RSVP Management Form

## Project Overview

This is a modern Vue 3 user management application featuring:
- Local storage persistence
- State management with Pinia
- Tailwind CSS styling
- Comprehensive unit testing

## Prerequisites

- Node.js (v16+ recommended)
- npm (v8+)

## Technology Stack

- Vue 3
- Vite
- Pinia (State Management)
- Tailwind CSS
- Vitest (Unit Testing)
- Local Storage API

## Project Setup

### 1. Install Dependencies
```bash
npm install
```

## Available Scripts

### Development Server
```bash
npm run dev
```
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build for Production
```bash
npm run build
```
Builds the app for production in the `dist` folder.

### Run Tests
```bash
npm run test
```
Launches the test runner in interactive watch mode.

## Project Structure
```
user-form-project/
│
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   │   └── UserForm.vue # Main form component
|   |   └── UserForm.spec.ts # Component tests
│   ├── store/          # Pinia store
│   │   └── userStore.ts # User data store
│   ├── App.vue          # Main application component
│   └── main.ts          # Application entry point
│
└── tests/               # Unit tests
    └── UserForm.spec.ts # Component tests
```

## Key Features

- ✅ Responsive form design
- ✅ Local storage data persistence
- ✅ State management with Pinia
- ✅ Tailwind CSS styling
- ✅ Comprehensive unit testing

## Configuration

### Tailwind CSS
Tailwind is configured in `tailwind.config.js`. Customize theme, colors, and plugins as needed.

### Pinia Store
The user store in `userStore.ts` manages:
- Adding new users
- Removing users
- Persisting data to local storage

## Testing

Tests are written using Vitest and Vue Test Utils. Current test coverage includes:
- Form rendering
- User addition
- User removal

## Troubleshooting

- Ensure you have the latest version of Node.js
- Clear npm cache if experiencing dependency issues
- Run `npm install` to reinstall dependencies

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Coriano Harris - corianoharrispro@gmail.com

