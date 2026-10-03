# Push_Doc_Deployment_v01_20260930
1. Backend: set env vars from backend/.env.example on the host (Render, Railway, VPS). `npm start`.
2. Frontend: set `VITE_API_URL` to the backend URL, run `npm run build`, deploy `dist/` (Vercel, Netlify, Cloudflare).
3. Set `CLIENT_ORIGIN` on the backend to the live frontend URL (CORS).
4. Point DNS, enable SSL, add GA4 and Search Console.
