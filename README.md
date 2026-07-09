# PawsNest – Pet Adoption Platform

## Project Description

PawsNest is a full-stack pet adoption platform where users can browse available pets, view pet details, submit adoption requests, and manage their own adoption activities. Pet owners can add, update, and delete pet listings, as well as approve or reject adoption requests.

The platform includes secure authentication, Google login, protected dashboard routes, search, filtering, sorting, and a responsive modern user interface.

---

## Live Project Link

- **Live Website: https://pawnest-client.vercel.app/
- **Live Server/API: https://pawnest-server.onrender.com

---



## Technologies Used

### Frontend

- Next.js
- React.js
- Tailwind CSS
- Axios
- TanStack Query
- React Hook Form
- React Hot Toast
- Framer Motion
- Lucide React
- Google OAuth

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- HTTPOnly Cookie
- bcryptjs
- CORS
- dotenv
- Google Auth Library

---

## Core Features

- Users can browse all available pets.
- Users can search pets by name.
- Users can filter pets by species.
- Users can sort pets by newest or adoption fee.
- Users can view detailed information about each pet.
- Users can register and login using email and password.
- Users can login with Google.
- JWT authentication is stored securely in HTTPOnly cookies.
- Protected dashboard for authenticated users.
- Users can add new pet adoption listings.
- Pet owners can update or delete their own pet listings.
- Users can submit adoption requests.
- Users can track and cancel their own adoption requests.
- Pet owners can view adoption requests for their listed pets.
- Pet owners can approve or reject adoption requests.
- When a request is approved, the pet status changes to adopted.
- Other pending requests for the same pet are automatically rejected.
- Dark and light theme toggle.
- Responsive design for mobile, tablet, and desktop.

---

## Dependencies Used

### Client Dependencies

```json
{
  "@react-oauth/google": "latest",
  "@tanstack/react-query": "latest",
  "axios": "latest",
  "framer-motion": "latest",
  "lucide-react": "latest",
  "next": "latest",
  "react": "latest",
  "react-dom": "latest",
  "react-hook-form": "latest",
  "react-hot-toast": "latest"
}
```

### Server Dependencies

```json
{
  "bcryptjs": "latest",
  "cookie-parser": "latest",
  "cors": "latest",
  "dotenv": "latest",
  "express": "latest",
  "google-auth-library": "latest",
  "jsonwebtoken": "latest",
  "mongodb": "latest"
}
```

---

## How to Run the Project Locally

### 1. Clone the Project

```bash
git clone your-repository-link
cd pawsnest-pet-adoption-next-full
```

---

### 2. Setup the Server

Go to the server folder:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder and add the following environment variables:

```env
PORT=5000
MONGODB_URI=mongodb+srv://new_user_09:2buSG4CKOfLf2BAx@cluster0.sqawyxx.mongodb.net/?appName=Cluster0
JWT_SECRET=1bfd210dfd9153deb9b11906eff3d76ff2a2420749b6b0404a42f4d26b904c97
CLIENT_URL=http://localhost:3000
GOOGLE_CLIENT_ID=632523746196-ne5jk2n63daisod217nc4etqblidkr5r.apps.googleusercontent.com
NODE_ENV=development
```

Run the server:

```bash
npm run dev
```

The server will run at:

```bash
http://localhost:5000
```

---

### 3. Setup the Client

Open another terminal and go to the client folder:

```bash
cd client
npm install
```

Create a `.env.local` file inside the `client` folder and add the following environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

Run the client:

```bash
npm run dev
```

The client will run at:

```bash
http://localhost:3000
```

---

## Relevant Resources

- **Client Repository:** Add your client GitHub repository link here
- **Server Repository:** Add your server GitHub repository link here
- **Live Website:** Add your Vercel live website link here
- **Live Server/API:** Add your Render server link here

---

## Author

**Manjurul Islam**  
Frontend Web Developer
