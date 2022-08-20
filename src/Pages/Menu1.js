import React from "react";
import { DataList } from "../Databases/DataList";
import MenuItem from "../Components/MenuItem";
import "../Styles/Menu.css";

function Menu1() {

  return (
    <div className="menu">
      <h1 className="menuTitle">Coffee</h1>
      <div className="DataList">
        {DataList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div> <Link to="/menu2">
            <button> Deserts</button>  
      </Link>
      <Link to="/menu">
            <button> Coffee</button>  
        </Link>
    </div>
  );
}

export default Menu1;