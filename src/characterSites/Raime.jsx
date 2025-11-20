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
            <p>Raime, better known as the Fume Knight, is a powerful and tragic figure in Drangleic. Once a trusted knight of King Vendrick, he became a “rebel” and finally took up residence in the haunted Brume Tower, where he embraces dark and smoky power in service of Nadalia, the Bride of Ash.</p>

            <h3>Lore</h3>  
            <p>Raime was once one of Vendrick's most distinguished knights — known as the “left arm” of the king, standing alongside Velstadt. But conflict arose between Raime and Velstadt, and Raime was labeled a traitor. After his defeat, he wandered until he came to Brume Tower.</p>  
            <p>At Brume Tower, Raime found Nadalia, a child of darkness, and instead of purging the black fog, he accepted it. He became her guardian and champion, and a fragment of her soul was said to be bound to his blade. In becoming the Fume Knight, Raime fused his own fate with hers, choosing a dark purpose over returning to his old life.</p>

            <h3>Theories and Speculations</h3>
            <ul>  
                <li><strong>Betrayal and Exile:</strong> Some theorize that Raime's “betrayal” wasn't just political — he may have truly believed that Vendrick and Velstadt were blind to danger (Nadalia or otherwise), and left to protect Drangleic in his own way.</li>  
                <li><strong>Nadalia's Influence:</strong> By accepting Nadalia's power and presence, Raime may have been corrupted or enlightened (depending on your interpretation) — his second-phase fire/dark attacks could reflect her influence.</li>  
                <li><strong>Memory of Velstadt:</strong> There's a gameplay/lore interaction: if you enter the fight while wearing Velstadt's Helm, Raime immediately goes into his second phase. Fans suggest this is a symbolic “flashback” or rage trigger related to his rivalry with Velstadt.</li>  
                <li><strong>Left-Handed Duelist:</strong> Raime fights mainly with his left hand wielding a massive ultra greatsword, which is thematically tied to his status as the king's “left arm.”</li>  
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
            <p><strong>Location:</strong> Found at the bottom of Brume Tower, near the Throne-Floor bonfire.</p>  
            <p><strong>Boss Fight Mechanics:</strong> Raime starts dual-wielding a Fume Sword and his Fume Ultra Greatsword. Once his health drops to a certain point, he buffs his Ultra Greatsword with fire and dark energy and gains powerful new attacks.</p>  
            <p><strong>Summons:</strong> Steelheart Ellie and Carhillion of the Fold can be summoned for the battle.</p>  
            <p><strong>Drop:</strong> Defeating him yields the Soul of the Fume Knight and the Soul of Nadalia, Bride of Ash.</p>        
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