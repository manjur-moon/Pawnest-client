# PawsNest Client

## Project Name
PawsNest – Pet Adoption Platform

## Purpose
PawsNest is a full-stack pet adoption platform where users can browse pets, view pet details, submit adoption requests, manage their own requests, and allow pet owners to manage pet listings and adoption approvals.

## Live Website
Client Live URL: `https://your-client-vercel-url.vercel.app`

## Server API
Server Live URL: `https://your-server-render-url.onrender.com`

## Key Features
- Browse all available pets with search, species filter, and sorting.
- View full pet details with adoption request form.
- Custom JWT authentication with HTTPOnly cookie.
- Email/password registration and login.
- Google login integration.
- Add, update, and delete pet listings.
- Owner-only dashboard for managing listings.
- Adoption request approval/rejection system.
- My Requests page for tracking submitted adoption requests.
- Dark/light theme toggle.
- Framer Motion animations.
- Fully responsive design for mobile, tablet, and desktop.

## Main Routes
- `/` – Home page
- `/all-pets` – Browse all pets
- `/login` – User login
- `/register` – User registration
- `/pets/[id]` – Private pet details and adoption form
- `/dashboard` – Private dashboard
- `/dashboard/add-pet` – Add new pet
- `/dashboard/my-listings` – Owner listings
- `/dashboard/my-requests` – User adoption requests
- `/dashboard/update-pet/[id]` – Update pet listing

## NPM Packages Used
- next
- react
- react-dom
- axios
- react-hot-toast
- react-hook-form
- @tanstack/react-query
- @react-oauth/google
- framer-motion
- lucide-react
- tailwindcss

## Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

For production:

```env
NEXT_PUBLIC_API_URL=https://your-server-render-url.onrender.com
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

## Local Run Instructions

```bash
npm install
npm run dev
```

The client will run at `http://localhost:3000`.

## Build Command

```bash
npm run build
```

## Deployment Notes
- Deploy the client on Vercel.
- Add production environment variables in Vercel dashboard.
- Set `NEXT_PUBLIC_API_URL` to the deployed server URL.
- Make sure server `CLIENT_URL` matches the deployed client URL.
- Private routes are protected using client-side auth state restored from `/api/auth/me`.
- Logged-in users should not redirect to login on private route reload.
