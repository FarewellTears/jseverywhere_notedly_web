// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "./home";
import MyNotes from "./mynotes";
import Favorites from "./favorites";
import NotePage from "./note";
import SignUp from "./signup";

const Pages = () => (
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  </Router>
);

export default Pages;
