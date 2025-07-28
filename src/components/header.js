import React, { useState, useRef, useEffect } from "react";
import "../styles/header.css";
import logo from "../image/mainlogo.jpg";
import { Link } from "react-router-dom";

import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../styles/header.css";

function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
                // Не закрываем мобильное меню при клике вне, только desktop dropdown
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMenuOpen = (menu) => {
        setOpenMenu(menu === openMenu ? null : menu);
    };
    const handleMenuLinkClick = () => {
        setOpenMenu(null);
        setMobileOpen(false); // Теперь закрываем мобильное меню при переходе по ссылке
        setMobileDropdown(null);
    };

    const handleMobileDropdown = (menu) => {
        setMobileDropdown(mobileDropdown === menu ? null : menu);
    };

    return (
        <div className="header1" ref={menuRef}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/">
                    <img className="logo1" src={logo} alt="sporterra"  />
                </Link>
            </div>
            {/* Иконки справа (десктоп и мобилка) — теперь перед бургер-меню */}
            <div className="header-icons">
                <Link to="/cart" className="header-icon-link" aria-label="Корзина">
                    <FaShoppingCart size={22} />
                </Link>
                <Link to="/register" className="header-icon-link" aria-label="Вход/регистрация">
                    <FaUser size={22} />
                </Link>
            </div>
            {/* Бургер-меню для мобильных — только в шапке! */}
            <button className="burger-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Открыть меню">
                <span className="burger-lines">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </span>
            </button>
            {/* Мобильное меню — без бургер-кнопки! */}
            {mobileOpen && (
                <nav className={"mobile-menu open"}>
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('men')} aria-expanded={mobileDropdown==='men'}>Мужское</button>
                    {mobileDropdown==='men' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/men/tshirts" onClick={handleMenuLinkClick}>Футболки</Link>
                            <Link className="menu-btn" to="/men/hoodies" onClick={handleMenuLinkClick}>Худи</Link>
                            <Link className="menu-btn" to="/men/shorts" onClick={handleMenuLinkClick}>Шорты</Link>
                            <Link className="menu-btn" to="/men/sweatpants" onClick={handleMenuLinkClick}>Спортивные штаны</Link>
                            <Link className="menu-btn" to="/men/tanktops" onClick={handleMenuLinkClick}>Майки</Link>
                            <Link className="menu-btn" to="/men/trainingshorts" onClick={handleMenuLinkClick}>Шорты для тренировок</Link>
                            <Link className="menu-btn" to="/men/underwear" onClick={handleMenuLinkClick}>Нижнее бельё и носки</Link>
                            <Link className="menu-btn" to="/men/shoes" onClick={handleMenuLinkClick}>Обувь</Link>
                        </div>
                    )}
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('women')} aria-expanded={mobileDropdown==='women'}>Женское</button>
                    {mobileDropdown==='women' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/women/leggings" onClick={handleMenuLinkClick}>Легинсы</Link>
                            <Link className="menu-btn" to="/women/shorts" onClick={handleMenuLinkClick}>Шорты</Link>
                            <Link className="menu-btn" to="/women/tops" onClick={handleMenuLinkClick}>Топы</Link>
                            <Link className="menu-btn" to="/women/tanktops" onClick={handleMenuLinkClick}>Майки</Link>
                            <Link className="menu-btn" to="/women/trainingshorts" onClick={handleMenuLinkClick}>Шорты для тренировок</Link>
                            <Link className="menu-btn" to="/women/underwear" onClick={handleMenuLinkClick}>Нижнее бельё и носки</Link>
                            <Link className="menu-btn" to="/women/shoes" onClick={handleMenuLinkClick}>Обувь</Link>
                        </div>
                    )}
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('combat')} aria-expanded={mobileDropdown==='combat'}>Экипировка</button>
                    {mobileDropdown==='combat' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/combat/boxinggloves" onClick={handleMenuLinkClick}>Боксёрские перчатки</Link>
                            <Link className="menu-btn" to="/combat/mmagloves" onClick={handleMenuLinkClick}>Перчатки MMA</Link>
                            <Link className="menu-btn" to="/combat/handwraps" onClick={handleMenuLinkClick}>Бинты</Link>
                            <Link className="menu-btn" to="/combat/headguards" onClick={handleMenuLinkClick}>Шлемы</Link>
                            <Link className="menu-btn" to="/combat/punchingbags" onClick={handleMenuLinkClick}>Боксерские груши</Link>
                            <Link className="menu-btn" to="/combat/jumpropes" onClick={handleMenuLinkClick}>боксерки</Link>
                        </div>
                    )}
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('accessories')} aria-expanded={mobileDropdown==='accessories'}>Аксессуары</button>
                    {mobileDropdown==='accessories' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/accessories/gymbags" onClick={handleMenuLinkClick}>Сумки для зала</Link>
                            <Link className="menu-btn" to="/accessories/waterbottles" onClick={handleMenuLinkClick}>Бутылки для воды</Link>
                            <Link className="menu-btn" to="/accessories/towels" onClick={handleMenuLinkClick}>Полотенца</Link>
                            <Link className="menu-btn" to="/accessories/othergear" onClick={handleMenuLinkClick}>Другое снаряжение</Link>
                        </div>
                    )}
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('new')} aria-expanded={mobileDropdown==='new'}>Новое</button>
                    {mobileDropdown==='new' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/new/venum" onClick={handleMenuLinkClick}>Venum</Link>
                            <Link className="menu-btn squatwolf-btn" to="/new/squatwolf" onClick={handleMenuLinkClick}>Squatwolf</Link>
                        </div>
                    )}
                </nav>
            )}
            {/* Desktop меню */}
            <div className="menu-bar">
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('men')}>
                    Мужское
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'men' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/men/tshirts" onClick={handleMenuLinkClick}>Футболки</Link>
                        <Link className="menu-btn" to="/men/hoodies" onClick={handleMenuLinkClick}>Худи</Link>
                        <Link className="menu-btn" to="/men/shorts" onClick={handleMenuLinkClick}>Шорты</Link>
                        <Link className="menu-btn" to="/men/sweatpants" onClick={handleMenuLinkClick}>Спортивные штаны</Link>
                        <Link className="menu-btn" to="/men/tanktops" onClick={handleMenuLinkClick}>Майки</Link>
                        <Link className="menu-btn" to="/men/trainingshorts" onClick={handleMenuLinkClick}>Шорты для тренировок</Link>
                        <Link className="menu-btn" to="/men/underwear" onClick={handleMenuLinkClick}>Нижнее бельё и носки</Link>
                        <Link className="menu-btn" to="/men/shoes" onClick={handleMenuLinkClick}>Обувь</Link>
                    </div>
                </div>
                <span className="menu-separator">|</span>
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('women')}>
                    Женское
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'women' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/women/leggings" onClick={handleMenuLinkClick}>Легинсы</Link>
                        <Link className="menu-btn" to="/women/shorts" onClick={handleMenuLinkClick}>Шорты</Link>
                        <Link className="menu-btn" to="/women/tops" onClick={handleMenuLinkClick}>Топы</Link>
                        <Link className="menu-btn" to="/women/tanktops" onClick={handleMenuLinkClick}>Майки</Link>
                        <Link className="menu-btn" to="/women/trainingshorts" onClick={handleMenuLinkClick}>Шорты для тренировок</Link>
                        <Link className="menu-btn" to="/women/underwear" onClick={handleMenuLinkClick}>Нижнее бельё и носки</Link>
                        <Link className="menu-btn" to="/women/shoes" onClick={handleMenuLinkClick}>Обувь</Link>
                    </div>
                </div>
                <span className="menu-separator">|</span>
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('combat')}>
                    экипировка
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'combat' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/combat/boxinggloves" onClick={handleMenuLinkClick}>Боксёрские перчатки</Link>
                        <Link className="menu-btn" to="/combat/mmagloves" onClick={handleMenuLinkClick}>Перчатки MMA</Link>
                        <Link className="menu-btn" to="/combat/handwraps" onClick={handleMenuLinkClick}>Бинты</Link>
                        <Link className="menu-btn" to="/combat/headguards" onClick={handleMenuLinkClick}>Шлемы</Link>
                        <Link className="menu-btn" to="/combat/punchingbags" onClick={handleMenuLinkClick}>Боксерские груши</Link>
                        <Link className="menu-btn" to="/combat/jumpropes" onClick={handleMenuLinkClick}>Боксерки</Link>
                    </div>
                </div>
                <span className="menu-separator">|</span>
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('accessories')}>
                    Аксессуары
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'accessories' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/accessories/gymbags" onClick={handleMenuLinkClick}>Сумки для зала</Link>
                        <Link className="menu-btn" to="/accessories/waterbottles" onClick={handleMenuLinkClick}>Бутылки для воды</Link>
                        <Link className="menu-btn" to="/accessories/towels" onClick={handleMenuLinkClick}>Полотенца</Link>
                        <Link className="menu-btn" to="/accessories/othergear" onClick={handleMenuLinkClick}>Другое снаряжение</Link>
                    </div>
                </div>
                <span className="menu-separator">|</span>
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('new')}>
                    Новое
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'new' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/new/venum" onClick={handleMenuLinkClick}>Venum</Link>
                        <Link className="menu-btn squatwolf-btn" to="/new/squatwolf" onClick={handleMenuLinkClick}>Squatwolf</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header

