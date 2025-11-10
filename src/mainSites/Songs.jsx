import Header from "../components/header"
import Footer from "../components/footer"
import './mainCss/songs.css'
import { Shan, Aldia, King, SirAlonne, Firekeepers, Pate, Lucatiel, Last, Glass, Pursuer, Velstadt, Benhart, AAA, AAAV, AAAR } from '../characterSites/characterAssets/ShortcutSongs'

const songs = [
    { title: "Bearer of the Curse (呪いの継承者), By Boireas", text: "This is a song about Shanalotte aka The Emerald Herald" ,content: <audio controls><source src={Shan} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Born of Flame, Bound by Thought, By Boireas", text: "This is a song about Aldia, scholar of the first sin" ,content: <audio controls><source src={Aldia} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Crowned, and Forgotten, By Boireas", text: "This is a song about King Vendrick" ,content: <audio controls><source src={King} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Steel Before Shame, By Boireas", text: "This is a song about Sir Alonne" ,content: <audio controls><source src={SirAlonne} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "The Sisters Who Wait, By Boireas", text: "This is a song about The three Firekeepers" ,content: <audio controls><source src={Firekeepers} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Smiling Knives, By Boireas", text: "This is a song about The mild-mannered Pate" ,content: <audio controls><source src={Pate} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Mask of the Flame (仮面のまま), By Boireas", text: "This is a song about Lucatiel Of Mirah" ,content: <audio controls><source src={Lucatiel} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "The Fall of the Last Giant, By Boireas", text: "This is a song about The Last Giant" ,content: <audio controls><source src={Last} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Through the Mirror, By Boireas", text: "This is a song about The Looking Glass Knight" ,content: <audio controls><source src={Glass} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Mark of the Pursuer, By Boireas", text: "This is a song about The Pursuer" ,content: <audio controls><source src={Pursuer} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Defender of the King, By Boireas", text: "This is a song about Velstadt, the Royal Aegis" ,content: <audio controls><source src={Velstadt} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "The Blue Moon's Promise, By Boireas", text: "This is a song about Benhart of Jugo" ,content: <audio controls><source src={Benhart} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Ash and Aegis, By Boireas", text: "This is a song about Velstadts and Raimes fight" ,content: <audio controls><source src={AAA} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Velstadt's Side Ash hand Aegis, By Boireas", text: "This is a song about Ash and Aegis from Velstadts perspective" ,content: <audio controls><source src={AAAV} type="audio/mpeg" />Your browser does not support the audio element.</audio> },
    { title: "Raime's Side Ash and Aegis, By Boireas", text: "This is a song about Ash and Aegis from Raimes perspective" ,content: <audio controls><source src={AAAR} type="audio/mpeg" />Your browser does not support the audio element.</audio> },

];

function Body() {
    return (
        <div className="songpagecontainer">
            <h1>Welcome to songs</h1>
            <p>In this page, you will get to listen to all the songs more easily Instead of going through all the character pages.</p>
            <p>Most of these song are old and not high quality and I do apologize for it.</p>
            <div className="SongPageSong">
                {songs.map((song, index) => 
                <div  key={index}>
                    <h2>{song.title}</h2>
                    <p>{song.text}</p>
                    <p>{song.content}</p>
                </div>
                )} 
            </div>
            <p>If you're interested, you can find all and more song on my suno page at <a href="https://suno.com/@boireas1">https://suno.com/@boireas1</a></p>
        </div>
    )
}

export default function SongPage() {
    return (
        <>
            <Header />
            <Body />
            <Footer/>
        </>
    )
}