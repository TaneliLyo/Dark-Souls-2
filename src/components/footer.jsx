import Logo from '../assets/logo.png'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='ftext'>
                <p><strong>All Dark Souls II images © FromSoftware / Bandai Namco. Used for informational/fan purposes only.</strong></p>
                <p>© 2025 Boireas. All rights reserved to original content, text, and other intellectual property.</p>              
            </div>
        </footer>
    )
}