import {
  Route,
  Routes
} from "react-router-dom";
import ContactUs from "./pages/ContactUs.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import MessagesList from "./pages/MessagesList.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/messages-list" element={<MessagesList />} />
    </Routes>
  );
}

export default App;
