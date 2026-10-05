# LendLedger

Track money lent or borrowed, with day-by-day interest and partial repayments. One HTML file, no server, works offline.

## Use it

Open `index.html` in any browser (desktop or phone). Data is saved in that browser's `localStorage`.
Use **Data → Export backup** to save a `.json` file and **Import backup** to load it on another device.

## Features

- Lent / Borrowed views with summary cards: principal, interest accrued, amount received, outstanding
- Interest types: Monthly %, Fixed % (one-time), Zero interest
- "Calculated as of" date to see what is owed on any return date
- Payments: Auto (interest first), Interest only, Principal only, Discount / waive
- Give more money on an existing loan (top-up)
- Per-loan ledger, interest-pending tracker, settlement calculator
- Export / import JSON, export CSV, light and dark mode

## Interest rules

- **Monthly %**: `interest = principal x (rate / 100 / 30) x days`, charged on the principal still owed
- **Fixed %**: `interest = principal x rate / 100`, added once
- Interest stops on the day the balance reaches zero

## Develop

Edit `src/index.src.html`, then:

```
npm install
npm run build
```

This compiles Tailwind and writes the self-contained `index.html`.

## Privacy

The app ships with made-up sample data. Do not commit your exported backups; `.gitignore` excludes them.
