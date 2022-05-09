import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/Index";
import Home from "./components/Index";
import Study from "./components/Study";
import About from "./components/About";
import Work from "./components/Work";
import HowWeWork from "./components/HowWeWork";
import Careers from "./components/Careers";
import XaAcademy from "./components/XaAcademy";
import Job from "./components/Job";
import Maintenance from './components/Maintenance';
function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
        <NavBar />
       <Routes>
         {/* <Route exact path="/" element={<Maintenance/>}/> */}
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/study" element={<Study/>}/>
         <Route exact path="/work" element={<Work/>}/>
         <Route exact path="/howwework" element={<HowWeWork/>}/>
         <Route exact path="/careers" element={<Careers/>}/>
         <Route exact path="/academy" element={<XaAcademy/>}/>
         <Route exact path="/job" element={<Job/>}/>
       </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
