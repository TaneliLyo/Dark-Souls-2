import Header from "../components/header"
import Cover from '../assets/game-cover.jpg'
import Footer from "../components/footer"
import './mainCss/home.css'

function Body(){
    return (
    <main className="Content">
        <h2 className="h2-text">Dark Souls 2</h2>
        <img src={Cover} alt="DS2 cover" className="cover-img" />
        <section>
            <h2>Enter the World of Drangleic</h2>
            <p>Dark Souls 2 invites players into a decaying world full of lost kingdoms, cursed souls, and ancient powers. Every ruin tells a story, every fog wall hides a mystery. Whether you're seeking redemption, purpose, or power — the path is treacherous, and the lore is deep.</p>
        </section>
        <section>
            <h2>Discover the Lore</h2>
            <p>From the enigmatic Queen Nashandra to the fragmented soul of Nadalia, uncover the stories of those who shaped the world. Search, explore, and piece together the forgotten history of Drangleic.</p>
        </section>
    </main>
    )
}


export default function HomePage() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}