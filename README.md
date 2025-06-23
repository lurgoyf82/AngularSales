# AngularSales

This project provides an Angular frontend that communicates with a backend endpoint to process shopping cart data. Items entered into the form are sent to the backend which returns the calculated totals.

## Running locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:4200` in your browser.

Make sure the backend endpoint defined in `src/app/cart.service.ts` is running so the frontend can receive responses.
