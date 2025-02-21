import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Research from "./components/Research";
// import BlogsPage from './components/blogs/BlogsPage';
// import BlogPost from './components/blogs/BlogPost';
// import Gallery from "./components/Gallery";
// import Random from "./components/Random";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/research" element={<Research />} />
          {/* <Route path="/blog" element={<BlogsPage />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* <Route path="/random" element={<Random />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
