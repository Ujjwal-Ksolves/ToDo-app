import Home from './pages/Home.js';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './pages/AddEdit.js';

function App() {
  return (
<Router>
    <div className="App">
      <ToastContainer position= "top-center"   />
	<Routes>
	   <Route path="/" element={<Home/>} />
	   <Route path="/addTask" element={<AddEdit/>} />
	</Routes>
    </div>
</Router>
  );
}

export default App;
