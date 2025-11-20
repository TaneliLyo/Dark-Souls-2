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
        <p>King Vendrick was the mighty ruler of Drangleic, a once-powerful kingdom built on the souls of ancient beings. With his brother Aldia, he sought to use the power of souls to strengthen his realm — but his legacy is marked by tragedy, betrayal, and the curse he never fully escaped.</p>

        <h3>Lore</h3>  
        <p>Vendrick founded Drangleic by defeating the Four Great Ones and using their souls to construct a thriving kingdom. He later took Nashandra as queen, and together they ruled during a golden age. However, Nashandra manipulated Vendrick, and he eventually discovered her true nature.</p>

        <p>The king also waged war against the Giants: he crossed the sea, captured them, and used their souls and bodies to create powerful golems. These golems played a major role in building Drangleic's defenses and grand structures.</p>

        <p>As time passed, the Undead Curse spread throughout his land. Vendrick and Aldia both devoted themselves to understanding and countering it, but their methods diverged. Feeling betrayed by Nashandra and weighed down by his failures, Vendrick withdrew into the Undead Crypt. There, he hollowed, becoming a broken shell of his former self.</p>

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


            <h3>Theories and Speculation</h3>  
            <ul>  
                <li><strong>The Wise but Tragic Monarch:</strong> Some fans believe Vendrick was fundamentally good — he genuinely tried to protect his kingdom and find a cure for the curse, but lacked a way to permanently solve it.</li>  
                <li><strong>The Pawn of Nashandra:</strong> It's theorized that Nashandra manipulated Vendrick from the beginning to seize power and the strength of ancient souls for her own ends.</li>  
                <li><strong>The Betrayer of the Giants:</strong> By capturing and experimenting on the Giants, Vendrick may have provoked their wrath — contributing directly to the downfall of Drangleic.</li>  
                <li><strong>The Anti-Throne Choice:</strong> Unlike typical kings in the Dark Souls world, Vendrick may have *refused* the traditional path of linking fire — instead seeking a third option or outright rejecting the cycle.</li>  
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
            <p><strong>Location:</strong> The player confronts Vendrick in the Undead Crypt later in the game, where he has hollowed and lost much of his former strength.</p>  
            <p><strong>Boss Fight:</strong> Vendrick is an optional boss. He wields powerful attacks and has very high defense, but his abilities are weakened if the player has collected multiple Giants' Souls.</p>  
            <p><strong>Soul of the King:</strong> When defeated, Vendrick's soul can be used for major rewards — including powerful weapons like the Ruler's Sword and the King's Ultra Greatsword.</p>       </section>
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