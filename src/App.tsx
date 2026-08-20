import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage/Home';
import { Setting } from './Pages/Setting/Setting';
import './App.css'

// const id = crypto.randomUUID();
// console.log(id);

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="setting" element={<Setting />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </>
  );
};

export default App
