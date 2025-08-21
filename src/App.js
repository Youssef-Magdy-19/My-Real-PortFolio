import './App.css';
import NavBar from './compontens/1-header/NavBar';
import Footer from './compontens/6-footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectsDetails from './Pages/ProjectDetails';
import ProjectsPage from './Pages/Projects';
import { LoadingProvider } from './context/LoadingContext';
import AboutMe from './Pages/About';


function App() {

  return (
    <>
    <LoadingProvider>
      <div className='row header-parent'>
        <NavBar />
      </div>
      <div className='containerr'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectsDetails />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
      </LoadingProvider>
    </>
  );
}

export default App;
