import { Routes, Route } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";
import AuthProvider from "./context/AuthContext";
import QueryProvider from "./lib/react-query/QueryProvider";
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  LikedPosts,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";
import { SigninForm, SignupForm } from "./_auth/forms";

const App = () => {
  return (
    <QueryProvider>
      <AuthProvider>
        <main className="flex h-screen">
          <Routes>
            {/* PUBLIC */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-up" element={<SignupForm />} />
              <Route path="/sign-in" element={<SigninForm />} />
            </Route>

            {/* PRIVATE */}
            <Route element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/liked" element={<LikedPosts />} />
              <Route path="/all-users" element={<AllUsers />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/update-post/:id" element={<EditPost />} />
              <Route path="/post/:id" element={<PostDetails />} />
              <Route path="/profile/:id/*" element={<Profile />} />
              <Route path="/update-profile/:id" element={<UpdateProfile />} />
            </Route>
          </Routes>

          <Toaster />
        </main>
      </AuthProvider>
    </QueryProvider>
  );
};

export default App;
