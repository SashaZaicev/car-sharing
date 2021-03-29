import logo from "../images/lux-logo.svg";
import React, {useState} from "react";

function Header() {
    const [menu, setMenu] = useState(false)

    let toggleMenu = () => {
        setMenu(!menu)
    }

    let menuListActive = menu ? 'menuList menuListActive' : 'menuList';
    return (
        <header className="header">

            <div className="container">
                <div className="headerInner">
                    <a href="#" className="logo">
                        <img src={logo} className="logoLink" alt='logo'></img>
                    </a>
                    <nav className="menu">
                        <button onClick={toggleMenu} className="menuBtn">

                        </button>
                        <ul className={menuListActive}>
                            <li className="menuItem"><a className="menuListLink" href="">О НАС</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">АВТОПАРК</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">ОТЗЫВЫ</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">УСЛОВИЯ</a></li>
                            <li className="menuItem"><a className="menuListLink" href="">КОНТАКТЫ</a></li>
                        </ul>
                    </nav>
                    <a className="phone" href="tel:380999999090">+38 (099) 999 90 90</a>
                </div>
            </div>
        </header>
    )
}

export default Header;