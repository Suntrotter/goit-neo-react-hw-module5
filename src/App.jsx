import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Container from "./components/Container/Container.jsx";

const HomePage = lazy(() => import("./components/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage.jsx")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews.jsx"));
const NotFoundPage = lazy(() =>
  import("./components/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;