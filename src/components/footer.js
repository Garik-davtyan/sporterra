import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-title">Sporterra</div>
                <div className="footer-desc">Магазин спортивной одежды и экипировки</div>
                <div className="footer-contact">
                    <span>Телефон: <a href="tel:+37495808707">+374 95 808 707</a></span>
                </div>
                <div className="footer-address">
                    <span>Адрес: Северный проспект 6/2, Tashir Street</span>
                </div>
            </div>
            <div className="footer-brands">
                <div className="footer-brands-title">Бренды:</div>
                <ul className="footer-brands-list">
                    <li><a href="https://www.underarmour.com/" target="_blank" rel="noopener noreferrer">Under Armour</a></li>
                    <li><a href="https://www.venum.com/" target="_blank" rel="noopener noreferrer">Venum</a></li>
                    <li><a href="https://www.lecoqsportif.com/" target="_blank" rel="noopener noreferrer">Le Coq Sportif</a></li>
                    <li><a href="https://www.squatwolf.com/" target="_blank" rel="noopener noreferrer">Squatwolf</a></li>
                    <li><a href="https://www.everlast.com/" target="_blank" rel="noopener noreferrer">Everlast</a></li>
                    <li><a href="https://www.adidas.com/" target="_blank" rel="noopener noreferrer">Adidas</a></li>
                    <li><a href="https://www.nike.com/" target="_blank" rel="noopener noreferrer">Nike</a></li>
                    <li><a href="https://www.freddy.com/" target="_blank" rel="noopener noreferrer">Freddy</a></li>
                    <li><a href="https://www.leone1947.com/" target="_blank" rel="noopener noreferrer">Leone</a></li>
                    <li><a href="https://www.everlast.com/" target="_blank" rel="noopener noreferrer">Everlast</a></li>
                    <li><a href="https://clinchgear.com/" target="_blank" rel="noopener noreferrer">Clinch</a></li>
                    <li><a href="https://www.pentagon.gr/" target="_blank" rel="noopener noreferrer">Pentagon</a></li>
                    <li><a href="https://www.4f.com.pl/" target="_blank" rel="noopener noreferrer">4F</a></li>
                </ul>
            </div>
            <div className="footer-copyright">
                © 2025 Sporterra. Все права защищены.
            </div>
        </footer>
    );
}

export default Footer;
