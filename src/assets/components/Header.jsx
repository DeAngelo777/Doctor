import  { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <h2 className='headerh2'>Doctor<span className='care'>Care</span></h2>
            <div className='headerLink'>
                <a className='headerLinkai' href="">Inicio</a>
                <a className='headerLinkai' href="">Sobre</a>
                <a className='headerLinkai' href="">Serviqos</a>
                <a className='headerLinkai' href="">Depoimentos</a>
            </div>
            <div>
                <button className='headerBtn'>AGENDAR CONSULTA</button>
            </div>
        </div>
    );
}