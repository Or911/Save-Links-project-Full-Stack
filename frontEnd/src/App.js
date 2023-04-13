import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import SimpleSnackbar from "./components/Snackbar/Snackbar";

function App() {
  const PORT_SERVER = "http://localhost:4000/"
  const [alert, setAlert] = useState({typeMassage:"" ,massage:"" , toOpen:false});
  const [user, updateUser] = useState({
    userConnected: null,
  });

  function logInOrOut(name) {
    if (name !== undefined) {
      updateUser({ ...user, userConnected: name });
    } else {
      updateUser({...user ,userConnected:""})
    }
  }
  function allowAlert(data){
    setAlert(data)
  }
  function closeAlert(data){
    setAlert({...data , toOpen:false})
  }

  return (
    <Router>
      <Background />
      <NavBar user={user.userConnected} eventonclick={logInOrOut}/>
      <Routes>
        <Route path="/" element={<Login eventonclick={logInOrOut}  PORT_SERVER={PORT_SERVER} allowAlert={allowAlert}/>} />
        <Route path="/home" element={<Home PORT_SERVER={PORT_SERVER} allowAlert={allowAlert}/>} />
        <Route path="/create" element={<Create PORT_SERVER={PORT_SERVER} allowAlert={allowAlert}/>} />
      </Routes>
      <SimpleSnackbar typeMassage={alert.typeMassage}  massage={alert.massage} toOpen={alert.toOpen} closeAlert={closeAlert}/>
    </Router>
  );
}

export default App;
