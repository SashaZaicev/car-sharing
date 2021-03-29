import React from 'react';
import fb from '../images/facebook.svg'
import ins from '../images/instagram.svg'
import you from '../images/youtube.svg'

const FooterSection = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerTop">
                    <a className="aplicationBtn" href="#">Скачать приложение</a>
                    <nav className="menu">
                        <ul className="menuList">
                            <li className="menuItem"><a className="menuListLink" href="">О НАС</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">АВТОПАРК</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">ОТЗЫВЫ</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">УСЛОВИЯ</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">КОНТАКТЫ</a></li>
                        </ul>
                    </nav>
                    <a className="phone" href="tel:380999999090">+38 (099) 999 90 90</a>

                </div>
                <ul className="footerSocial">
                    <li className="footerSocialItem">
                        <a href="" className="footerSocialLink">
                            <img src={you} alt="" className="footerSocialImg"/>
                        </a></li>
                    <li className="footerSocialItem">
                        <a href="" className="footerSocialLink">
                            <img src={fb} alt="" className="footerSocialImg"/>
                        </a></li>
                    <li className="footerSocialItem">
                        <a href="" className="footerSocialLink">
                            <img src={ins} alt="" className="footerSocialImg"/>
                        </a></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterSection;