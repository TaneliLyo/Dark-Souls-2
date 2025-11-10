import styles from './characterCss/Velstadt.module.css'
import song from './characterAssets/Velstadt.mp3'
import V1 from './characterAssets/Velstadt.jpg'
import V2 from './characterAssets/Velstadt1.jpg'
import V3 from './characterAssets/Velstadt2.jpg'
import V4 from './characterAssets/Velstadt3.jpg'
import Header from '../components/header'
import Footer from '../components/footer'
import song2 from './characterAssets/VelstadtsSide.mp3'

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={V1} alt="0" />
        </div>

        <section className={styles.characterLore}>
            <h2>Velstadt the Royal Aegis</h2>
            <p>Velstadt, the Royal Aegis, was King Vendrick's loyal protector and a fearsome knight of Drangleic. Bound by unwavering duty, he guarded the king and the Undead Crypt, ensuring that no one could disturb Vendrick's hollowed slumber. Even after death, Velstadt's loyalty endured, making him a relentless sentinel and a tragic embodiment of devotion in a world cursed by the undead.</p>
            <h3>Lore</h3>
            <p>Velstadt, the Royal Aegis, was a knight of unparalleled loyalty who dedicated his life to protecting King Vendrick and the Undead Crypt. Known for his immense strength and unwavering discipline, Velstadt served as the king's shield, ensuring that no intruder could reach the hollowed monarch.</p>

            <p>Even after Vendrick withdrew into the Undead Crypt, Velstadt remained vigilant, guarding the king's resting place with unrelenting resolve. His presence was both a test and a barrier: only those strong and determined enough could pass him to face the hollowed king. Velstadt's commitment to his oath transformed him into a tragic figure, a warrior bound by duty long past the limits of life and reason.</p>

            <p>His enduring vigilance and formidable power have made him a symbol of loyalty and sacrifice in Drangleic. While he acts as an obstacle to the player, his actions stem from devotion rather than malice, illustrating the heavy cost of fidelity in a world consumed by the curse.</p>

            <h3>Theories and Speculations</h3>
            <ul>
                <li><strong>The Loyal Sentinel Theory:</strong> Velstadt embodies the ultimate loyal servant archetype, staying behind to guard Vendrick out of devotion rather than duty. His tragic perseverance reflects the cost of unwavering loyalty.</li>

                <li><strong>Test of Worthiness:</strong> Velstadt's role may be to test the player, ensuring that only those strong enough to survive can approach the hollow king.</li>

                <li><strong>Symbol of the Undead Crypt's Decay:</strong> Velstadt's eternal stand mirrors the stagnation and decay of Drangleic, with his loyalty highlighting a world where order persists even as the king and kingdom crumble.</li>
            </ul>




            <div className={styles.characterSong}>
                <h3>Defender of the King, By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className={styles.characterSong}>
                <h3>Velstadt's Side Ash and Aegis, By Boireas</h3>
                <audio controls>
                    <source src={song2} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={V2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={V3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={V4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
            <p><strong>Location:</strong> Velstadt is encountered in the Undead Crypt, acting as the main guardian before the player can reach King Vendrick.</p>
            <p><strong>Dialogue:</strong> Velstadt does not speak, but his imposing presence and unwavering stance communicate his absolute loyalty and the gravity of his duty.</p>
            <p><strong>Boss Fight:</strong> Velstadt is a mandatory boss to face before accessing Vendrick. He is extremely powerful, wielding a massive hammer and demonstrating relentless defense and offense, representing the ultimate test of strength and perseverance for the player.</p>
        </section>
     </div>   
    )
}

export default function Velstadt() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}