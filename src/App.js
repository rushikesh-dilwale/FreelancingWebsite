import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import ServicesPage from './Components/ServicePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ContactPage from './Components/ContactPage';
// import DevelopmentITPage from './Components/Dev'
import DevelopmentITPage from './Components/Crads'
import JavaDevelopersPage from './Components/Jpage';
import PHPDevelopersPage from './Components/PHPpage';
import AboutPage from './Components/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Services" element={<ServicesPage/>}/>
        <Route exact path="/About" element={<AboutPage/>}/>
        <Route exact path="/contact"  element={<ContactPage/>}/>
        <Route exact path="/Services/development-it"  element={<DevelopmentITPage/>}/>
        <Route exact path="/Services/development-it/PHPDevelopersPage"  element={<PHPDevelopersPage/>}/>
        <Route exact path="services/development-it/JavaDevelopersPage"  element={<JavaDevelopersPage/>}/>
        {/* <Route exact path="/services/Development & IT"  element={<DevelopmentITPage/>}/>
        */}
      </Routes>
    </BrowserRouter>
       
      
    </>
  );
}

export default App;
