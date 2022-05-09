import React from 'react';
import footer from "../images/footer.jpg";
import "./css/Footer.css";
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import linkedn from "../images/icons/linkedin.png";
import youtube from "../images/icons/youtube.png";

const Footer = () => {
  return (
     <div className="footer" align="center">
            <div className="innerFooter">
              <div className="content">
                <h3>Skilled Migration</h3>
                <h5>145, Toy Zone, EcoTech III, Greater Noida, UP, India</h5>
                
                <div>
                    <a href="mailto:info@skilled-migration.com" style={{textTransform: "lowercase"}}>info@skilled-migration.com</a><br />
                    {/* <a href="tel:+97143853960">+97-143-853-960</a> */}
                </div>
                
              </div>

              <img src={footer} alt="footer-pic" width="50%" />
            </div>
            <hr color='#ddd' style={{margin: "1em"}} width="60%" />

            <div>
                    <h3>Follow us : </h3>
                    <div className='socialMedia'>
                        <img href="#" src={facebook} alt="facebook_logo" width="3%"/>
                        <img href="#" src={instagram} alt="instagram_logo" width="3%"/>
                        <img href="#" src={linkedn} alt="linkedn_logo" width="3%"/>
                        <img href="#" src={youtube} alt="youtube_logo" width="3%"/>
                    </div>
            </div>
            <div className='quickLinks'>
              <a href="/">HOME</a>
              <a href="/study">STUDY</a>
              <a href="/work">WORK</a>
              <a href="/howwework">HOW WE WORK</a>
              <a href="/about">ABOUT</a>
              <a href="/careers">CAREERS</a>
            </div>

            <p className='rights'>&#169; 2022  All rights reserved. Powered by Skilled Migration</p>

          </div>
  )
}

export default Footer