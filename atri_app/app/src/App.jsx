import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Places from "./pages/Places.jsx";
import Videos from "./pages/Videos.jsx";
import Traveltellers from "./pages/Traveltellers.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/Privacy-policy.jsx";
import Terms from "./pages/Terms.jsx";
import Shop from "./pages/Shop.jsx";
import Temp from "./pages/Temp.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/blog" element={<Blog />} />
<Route path="/places" element={<Places />} />
<Route path="/videos" element={<Videos />} />
<Route path="/traveltellers" element={<Traveltellers />} />
<Route path="/contact" element={<Contact />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/shop" element={<Shop />} />
<Route path="/temp" element={<Temp />} />
    </Routes>
  );
}
