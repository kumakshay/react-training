import React from 'react';
import {RiFacebookCircleLine} from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import './footer.css';

function Footer() {
    return (
        <div>
            <div className="footer-dark bg-dark text-light d-flex">
            <div className="me-5 ms-5 mt-5 pt-5">
              <div className="row">
                <div className="col-lg-3 flex-column">
                    <h3>Contact</h3>
                    <ul>
                    <li><a className="text-light" href="">Request a Test Drive</a></li>
                            <li><a className="text-light" href="">Book Car</a></li>
                            <li><a className="text-light" href="">Career</a></li>
                            <li><a className="text-light" href="">Contact Us</a></li>
                    </ul>
                    
                </div>
                <div className="col-lg-3 flex-column">
                <h3>Extremecars:</h3>
                        <p>12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai - 400705, Maharastra, India.</p>
                        <p>Phone: +91 (22) 612800000</p>
                </div>
                <div className="col-lg-3 flex-column">
                <h3>Legal</h3>
                          <ul>
                              <li><a className="text-light" href="">Legal Disclaimer/Imprint</a></li>
                              <li><a className="text-light" href="">Privacy Policy</a></li>
                              <li><a className="text-light" href="">Cookie Policy</a></li>
                        
                          </ul>
                </div>
                <div className="col-lg-3 flex-column">
                <h3>Connect with us</h3>
                        <ul>
                          <li><h2><RiFacebookCircleLine/></h2></li>
                          <li><h2><FiTwitter/></h2></li>
                          <li><h2><SiInstagram/></h2></li>
                        </ul>
                </div>

              </div>
            </div>
      </div>
        </div>
    );
}

export default Footer;