import { useNavigate} from 'react-router-dom';
import CardLogin from './CardLogin'
import './Login.css'
import $ from 'jquery'

export default function Login({PORT_SERVER , eventonclick , allowAlert}){
    const navigate = useNavigate();

    function logInOrSign(userInput , statusReq){

        if( statusReq === 'login'){
            $.ajax({
                url: PORT_SERVER + 'login',
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(userInput),
            })
            .then(token => {
                localStorage.setItem("token" ,token.token )
                eventonclick(userInput.username)
                allowAlert({typeMassage:"success" ,massage:`hi ${userInput.username}`  , toOpen:true})
                navigate('/home');
            }).catch(()=>{
                allowAlert({typeMassage:"error" ,massage:`Username or password is incorrect`  , toOpen:true})
            })
        }
        else {
            $.ajax({
                url: PORT_SERVER + "sign",
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(userInput),
            })
            .then(res => {
                console.log(res)
                allowAlert({typeMassage:"success" ,massage:res.success  , toOpen:true})
            })

        }
    }

    return(
        <div className='loginPage'>
            <CardLogin eventonclick={logInOrSign}/>
        </div>
    )
}