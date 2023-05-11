import { useRef } from 'react';
import './header.css';
import {FaBars, FaTimes} from "react-icons/fa";
import HeaderLink from '../HeaderLink';





const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav"); 
    }
   
    return (
        <header className='header'>
            <h3 className='titulo'>Leitura Inclusiva</h3>

            <nav ref={navRef}>
            <h2 className='titulo-menu-mobile'>Leitura Inclusiva</h2>

            <ul className='ul'>

                <li><HeaderLink className='list'  to='/'>Home</HeaderLink></li>
                <li><HeaderLink className='list' to='/catalogo'>Catalogo</HeaderLink></li>
                <li><HeaderLink className='list' to='/sobre'>Sobre</HeaderLink></li>
                <li><HeaderLink className='list' to='/contato'>Contato</HeaderLink></li>
                
             </ul>
                <button className='nav-btn nav-close-btn' onClick={showNavbar} type='submit'>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>

        
    );
}

export default Header;