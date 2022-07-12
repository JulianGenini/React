import React from "react";
import './NavBar.css'
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="menu">
      <h1 className="menu__titulo">Resto Reserva</h1>
      <ul className="menu__container">
        <a href="#"><li className="menu__container__botones">Entradas</li></a>
        <a href="#"><li className="menu__container__botones">Plato Principal</li></a>
        <a href="#"><li className="menu__container__botones">Postre</li></a>
        <a href="#"><li className="menu__container__botones">Bebidas</li></a>
        <a href="#"><li className="menu__container__botones">Mi orden</li></a>
        <CartWidget></CartWidget>
      </ul>
    </nav>

  )
}

export default NavBar
