import "./CardCategory.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "./Link/Link";
export default function CardCategory({ category , onClickEvent, displayAlertToTheUser}) {
  return (
    <div className="cards-category">
      <h3>Category: {category._id} </h3>
      <div onClick={()=> displayAlertToTheUser({typeMassage:"info" ,massage:"This feature is not finished yet" , toOpen:true})}><DeleteIcon className="deleteBT"/></div>
      <div className="links-Section">
        {category.lists.map((link) => (
          <Link link={link} key={link._id} onClickEvent={onClickEvent}/>
        ))}
      </div>
    </div>
  );
}
