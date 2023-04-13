
import Snackbar from '@mui/material/Snackbar';
import './Snackbar.css'
import { Alert } from '@mui/material';
import { useEffect } from 'react';

export default function SimpleSnackbar({typeMassage , massage , toOpen ,closeAlert}) {

  useEffect(()=>{
    setTimeout(()=>{closeAlert()},4000)
    
  })

  return (
<Snackbar open={toOpen} >
  <Alert onClose={()=>closeAlert()} severity={typeMassage} sx={{ width: '100%' }}>
    {massage}
  </Alert>
</Snackbar>
  );
}
