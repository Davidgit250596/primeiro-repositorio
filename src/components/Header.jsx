import './Header.css'


function Header() {
    return (
        <header className="header">
            <h1>Meu Site</h1>
            <nav>
                <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header