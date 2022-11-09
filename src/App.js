// Components
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Haiku from "./components/Haiku";
import FavoriteBook from "./components/FavoriteBook";
import Footer from "./components/Footer";
import PersonalBio from "./components/PersonalBio";
import PersonalInterest from "./components/PersonalInterest";
import Schedule from "./components/Schedule";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React from "react";

import { Routes, Route } from "react-router-dom";

import "./index.css";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/haiku" element={<Haiku />} />
        <Route path="/favorite-book" element={<FavoriteBook />} />
        <Route path="/Personal-Interest" element={<PersonalInterest />} />
        <Route path="/personal-bio" element={<PersonalBio />} />
        {/* <Route path="/schedule" element={<Schedule />} /> */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
