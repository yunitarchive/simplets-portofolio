import {
  Route,
  Routes
} from "react-router-dom";
import ContactUs from "./pages/ContactUs.tsx";
import LandingPage from "./pages/LandingPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
