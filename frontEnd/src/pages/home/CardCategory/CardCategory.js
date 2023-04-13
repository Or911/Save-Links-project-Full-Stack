import "./CardCategory.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "./Link/Link";
export default function CardCategory({ category , onClickEvent}) {
  return (
    <div className="cards-category">
      <h3>Category: {category._id} </h3>
      <DeleteIcon className="deleteBT" />
      <div className="links-Section">
        {category.lists.map((link) => (
          <Link link={link} key={link._id} onClickEvent={onClickEvent}/>
        ))}
      </div>
    </div>
  );
}
