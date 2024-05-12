import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./_root/pages";
import { SigninForm, SignupForm } from "./_auth/forms";

import "./globals.css";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <section className="flex h-screen">
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
      </section>
    </BrowserRouter>
  </React.StrictMode>
);
