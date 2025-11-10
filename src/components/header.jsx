import Logo from '../assets/logo.png'
import './header.css'

export default function Header() {
    return (
        <header>
            <div className='Brent'>
                <img src={Logo} alt="Logo" />
                <h1>Dark Souls 2</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="characters">Characters</a></li>
                    <li><a href="songs">Songs</a></li>
                </ul>
            </nav>
        </header>
    )
}