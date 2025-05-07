import React, { Component } from "react";
import style from "./FoodItem.module.css";


export default class FoodItem extends Component {
  render() {
    const { img, title, price, desc, category, link } = this.props;

  const shortDesc = desc.length > 200 ? desc.slice(0, 300) + "..." : desc;

    return (
      <>
        <div className={style["single-food"]}>
          <div className="img">
            <img src={img} alt={title} />
          </div>
          <div className={style["title-price"]}>
            <h3>{title}</h3>
            <p> {price} </p>
          </div>
          <div className={style["food-desc"]}>{shortDesc}</div>
          {link && (<p className= {style.link}> <strong>Link:</strong><a href= {link}>{link}</a></p>)}  
          {/* if link is truthy do  */}
          <h3 className={style.foodCatagory}>{category}</h3>
        </div>
      </>
    );
  }
}



