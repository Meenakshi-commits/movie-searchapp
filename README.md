# 🎬 Movie Search App

A simple ReactJS application that allows users to search for movies using the OMDB API, view movie details, and navigate through pages using pagination.

## 🚀 Features
- 🔍 **Search Movies**: Users can search for movies by title.
- 📄 **Movie Details Page**: View detailed information about each movie.
- 📌 **Pagination**: Navigate through search results with next/previous buttons.
- 🎭 **Filter by Type**: Filter movies by type (e.g., movie, series, episode).
- ❤️ **Favorites List**: Save movies to a favorites list (optional enhancement).
- 🌍 **Responsive Design**: Fully optimized for mobile and desktop devices.
- 🛠️ **Error Handling**: Displays user-friendly error messages when needed.

## 🛠️ Technologies Used
- ⚛️ **ReactJS** (with Vite for fast development)
- 🔄 **React Router** (for navigation)
- 🎨 **Tailwind CSS** (for styling)
- 🔗 **OMDB API** (for fetching movie data)
- 🔄 **Axios** (for API requests)
- 📦 **React Icons** (for UI icons)

## 📦 Project Structure
src/
  ├── components/
  │   ├── MovieCard.jsx        # Component for displaying individual movie cards
  ├── pages/
  │   ├── HomePage.jsx         # Home page with search, pagination, and results
  │   ├── MovieDetailsPage.jsx # Detailed movie page
  ├── services/
  │   ├── omdbApi.js           # API service functions
  ├── App.jsx                  # Main app component
  ├── main.jsx                 # Entry point
  ├── index.css                # Tailwind setup
