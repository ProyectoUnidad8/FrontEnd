import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Contenedores
import Home from './containers/Home';
import Login from './containers/auth/Login';
import MisMascotas from './containers/pages/MisMascotas';
import About from './containers/About';
import Error from './containers/errors/Error404';
import PetsToAdoption from './containers/pages/PageAdoptPets';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/mis_mascotas" element={<MisMascotas />}/>
        <Route path="/adopt-pet" element={ <PetsToAdoption />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
