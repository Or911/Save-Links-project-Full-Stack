import { Button } from '@mui/material';
export default function ButtonLog({icon , txt , onclick}){

    return(
<Button className='buttonBar' variant="contained"  onClick={()=>onclick()}>
{"log in"}
</Button>
    )
}