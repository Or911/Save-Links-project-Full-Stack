import './Link.css'
import ClearIcon from '@mui/icons-material/Clear';
export default function Link({link , onClickEvent}){
    const GET_IMG_SITE = 'http://www.google.com/s2/favicons?domain='

    return (
        <div className='link-line-cover'>
            <div className='link-line'>
            <a href={link.url}>
            <img src={`${GET_IMG_SITE}${link.url}`} alt={link.name} />
            <h5> {link.name}</h5>
            <h5> {link.url}</h5></a>
            <ClearIcon className='deleteLink' onClick={()=>onClickEvent(link._id)}/>
            </div>
        </div>
    )   
}