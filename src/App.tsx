import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/Home/Home';
import { Setting } from './Pages/Setting/Setting';
import { ProjectGalleryPage } from './Pages/Projects/projectgallery';
import { ContactPage } from './Pages/Contact/Contact';
import { AboutPage } from './Pages/about/about';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectGalleryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="setting" element={<Setting />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </>
  );
}

export default App;
