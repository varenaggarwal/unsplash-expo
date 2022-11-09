import logo from './logo.svg';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar'
import Home from './components/home'
import './App.css';

function App() {
  // const [value,setValue] = useState("")
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar/>}/>
          {/* <Route exact path="/" element={<><Navbar/><Home/></>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
