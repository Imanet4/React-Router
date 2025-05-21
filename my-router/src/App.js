import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';






function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
            <Route path='/home'element={<Home />} />
            <Route path='/about'element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            </Route>

        </Routes>
        

    </BrowserRouter>
  );
}

export default App;
