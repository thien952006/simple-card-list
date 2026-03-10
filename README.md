# SWE INTERVIEW TEST 
THIS IS TO TEST YOUR SKILLS TO MEET OUR APP DEVELOPMENT REQUIREMENTS

1. Clone this repo to your local machine.
2. Read `Assignment Requirements` carefully and follow it.
4. Please commit your entire code to `your own Github repository` 
5. On your repo, please add step-by-step instructions on how to launch (for both the Backend and Frontend) to the `README.md`
6. Share your repo link with us via email.

## Running the app locally

### Prerequisites
- Node.js + npm installed (Node 18+ recommended)

### Backend (Express API)
From the repo root:

```bash
cd StarterCode/backend
npm install
npm run dev
```

- API base URL: `http://localhost:5000`
- Products endpoint: `GET http://localhost:5000/api/products`
- Delete endpoint: `DELETE http://localhost:5000/api/products/:id`

To run without nodemon:

```bash
npm start
```

Optional: set a custom port by creating `StarterCode/backend/.env`:

```bash
PORT=5000
```

### Frontend (React)
In a separate terminal, from the repo root:

```bash
cd StarterCode/frontend
npm install
npm start
```

- App URL: `http://localhost:3000`
- The frontend proxies API requests to `http://localhost:5000` (see `StarterCode/frontend/package.json`).

HAPPY CODING! </br>
A Round Entertainment
