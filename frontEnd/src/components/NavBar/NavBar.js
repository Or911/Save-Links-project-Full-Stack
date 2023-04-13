import './NavBar.css'
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ButtonLog from "../ButtonLog";
import { Button } from '@mui/material';


export default function NavBar({user , eventonclick}){
  if(user){

  }
    return(
      <div className="navBar">
        <Link to="/home"><Button className='buttonBar' variant="contained" ><HomeIcon/></Button></Link>
        <Link to="/create"><Button className='buttonBar' variant="contained" >Create</Button></Link>
        <div className="logoName"><h1>Save Links Web</h1></div>
           {user? <h3 className="userName"><span>hi </span>{user}</h3>: null}
            <Link to="/" className='buttonBar'><ButtonLog onclick={eventonclick}/></Link>
        
      </div>
    )
}