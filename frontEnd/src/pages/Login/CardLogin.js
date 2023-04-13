
import { useState } from 'react'
import './CardLogin.css'
export default function CardLogin({eventonclick}){
    const LOG_IN = {h3:"Login Here" , button:"Log In" , changePage:"Sign Up" , statusReq:"login" }
    const SIGN_UP = {h3:"Sign Up" , button:"Sign Up" , changePage:"Log In" , statusReq:"sign" }

    const [userInput , setUserInput] = useState({username:null,password:null})
    const [statusPage , updateStatusPage] = useState(LOG_IN)

    function changePage(changePage){
        if(changePage === "Sign Up"){
            updateStatusPage(SIGN_UP)
        }
        else{
            updateStatusPage(LOG_IN)
        }
    }

    return(
        
        <div className='cardLogin'>
            <h3>{statusPage.h3}</h3>

            <label >Username</label>
            <input type="text" placeholder="Username" required onChange={(event)=>setUserInput({...userInput , username:event.target.value})}/>
            <label >Password</label>
            <input type="password" name="password" placeholder="Password" required onChange={(event)=>setUserInput({...userInput , password:event.target.value})}/>
            <button type="submit" onClick={()=> eventonclick(userInput ,statusPage.statusReq)}>{statusPage.button}</button>
            <div className="social">
                <div  onClick={()=>changePage(statusPage.changePage)}>{statusPage.changePage}</div>
                <a href='https://www.linkedin.com/in/or-hadad-a86648247/'><div className="fb"><i className="fab fa-facebook"></i> Linkedin</div></a>
            </div>
        </div>
        
    )
}