import './Header.css'

export function Header() {

    return (
        <>
            <div className='header'>
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
        </>
    )
}