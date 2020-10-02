import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======

import styled from "styled-components";

>>>>>>> daa222968f69397cef10204608b2c8601f1dea72
import styles from "./NavBar.module.css";
import wavylogo from "../../assets/img/wavylogo.svg";
import cart from "../../assets/img/cart.svg";
export default class Navbar extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/landingpage">
            <img src={wavylogo} alt="logo" />
=======
   
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
        
              src={wavylogo}
              alt="logo"
            />
>>>>>>> daa222968f69397cef10204608b2c8601f1dea72
          </Link>

          <h4 className={styles.logoz}>Wavy Kits</h4>
        </div>
        <nav>
          <ul className={styles.navLinks}>
<<<<<<< HEAD
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className={styles.navLink}>Products</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className={styles.navLink}>Contact </li>
            </Link>
=======
            <Link to="/products" style={{ textDecoration: 'none' }}>

            <li className={styles.navLink} >Products</li>
            </Link>
            <li className={styles.navLink}>Register</li>
            <li className={styles.navLink}>Contact </li>
>>>>>>> daa222968f69397cef10204608b2c8601f1dea72
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
<<<<<<< HEAD
=======

>>>>>>> daa222968f69397cef10204608b2c8601f1dea72
