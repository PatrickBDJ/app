import './App.css';
import Frontpage from './components/Frontpage';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

// CSS
import './components/css/frontpage.css';
import './components/css/navbar.css';



function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Frontpage />
      break
    case "/page1":
      component = <Page1 />
      break
    case "/page2":
      component = <Page2 />
      break
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>{component}</div>
      {/* <Frontpage /> */}

    </div>
  );
}

export default App;
