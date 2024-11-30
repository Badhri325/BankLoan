
// import './App.css';
// import Pages from './pages';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import User from './pages/user';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      {/* <Pages/> */}

       <Routes>
        {/* <Route path="/" element={<Pages />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes> 
      
    </div>
  );
}

export default App;
