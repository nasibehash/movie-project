import { Route, Routes } from "react-router";

import RootLayout from "./layouts/root/root.layout.tsx";

import HomePage from "./pages/home/home.page.tsx";
import MoviePage from "./pages/movie/movie.page.tsx";
import NotFoundPage from "./pages/not-found/not-found.page.tsx";
import SignUpPage from "./pages/auth/sign-up/sign-up-page.tsx";
import Toaster from "./components/toaster/toaster.tsx";

import QueryProvider from "./providers/query.provider.tsx";

import "./App.css";
import SignInPage from "./pages/auth/sign-in/sign-in.page.tsx";
import UserOnlyGuard from "./guards/user-only.guard.tsx";
import GuestOnlyGuard from "./guards/guest-only.guard.tsx";
import DashboardLayout from "./layouts/dashboard/dashboard.layout.tsx";
import ProfilePage from "./pages/dashboard/profile/profile.page.tsx";
import SelectionPage from './pages/dashboard/selection/selection.page.tsx';
import CreatePage from './pages/dashboard/selection/create/create.page.tsx';
import DetailPage from './pages/dashboard/selection/detail/detail.page.tsx';
import EditPage from './pages/dashboard/selection/edit/edit.page.tsx';

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route element={<GuestOnlyGuard />}>
            <Route path="auth/sign-up" element={<SignUpPage />} />
            <Route path="auth/sign-in" element={<SignInPage />} />
          </Route>
          <Route element={<UserOnlyGuard />}>
            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={<ProfilePage />} />
              <Route path="dashboard/selection" element={<SelectionPage />} />
              <Route
                path="dashboard/selection/create"
                element={<CreatePage />}
              />
              <Route path="dashboard/selection/:id" element={<DetailPage />} />
              <Route
                path="dashboard/selection/:id/edit"
                element={<EditPage />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </QueryProvider>
  );
}

export default App;
