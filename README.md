# Fitness Tracker

A personal fitness and nutrition tracker -- a Progressive Web App (PWA) that runs in your browser and works offline.

## Features

- **Log entries** -- gym sessions, cardio, meals, body weight, rising time
- **Charts** -- activity, muscle volume by group, calories, protein, body weight, rising time
- **History** -- filter by entry type or by specific exercise
- **GitHub export/import** -- back up and transfer data across devices via a private GitHub repo
- **Device backup** -- export/import a local zip file
- **Works offline** -- all data stored locally, app available without internet

## Files

```
fitness-tracker/
|- index.html                -- the entire app (HTML + CSS + JavaScript)
|- manifest.json             -- PWA metadata (name, icons, display mode)
|- sw.js                     -- service worker (offline support, auto-updates)
|- icon-192.png              -- home screen icon (192x192)
|- icon-512.png              -- home screen icon (512x512)
|- library_exercises.json    -- default gym exercise library (loaded on fresh install)
|- library_cardio.json       -- default cardio activity library (loaded on fresh install)
|- library_meals.json        -- default meal item library (loaded on fresh install)
|- README.md                 -- this file
```

## Installation

**iPhone (Safari only -- Chrome does not support PWA installation on iOS):**
1. Go to `https://andrew-ahern.github.io/fitness-tracker` in Safari
2. Tap the Share button -> Add to Home Screen
3. The app appears on your home screen and works like a native app

**Mac (Safari or Chrome):**
- Safari: open the URL -> File -> Add to Dock
- Chrome: open the URL -> click the install icon in the address bar

## GitHub export/import setup

Keeps your data backed up and consistent across devices.

1. Create a private GitHub repository (e.g. `fitness-tracker-data`)
2. Generate a personal access token: GitHub -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens -> New token
   - Set repository access to your data repo only
   - Grant Contents read and write permission
3. Create a plain text file on your device called `github_config.txt` with the following content:
   ```
   repo: your-username/fitness-tracker-data
   token: github_pat_your_token_here
   ```
4. In the app: Settings -> GitHub export/import -> Load config -> select the file
5. Tap Export to push your data, Import to pull

## Data storage

- Data is saved to localStorage on your device (plain JSON)
- The GitHub data repo stores backups of logs, libraries, and settings
- Logs merge by ID (append-only); libraries merge by name (append-only); settings are last-write-wins
- Clearing app data (Settings -> Danger zone) wipes localStorage but not the GitHub backup

## Updating the app

Upload the changed files to this GitHub repo. The app auto-updates next time it is opened online.
