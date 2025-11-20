import styles from './characterCss/velstadt.module.css'
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
            <p>Velstadt, known as the Royal Aegis, is a loyal and powerful knight who guards King Vendrick in the Undead Crypt. He is devoted to his king and remains at his post even after Vendrick's retreat.</p>

            <h3>Lore</h3>  
            <p>Velstadt came from a distant land and was drawn into Drangleic. He became one of King Vendrick's most trusted knights — so devoted that he followed Vendrick even when the king withdrew into the Undead Crypt. In life and death, Velstadt stayed by his side, becoming a shadow of his former self.</p>  
            <p>Originally, his armor and hammer were imbued with miraculous power, but over time, exposure to the darkness of the Crypt corrupted both him and his gear. Velstadt is not just a guard — he gave himself entirely to the king, staying forever as his protector.</p>

            <h3>Theories and Speculations</h3>
            <ul>
                <li><strong>Forgotten Origins:</strong> Some believe Velstadt truly forgot why he came to Drangleic, as his soul description suggests he was “lured” here from a faraway place but cannot remember the purpose.</li>  
                <li><strong>Cleric Knight:</strong> His armor's description and history hint that Velstadt was once a clerical knight, possibly aligned with a tradition of miracles, which makes his corruption by dark especially tragic.</li>  
                <li><strong>Undying Loyalty:</strong> His eternal watch over Vendrick's tomb could be seen as a symbol of unwavering fidelity — he guards not out of duty alone, but because he gave himself fully to the king.</li>  
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
            <p><strong>Location:</strong> Undead Crypt, guarding the entrance to Vendrick's area.</p>  
            <p><strong>Boss Fight Mechanics:</strong> Velstadt fights with a large hammer. Once his health drops to about half, he kneels and begins channeling dark energy, gaining a powerful dark magic ranged attack and greatly increasing his resilience.</p>  
            <p><strong>Drop:</strong> Defeating him gives you the Soul of Velstadt and the Royal Soldier's Ring +2.</p>        
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