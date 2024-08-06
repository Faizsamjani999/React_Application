import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signup from './Pages/Signup';
import Table from './Pages/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/showData' element={<Table/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
