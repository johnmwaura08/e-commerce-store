import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import styles from "./NavBar.module.css";
import wavylogo from "../../assets/img/wavylogo.svg";
import cart from "../../assets/img/cart.svg";
export default class Navbar extends Component {
  render() {
    return (
   
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
        
              src={wavylogo}
              alt="logo"
            />
          </Link>

          <h4 className={styles.logoz}>Wavy Kits</h4>
        </div>
        <nav>
          <ul className={styles.navLinks}>
            <Link to="/products" style={{ textDecoration: 'none' }}>

            <li className={styles.navLink} >Products</li>
            </Link>
            <li className={styles.navLink}>Register</li>
            <li className={styles.navLink}>Contact </li>
          </ul>
        </nav>
        <Link to="./cart">
          <div className={styles.cart}>
            <img src={cart} alt="cart" />
          </div>
        </Link>
      </div>
    );
  }
}

