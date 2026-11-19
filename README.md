# Fitness Tracker

Personal diet and fitness tracker. Runs on your phone from the home screen.

**App:** https://andrew-ahern.github.io/fitness-tracker/

## Updating the app

1. Change the files and commit them to `main`. GitHub Pages publishes the site in 1–2 minutes.
2. In `sw.js`, increase `CACHE_NAME` by one (e.g. `ft-v297` → `ft-v298`). If you don't, phones keep the old version.
3. Open the app twice on your phone.

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

## Your data

Entries are stored only on the phone. To back them up, use Export or GitHub sync in Settings.
