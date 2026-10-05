import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage/Home';
import { Setting } from './Pages/Setting/Setting';
import { ProjectGalleryPage } from './Pages/ProjectPage/projectgallery';
import { ContactPage } from './Pages/Contact/Contact';
import { StackPage } from './Pages/StackPage/Stack';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectGalleryPage />} />
        <Route path="stack" element={<StackPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="setting" element={<Setting />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </>
  );
};

export default App
