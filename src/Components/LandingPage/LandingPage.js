import React from 'react';
import psgkit from '../../assets/img/psgkit.png';
import arrowleft from '../../assets/img/arrowleft.svg';
import arrowright from '../../assets/img/arrowright.svg';
import dotfull from '../../assets/img/dotfull.svg';
import dot from'../../assets/img/dot.svg';
import atletico from '../../assets/img/atletico.png';
import styles from './LandingPage.module.css';
import bigeclipse from '../../assets/img/bigeclipse.svg';
import mideclipse from '../../assets/img/mideclipse.svg';
import smalleclipse from '../../assets/img/smalleclipse.svg';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaTumblr} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';



export default function LandingPage() {

  function changeImageToAtletico() {
 
    let  img2 = atletico;
    var imgElement = document.getElementById("test");

    imgElement.src = {img2};
  }

  function changeImageBackToPsg() {

    let img2 = psgkit;
    let  imgElement = document.getElementById("test");

    imgElement.src = img2;

  }
    return (
        <div>
              <main>
      <section className={styles.presentation}>
        <div className={styles.introduction}>
          <div className={styles.introText}>
            <h1>Coolest Soccer Kits</h1>
            <p>Original Quality, Affordable Prices & WorldWide Shipping</p>
            <h2>Get your Kit! Be Wavy!</h2>
          </div>
          <div className={styles.cta}>
            
         
              <button className={styles.neon}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              SHOP NOW

              </button>
              
          
          </div>
        </div>
        <div className={styles.cover}>
        
          <img src={psgkit} alt="jersey" id="test" />
        </div>
      </section>

      <div className={styles.kitSelect}>
        <img src={arrowleft} alt="" />
        <img src={dot} alt="" onClick={()=> changeImageBackToPsg()} />
        <img src={dotfull} alt="" onClick={()=> changeImageToAtletico} />
        <img src={dotfull} alt="" onClick={()=> changeImageBackToPsg} />
        <img src={arrowright} alt="" />
      </div>

      <img className={styles.bigCircle} src={bigeclipse} alt="" />
      <img className={styles.mediumCircle} src={mideclipse} alt="" />
      <img className={styles.smallCircle} src={smalleclipse} alt="" />
    </main>
    <section className={styles.contact} >
      <h2>You can find us on</h2>
   
      <ul className={styles.socials}>
        <li>
        <FaTwitter  className={styles.socialIcons} />
         
        </li>
        <li>
         
        <FaPinterest  className={styles.socialIcons} />
        </li>
        <li>

          <FaFacebookF  className={styles.socialIcons}/>
         
        </li>
        <li>
        

          <FaInstagram  className={styles.socialIcons} />
        </li>
        <li>
     
          <FaTumblr  className={styles.socialIcons}  />
 
        </li>
      </ul>
	</section>
	<section className={styles.bgBlack}  >
		<div className={styles.mailingList}>
		  <form >
			<h2>Join Our Mailing List</h2>
			<div className= {styles.formStyle}>
			  <input id="email" name="email" type="email" placeholder="Enter your email..." />
			  <input id="submit" type="submit" className={styles.btnGhost} value="Submit" />
<<<<<<< HEAD
=======
	  
>>>>>>> daa222968f69397cef10204608b2c8601f1dea72
			</div>
		  </form>
		</div>
	  </section>
        </div>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> daa222968f69397cef10204608b2c8601f1dea72
