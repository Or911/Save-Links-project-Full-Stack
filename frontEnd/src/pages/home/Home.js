import { useEffect, useState } from "react";
import CardCategory from "./CardCategory/CardCategory";
import "./Home.css";
import $ from "jquery";
export default function Home({ PORT_SERVER , allowAlert}) {
  const [lists, setLists] = useState([]);

  function getList() {
    $.ajax({
      url: PORT_SERVER + "list",
      method: "GET",
      dataType: "json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      success: (data) => {
        if(data.list){
            setLists(data.list);
        }
      },
    });
  }

  useEffect(() => {
    getList();
  }, []);

  function deleteLink(id){
    $.ajax({
        url: PORT_SERVER + "list" +`?deleteList=${id}`,
        method: "DELETE",
        dataType: "json",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        success: (data) => {
          allowAlert({typeMassage:"info" ,massage:"The list has been successfully deleted" , toOpen:true})
          getList();
        },
      });
  }
  return (
    <div className="homePage">
      {lists.map((category) => (
        <CardCategory category={category} key={category._id} onClickEvent={deleteLink}/>
      ))}
    </div>
  );
}
