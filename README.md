# Paltu Paira — MERN + TypeScript + 3D Portfolio

Final portfolio architecture based on the supplied page screenshots, portfolio plan, and cinematic UI direction.

## Stack
- React + TypeScript + Vite
- Tailwind-style component architecture implemented with custom CSS for precise editorial layout
- Framer Motion for cinematic motion
- Three.js + React Three Fiber + Drei for the interactive 3D hero
- Node.js + Express + TypeScript API
- MongoDB + Mongoose
- Git/GitHub ready

## Run
### Client
```bash
cd client
npm install
npm run dev
```
Open http://localhost:5173

### Server
```bash
cd server
npm install
copy .env.example .env
npm run dev
```
Set `MONGODB_URI` in `.env` to enable persistent inquiry storage.

## Pages
Home · About · Projects · Services · Contact

## Design source
The UI uses the supplied portfolio page screenshots as style/content direction: warm off-white background, coral-red accents, editorial typography, rounded cards, dark footer/CTA blocks, horizontal card tracks, and structured engineering copy.

The supplied Paltu Paira portrait was used as the portfolio portrait asset.

## Deployment
- Client: Vercel or Netlify
- Server: Render/Railway/Fly.io or another Node-compatible host
- Database: MongoDB Atlas

For production, set the client's API base URL and server `CLIENT_URL`, then connect the server to MongoDB Atlas.
