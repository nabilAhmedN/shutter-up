import React from 'react';
import logoDr from "../../../assets/images/shutter-up-foot.png";
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <div>
                <img className="h-32 w-32" src={logoDr} alt="" />
                <p className="font-bold">
                    Top photographers on the Shutter Up <br /> photography team
                    are passionate about photography and everything that it
                    entails.
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className='h-24' href="https://github.com/nabilAhmedN">
                        <BsGithub />
                    </a>
                    <a href="https://web.facebook.com/nabilAhmedNahid2">
                        <BsFacebook />
                    </a>
                    <a href="https://www.instagram.com/nabil_astro_b/">
                        <BsInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;