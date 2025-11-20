import styles from './characterCss/Pate.module.css'
import song from './characterAssets/Pate.mp3'
import P1 from './characterAssets/pate.jpg'
import P2 from './characterAssets/pate1.jpg'
import P3 from './characterAssets/pate2.jpg'
import P4 from './characterAssets/pate3.jpg'
import Header from '../components/header'
import Footer from '../components/footer'

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={P1} alt="0" />
        </div>

        <section className={styles.characterLore}>
            <h2>Mild-Mannered Pate</h2>
            <p>Pate is a traveling treasure hunter in Drangleic, known for his polite demeanor and “friendly” advice — but he's not necessarily as innocent as he seems. He appears helpful, but there’s a lot of ambiguity around his motives.</p>

            <h3>Lore</h3>  
            <p>You first meet Pate in the Forest of Fallen Giants, where he warns you about bandits and traps as part of his “treasure hunt”.</p>  
            <p>He can be summoned for the fight against The Last Giant; if he survives, he rewards you later. Over the course of the game, you can encounter him in Earthen Peak and in Brightstone Cove Tseldora.</p>  
            <p>Pate has a long-running rivalry with **Creighton the Wanderer**: Creighton accuses Pate of being manipulative and murderous, while Pate claims Creighton set a trap for him.  Depending on what you do, you may choose a side in their conflict.</p>  

            <h3>Notable Quotes</h3>
            <blockquote>
            <p>"Oh, you again... I thought you'd gone hollow by now."</p>
            </blockquote>
            <blockquote>
            <p>"You be careful out there. There's treasure, sure—but there's also plenty who'd slit your throat for it."</p>
            </blockquote>
            <blockquote>
            <p>"That fellow Creighton? Can't trust him, not one bit. Watch your back if you run into him."</p>
            </blockquote>
            <blockquote>
            <p>"Heh, I see you've survived. Not many do, in these parts. Maybe you've got some luck after all."</p>
            </blockquote>
            <blockquote>
            <p>"Ah, you again! Always a pleasure to see a friendly face. Not that there are many left."</p>
            </blockquote>


            <h3>Theories and Speculations</h3>
            <ul>  
                <li><strong>The Patches Analogue:</strong> Many fans believe Pate fills the same “trickster treasure hunter” role in DS2 that **Patches** does in other Souls-games — luring players into danger under the guise of helpfulness.</li>  
                <li><strong>Master Manipulator:</strong> Despite his mild manners, Pate is theorized to intentionally lead others into traps so he can profit from their death or misery.</li>  
                <li><strong>Rivalry with Creighton:</strong> The conflict with Creighton may be more than a petty feud — some speculate both of them are playing a dangerous game to betray or outsmart each other, with the player caught in the middle.</li>  
            </ul>



            <div className={styles.characterSong}>
                <h3>Smiling Knives, By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={P2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={P3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={P4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
            <p><strong>Location(s):</strong> Forest of Fallen Giants; Earthen Peak; Brightstone Cove Tseldora.</p>  
            <p><strong>Quest / Rewards:</strong> After exhausting his dialogue in the Forest of Fallen Giants, he gives the White Sign Soapstone. If he survives the Last Giant fight, he later gives Pate's Spear, his armor set, and the Ring of Thorns.</p>  
            <p><strong>Personality:</strong> Polite and cautious, but possibly deceitful — he warns of danger, yet seems aware of traps the player could fall into.</p>        
        </section>
     </div>   
    )
}

export default function Pate() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}