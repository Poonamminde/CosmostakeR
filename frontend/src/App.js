import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import Register from './components/Register';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Register/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/users" element={<UserList/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
