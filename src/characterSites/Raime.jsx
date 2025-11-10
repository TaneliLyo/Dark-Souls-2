import song from './characterAssets/RaimesSide.mp3'
import R1 from './characterAssets/Raime.jpg'
import R2 from './characterAssets/Raime1.jpg'
import R3 from './characterAssets/Raime2.jpg'
import R4 from './characterAssets/Raime3.jpg'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from './characterCss/Raime.module.css'

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={R1} alt="0" />
        </div>

        <section className={styles.characterLore}>
            <h2>Raime, the Fume Knight</h2>
            <p>The Fume Knight, Raime, was once considered a loyal knight alongside Velstadt, the Royal Aegis, as the left and right arms of King Vendrick. Their wills clashed, and after being defeated by Velstadt, Raime was branded a traitor and left Drangleic seeking strength. At Brume Tower he found power not from a king but from Nadalia, Bride of Ash, a Child of Dark, who infused him with dark energy and bound a fragment of her soul to his weapons. Choosing to remain with her, Raime embraced the darkness, and now resides at the bottom of Brume Tower, guarding Nadalia’s resting place and the Crown of the Iron King.</p>
            <h3>Lore</h3>
            <p>Raime, the Fume Knight, was once likely the commander of King Vendrick's military, his sword and armor closely resembling that of the royal soldiers. Many of these soldiers seem to have followed him into Brume Tower, their corpses found near a destroyed Ashen Idol. Known for his fondness of ravens—despite their grim symbolism—Raime may have inspired Captain Drummond, whose helmet bears the likeness of a dark bird and who likely served under him at the Great Fort.</p>

            <p>Raime's shield, discovered within the Flame Salamander pit, suggests he lost it during the defense of the Fort, perhaps against the Giants. It is possible that this defeat or realization led him to depart Drangleic, drawn toward Brume Tower by knowledge or memory of its power. There, he encountered Nadalia, Bride of Ash, a Child of Dark, and chose to embrace her black flame rather than destroy it.</p>

            <p>Imbued with Nadalia's essence, Raime became the Fume Knight, his armor and greatsword infused with her dark power. Now he stands as the silent guardian of her remains and the Crown of the Old Iron King—his soot-streaked form a reflection of loyalty turned to burden, and of strength consumed by the shadow it sought to master.</p>

            <h3>Theories and Speculations</h3>
            <ul>
                <li><strong>The Puppet Sentinel Theory:</strong> Some players argue that Raime isnt fighting of his own will—rather he is being manipulated or bound by Nadalia, Bride of Ash or the black fog at Brume Tower, acting as her guardian while his will is suppressed.</li>

                <li><strong>The Two-Wills Conflict:</strong> A widely discussed theory suggests that Raime's dual-phase boss fight (fire phase and dark phase) represents two conflicting forces inside him—his original knightly honour, and the corruption/black fog he embraced. This internal battle serves as narrative symbolism rather than just a gameplay gimmick.</li>
            </ul>


            <div className={styles.characterSong}>
                <h3>Raime's Side Ash and Aegis, By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={R2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={R3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={R4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
            <p><strong>Location:</strong> Raime, the Fume Knight, is encountered in the Fume Knight's arena within the Crown of the Old Iron King DLC. He serves as a hidden and optional boss, representing one of the toughest challenges for the player.</p>
            <p><strong>Dialogue:</strong> Raime does not speak; his story is told through his imposing presence, armor, and the remnants of his battle-worn surroundings, conveying his unwavering duty and tragic devotion.</p>
            <p><strong>Boss Fight:</strong> The fight against Raime is optional but extremely challenging. He wields a massive greatsword and shield, combining devastating attacks with high defense. The battle tests the player's skill, patience, and endurance, symbolizing the weight of his relentless loyalty and obsession.</p>
        </section>
     </div>   
    )
}

export default function Raime() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}