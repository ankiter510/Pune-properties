import Features from "./components/pages/features";
import Sales from "./components/pages/onsale";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import './index.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import TopLocations from './components/pages/TopLocations.jsx'
import ProjectTypes from './components/pages/ProjectTypes.jsx';
import Topcontent from './components/pages/topcontent.jsx'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BlogandNews from './components/pages/BlogandNews.jsx';
import PaymentGateway from "./components/pages/PaymentGateway.jsx";
import PropertyDetails from "./components/pages/PropertyDetails.jsx";
import ChatBot from "./components/pages/ChatBot.jsx";



function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Routes>
        <Route path="/" element={<Topcontent />} />
        </Routes>

        <Routes>
        <Route path="/" element={<TopLocations />} />
        </Routes>

        <Routes>
        <Route path="/" element={<ProjectTypes />} />
        </Routes>

        <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/payment" element={<PaymentGateway />} />
        </Routes>

        <Routes>
        <Route path="/" element={<Sales />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        </Routes>

        <Routes>
        <Route path="/" element={<Service />} />
        </Routes>

        <Routes>
        <Route path="/" element={<About />} />
        </Routes>

        <Routes>
        <Route path="/" element={<BlogandNews />} />
        </Routes>

        <Routes>
        <Route path="/" element={<Client />} />
        </Routes>

        <Routes>
        <Route path='/chatbot' element={<ChatBot/>}/>
        </Routes>


        <Footer />
        
      </Router>
    </div>
  );
}

export default App;