import {Route, Routes} from "react-router-dom"
import Frontpage from './components/Frontppage'
import Navbar from './components/Navbar'
import Modeller from './components/Modeller'
import Metodeforretningsprocesser from './components/Metodeforretningsprocesser'
import Processer from './components/Processer'
import Dokumentationsreoler from './components/Dokumentationsreoler'
import Dokumentationdrift from './components/Dokumentationdrift'
import Dokumentationudvikling from './components/Dokumentationudvikling'
import Qlm from './components/Qlm'
import Forretningsgangehuset from './components/Forretningsgangehuset'
import Contact from "./components/Conttact"
import Footer from "./components/Footer"


// CSS
import './App.css'
import './components/css/frontpage.css'
import './components/css/navbar.css'
import './components/css/style.css'
import './components/css/responsive.css'
import './components/css/footer.css'
import './components/css/contact.css'
import './components/css/accordion.css'
import './components/css/barmenu.css'


function App() {


  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path ="/" element={<Frontpage />} />
          <Route path ="modeller" element={<Modeller />} />
          <Route path ="metodeforretningsprocesser" element={<Metodeforretningsprocesser />} />
          <Route path ="processer" element={<Processer />} />
          <Route path ="dokumentationsreoler" element={<Dokumentationsreoler />} />
          <Route path ="dokumentationdrift" element={<Dokumentationdrift />} />
          <Route path ="dokumentationudvikling" element={<Dokumentationudvikling />} />
          <Route path ="qlm" element={<Qlm />} />
          <Route path ="forretningsgangehuset" element={<Forretningsgangehuset />} />
          <Route path ="kontakt" element={<Contact />} />
        </Routes>
      </div>
      <div className="footer-app-div">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
