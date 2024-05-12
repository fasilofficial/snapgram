import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./_root/pages";
import { SigninForm, SignupForm } from "./_auth/forms";

import "./globals.css";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";
import AuthProvider from "./context/AuthContext";
import QueryProvider from "./lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
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
              </Route>
            </Routes>

            <Toaster />
          </main>
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
