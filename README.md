# Fitness Tracker

Personal diet and fitness tracker. Works on phone and desktop.

**App:** https://andrew-ahern.github.io/fitness-tracker/

## Updating the app

1. Change the files and commit them to `main`. GitHub Pages publishes the site in 1–2 minutes.
2. In `sw.js`, increase `CACHE_NAME` by one (e.g. `ft-v297` → `ft-v298`). If you don't, devices keep the old version.
3. Open the app twice.

## Files

| File | Contents |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Offline cache |
| `library_meals.json` | Meal items |
| `library_exercises.json` | Gym exercises |
| `library_cardio.json` | Cardio activities |
| `library_config.json` | Meal group order |
| `vendor/` | Chart.js and JSZip, stored locally so they work offline |

## Installation

The app is a PWA (Progressive Web App). You install it from the browser, and it then opens like a normal app and works offline.

- **iPhone:** open the app link in Safari → Share → Add to Home Screen.
- **Desktop (Chrome or Edge):** open the app link → click the install icon in the address bar.
- **Desktop (Safari on a Mac):** open the app link → File → Add to Dock.

## Data

Entries are stored in the browser on each device. Devices don't share data except through GitHub sync.

**Settings → GitHub sync**
- **Load config:** your data is kept in a separate **private** GitHub repo, not this one. The config is a `.txt` file in this format:
  ```
  repo: owner/data-repo
  token: github_pat_...
  ```
  To get a token: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token. Choose **Only select repositories** → your data repo. Under Permissions, set **Contents** to **Read and write**. Copy the token, which GitHub shows only once, and paste it into the config `.txt` file (which is saved somewhere on your device). When it expires, make a new one and update the `.txt` file.

  The config is saved in the browser, so load it once on each device. Never commit the `.txt` file to a repo.
- **Export to GitHub:** adds new entries to `fitness-tracker-backup.json` and saves settings as `settings.json`.
- **Import from GitHub:** adds entries from the repo that aren't on this device, and overwrites settings.

Sync only adds entries. Once an entry has been exported or imported, it can't be edited or deleted in the app, and entries already in the data repo can't be changed from the app.

**Settings → Backup on device**
- **Export:** downloads a `.zip` containing a full backup (`.json`) and CSV files.
- **Import:** loads a `.zip` or `.json` backup. It adds entries and overwrites settings.

**New device:** install the app → Load config → Import from GitHub.

## Meal item fields

```json
{
  "name": "Isey skyr (450g)",
  "calories": 243,
  "protein": 40.5,
  "group": "Yoghurt",
  "active": true,
  "comment": "Not shown in the app",
  "displayed_comment": "Shown when you pick the item"
}
```

`name`, `calories`, `protein` and `group` are required. A new `group` also needs adding to `library_config.json` to set where it appears. Set `"active": false` to hide an item.
