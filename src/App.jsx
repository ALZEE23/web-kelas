import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ProjectPage1 from './pages/ProjectPage1'

<<<<<<< HEAD
=======
 
>>>>>>> 2df9fb0 (Menambahkan Page Project berisi sertifikat murid)
// Header dan Footer
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
<<<<<<< HEAD
        <Route path='/project' Component={ProjectPage} />
        <Route path='/project1' Component={ProjectPage1}/>
=======
        
        <Route path='/project' Component={ProjectPage} />
        <Route path='project1' Component={ProjectPage1}/>
>>>>>>> 2df9fb0 (Menambahkan Page Project berisi sertifikat murid)
      </Routes>
      
      <FooterComponent />
    </div>
  )
}

export default App