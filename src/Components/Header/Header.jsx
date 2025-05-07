import React, { Component } from "react";
import style from  './Header.module.css'
export default class Header extends Component {
  render() {
    return (
      <>
        {/* <!-- header start  --> */}
        <header className={style.title}>
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
      </>
    );
  }
}

