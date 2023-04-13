import './Create.css'
import { useState } from "react"
import $ from 'jquery'

export default function Create ({PORT_SERVER , allowAlert}) {
    const [dataInput , setDataInput] = useState({name:null , url:null,category:null})


    function sendToServer(dataInput){
        $.ajax({
            url: PORT_SERVER + 'list',
            method: "POST",
            dataType: "json",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              data: dataInput,
              success: (res) => {
                console.log(res)
              }
        })
    }

    return(
        <div className='cardCreate'>
        <h3>Create a new link</h3>

        <label >Name</label>
        <input type="text" placeholder="Name" required onChange={(event)=>setDataInput({...dataInput , name:event.target.value})}/>
        <label >Link</label>
        <input type="text" placeholder="Link" required onChange={(event)=>setDataInput({...dataInput , url:event.target.value})}/>
        <label >Category</label>
        <input type="text" placeholder="Category" required onChange={(event)=>setDataInput({...dataInput , category:event.target.value})}/>
        
        <button type="submit" onClick={()=> sendToServer(dataInput)}>create +</button>
    </div>
    )
}