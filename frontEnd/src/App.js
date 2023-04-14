import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

  function toggleLoginStatus(name) {
    if (name !== undefined) {
      updateUser({ ...user, userConnected: name });
    } else {
      updateUser({...user ,userConnected:""})
    }
  }
  function displayAlertToTheUser(data){
    setAlert(data)
  }
  function closeAlert(data){
    setAlert({...data , toOpen:false})
  }

  return (
    <Router>
      <div className="background"></div>
      <NavBar user={user.userConnected} eventonclick={toggleLoginStatus}/>
      <Routes>
        <Route path="/" element={<Login eventonclick={toggleLoginStatus}  PORT_SERVER={PORT_SERVER} displayAlertToTheUser={displayAlertToTheUser}/>} />
        <Route path="/home" element={<Home PORT_SERVER={PORT_SERVER} displayAlertToTheUser={displayAlertToTheUser}/>} />
        <Route path="/create" element={<Create PORT_SERVER={PORT_SERVER} displayAlertToTheUser={displayAlertToTheUser}/>} />
      </Routes>
      <SimpleSnackbar typeMassage={alert.typeMassage}  massage={alert.massage} toOpen={alert.toOpen} closeAlert={closeAlert}/>
    </Router>
  );
}

export default App;
