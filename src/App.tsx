import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Contenedores
import Home from './containers/Home';
import Login from './containers/auth/Login';
import MisMascotas from './containers/pages/MisMascotas';
import Error from './containers/errors/Error404';
import Donate from './containers/pages/Donate';
import Diagnosticos from './containers/pages/Diagnosticos';
import PetsToAdoption from './containers/pages/PageAdoptPets';


//Admin Componentes
import MascotaAdmin from './containers/admin/MascotaAdmin';
import ClienteAdmin from './containers/admin/ClienteAdmin';
import DiagnosticAdmin from './containers/admin/DiagnosticAdmin';
import CallPetsAdopt from './containers/admin/AdminAdoptionPage';
import AllApplications from './containers/admin/AdminApplications';


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
          <Route path="/mascota-admin" element={<MascotaAdmin/>} />


          {/* Admin Routes */}
          <Route path="admin"  >
              <Route path="mascota" element={<MascotaAdmin/>} />
              <Route path="usuarios" element={<ClienteAdmin/>} />
              <Route path="diagnosticos" element={<DiagnosticAdmin/>} />
              <Route path="aplications" element={<AllApplications/>} />
              <Route path="adoptions" element={<CallPetsAdopt/>} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;


