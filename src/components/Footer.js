import React from "react"
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Footer(){
    return( 
    <IconContext.Provider value={{ color: "white", size:"1.5em", className: "socialLinks" }}>
    <footer className="Footer">
    <div class="row">
     <div class="col-sm-3 col-md-6">
            <ul className="QuickLinks"> 
                 <h4>Quick Links</h4>   
                <li><a href="/#">Home</a></li>
                <li><a href="/#">FAQ</a></li>
                <li><a href="/#">About Us</a></li>
            </ul>
        </div>
    <div class="col-sm-3 col-md-6">
        <h4>Join PlantShed</h4>
            <form>
             <label className="SignupForm">
                Sign up for latest news and plant care tips
                <br></br>
                <input type="text" name="name" placeholder="Enter email here..."/>
                </label>
                <input type="submit" value="Sign Up" />
            </form>
            <br></br>
            <div className="socialIcons">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
        </div>
    <div class="col-sm-3 col-md-6">
            <ul className="ContactLinks">
            <h4>Contact Us</h4>    
                <li><a href="/#">Email</a></li>
                <li><a href="/#">Chat</a></li>
            </ul></div>
  </div>
  </footer>
    </IconContext.Provider>
    )
}

