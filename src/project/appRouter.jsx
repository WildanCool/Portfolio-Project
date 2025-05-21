import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import AchievementSection from "./achievement";
import ScrollToTop from "./scrollTop";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievement" element={<AchievementSection />} />
      </Routes>
    </BrowserRouter>
  );
}
