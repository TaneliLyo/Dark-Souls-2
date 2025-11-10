import styles from './characterCss/KingVendrick.module.css'
import song from './characterAssets/Vendrick.mp3'
import KV1 from './characterAssets/king-vendrick.jpg'
import KV2 from './characterAssets/king-vendrick1.jpg'
import KV3 from './characterAssets/king-vendrick2.jpg'
import KV4 from './characterAssets/king-vendrick3.jpg'
import Header from '../components/header'
import Footer from '../components/footer'

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={KV1} alt="0" />
        </div>

        <section className={styles.characterLore}>
            <h2>King Vendrick</h2>
            <p>King Vendrick was the once-mighty ruler of Drangleic. A wise monarch, he sought to protect his people from the undead curse. However, through his quest for knowledge and power, he fell victim to the very fate he tried to escape. In the end, he became a hollow, silently wandering the Undead Crypt.</p>
            <h3>Lore</h3>
            <p>Vendrick's story begins with his war against the Giants, who invaded Drangleic. He defeated them and brought peace to the land, using their power to strengthen his kingdom. Obsessed with the nature of the curse, he and his brother Aldia studied souls and immortality, leading to horrifying experiments.</p>

            <p>He married Nashandra, a fragment of Manus, the Primeval Man. Unbeknownst to him, Nashandra sought to manipulate Vendrick into opening the path to the Throne of Want. Realizing her true nature too late, Vendrick fled to the Undead Crypt and locked himself away, hollow and broken.</p>

            <p>Though he is non-hostile at first, his soul holds immense value. Only those who gather enough Giant Souls can face him in combat and end his suffering. His legacy is tied deeply to the fate of the player and the curse they seek to overcome.</p>

            <h3>Notable Quotes</h3>
            <blockquote>
            <p>"Seeker of fire, coveter of the throne… I am Vendrick, ruler of Drangleic."</p>
            </blockquote>
            <blockquote>
            <p>"Bearer of the curse... long have I awaited one such as you, one who might shatter the shackles of fate."</p>
            </blockquote>
            <blockquote>
            <p>"What is a king…? A king is the symbol of order. But a man is just a man. A man's power must be realized… not imagined."</p>
            </blockquote>
            <blockquote>
            <p>"o you still desire peace? Or do you seek greater truths?"</p>
            </blockquote>
            <blockquote>
            <p>"Young Hollow… knowing this, do you still desire peace?"</p>
            </blockquote>


            <h3>Theories and Speculations</h3>
            <ul>
                <li><strong>Symbol of Cyclical Tragedy:</strong> Vendrick's descent into hollowing symbolizes the inevitable downfall of rulers in the Dark Souls universe.</li>
                <li><strong>Failed Resistance:</strong> Despite his wisdom, Vendrick was powerless to prevent the cycle, suggesting the futility of fighting fate alone.</li>
            </ul>

            <div className={styles.characterSong}>
                <h3>Crowned, and Forgotten, By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={KV2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={KV3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={KV4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
      <p><strong>Location:</strong> Vendrick is found deep within the Undead Crypt after defeating Velstadt, his royal protector.</p>
      <p><strong>Dialogue:</strong> Though largely silent, his surroundings and history speak volumes. Interacting with his soul and memories offers crucial insights.</p>
      <p><strong>Boss Fight:</strong> Vendrick becomes a formidable optional boss if you carry enough Giant Souls. Without them, he is nearly impervious to damage.</p>           
        </section>
     </div>   
    )
}

export default function KingVendrick() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}