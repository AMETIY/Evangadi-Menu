import React, { Component } from 'react'
import menu from '../../CommonResource/data'
import FoodItem from '../Food Items/FoodItem'
import style from './Menu.module.css'
import MenuHeader from './MenuHeader'
import MenuFooter from './MenuFooter'

export default class Menu extends Component {
  render() {
    return (

<div className={style["foods-container"]}>
<MenuHeader />
{menu.map((menus)=>
  (
       <FoodItem key={menus.id} {...menus} />
    )
   
)}
<MenuFooter />
</div>
    
    )
  }
}
