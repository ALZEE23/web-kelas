import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ProjectPage1 from './pages/ProjectPage1'

// Header dan Footer
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/project' Component={ProjectPage} />
        <Route path='/project1' Component={ProjectPage1}/>
      </Routes>
      
      <FooterComponent />
    </div>
  )
}

export default App