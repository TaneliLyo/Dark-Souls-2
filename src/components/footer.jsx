import Logo from '../assets/logo.png'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='ftext'>
                © 2025 Boireas. All rights reserved to logos, songs and other intellectual property.
            </div>
        </footer>
    )
}