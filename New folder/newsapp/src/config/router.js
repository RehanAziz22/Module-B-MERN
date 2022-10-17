import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "../components/appbar";
import Politics from "../screens/politics";
import Blog from "../screens/blog";
import News from "../screens/news";
import Sports from "../screens/sports";
import NotFound from "../screens/notfound";
import CardData from "../screens/cardData";

export default function AppRouter() {
  return (
    <Router>
        {/* <div>
            <Link to='/'>Home</Link>
            <Link to='politics'>politics</Link>
            <Link to='contact'>Contact</Link>
        </div> */}
        <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="blog" element={<Blog />} />
        <Route path="sports" element={<Sports />} />
        <Route path="politics" element={<Politics />} />
        <Route path="cardData" element={<CardData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}