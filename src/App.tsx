import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Contenedores
import Home from './containers/Home';
import Login from './containers/auth/Login';
import MisMascotas from './containers/pages/MisMascotas';
import About from './containers/About';
import Error from './containers/errors/Error404';
import Donate from './containers/pages/Donate';
import Diagnosticos from './containers/pages/Diagnosticos';
import PetsToAdoption from './containers/pages/PageAdoptPets';


//Admin Componentes
import MascotaAdmin from './containers/admin/MascotaAdmin';
import ClienteAdmin from './containers/admin/ClienteAdmin';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />        
          
          <Route path="/mis_mascotas" element={<MisMascotas/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/diagnosticos/:petId" element={<Diagnosticos />} />
          <Route path="/adopt-pet" element={ <PetsToAdoption />} />
          {/* Admin Routes */}
          <Route path="admin"  >
              <Route path="mascota" element={<MascotaAdmin/>} />
              <Route path="usuarios" element={<ClienteAdmin/>} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
