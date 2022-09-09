import './App.css';
import Dashboard from './components/Dashboard';
import People from "./components/People"
import Planets from "./components/Planets"

import {Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className={'container bg-dark mt-4'}>

        <div className="row"><Dashboard /></div>
      {/*  dashboard will display menu on all pages */}

      <Routes>
          <Route path="/people/:peoples_id" element={<People />} />
          <Route path="/planets/:planets_id" element={<Planets />} />

      </Routes>
    </div>
  );
}

export default App;
