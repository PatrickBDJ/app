import './App.css'
import Frontpage from './components/Frontpage'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import {Route, Routes} from "react-router-dom"

// CSS
import './components/css/frontpage.css'
import './components/css/navbar.css'
import './components/css/style.css'



function App() {


  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path ="/" element={<Frontpage />} />
          <Route path ="page1" element={<Page1 />} />
          <Route path ="page2" element={<Page2 />} />
        </Routes>
      </div>
      

    </div>
  );
}

export default App;
