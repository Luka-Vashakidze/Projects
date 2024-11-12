import { useContext } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SinglePost from "./components/SinglePost";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./components/context/auth";


function App() {

  const context=useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={context.auth?<Navigate to="/home" />:<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/home/post/:id' element={<SinglePost/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

