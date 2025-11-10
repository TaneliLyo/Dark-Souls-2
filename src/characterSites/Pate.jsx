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
            <p>Mild-Mannered Pate is a seemingly polite adventurer who roams Drangleic in search of treasure and opportunity. With his calm demeanor and courteous speech, he appears trustworthy at first glance, but those who cross his path soon learn to question his intentions. Known for leading others into traps under the guise of helpful advice, Pate embodies the deceptive nature of survival in a crumbling world. Whether he is a charming rogue or a subtle villain remains uncertain, as his true motives are forever shrouded behind a disarming smile.</p>
            <h3>Lore</h3>
            <p>Mild-Mannered Pate is a wandering adventurer with a calm voice and a courteous manner, traits that conceal his true cunning. He travels Drangleic in search of treasure and opportunity, often presenting himself as a friendly guide to unsuspecting explorers. Pate claims to have a keen sense for traps and dangers, yet it is unclear whether he warns others out of goodwill—or to lure them into danger for his own amusement. His silver tongue and polite demeanor make him one of the most enigmatic figures in the cursed land.</p>

            <p>Throughout the player's encounters with him, Pate offers cryptic advice and directions that often lead to peril. He insists that such outcomes are mere misfortune, but his reputation as a trickster spreads quickly. His rivalry with Creighton the Wanderer further deepens his mystery; each accuses the other of betrayal and murder, forcing the player to decide who, if anyone, is truly trustworthy. This dynamic paints Pate as a master manipulator or a misunderstood survivor—depending on how one interprets his charm.</p>

            <p>In the end, Pate's fate is as uncertain as his character. Whether he perishes by Creighton's hand, vanishes into the ruins, or continues his deceitful wandering, he remains a symbol of Drangleic's moral decay—where even kindness may hide a knife. Mild-Mannered Pate's legacy is that of a smiling liar in a world where honesty offers no reward, and survival demands guile as much as strength.</p>

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
                <li><strong>The Untrustworthy Adventurer:</strong> Many players suspect that Pate is not as friendly as he seems. His calm demeanor and constant warnings about traps may be a ploy to lure adventurers into danger, allowing him to claim their treasures afterward.</li>

                <li><strong>The Rivalry with Creighton:</strong> The long-standing feud between Pate and Creighton raises questions about who the true villain is. Some believe Pate betrayed Creighton and stole his possessions, while others think Creighton is the madman twisting the tale to his favor.</li>

                <li><strong>Symbol of Deception and Survival:</strong> Pate's character embodies the subtle deceit that permeates Drangleic. Whether conman or cautious survivor, he represents the lengths one must go to endure in a cursed world—where trust is a luxury few can afford.</li>
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
            <p><strong>Location:</strong> Mild-Mannered Pate can first be found in the Forest of Fallen Giants, warning the player about a nearby trap. He later appears in the Earthen Peak and Brightstone Cove Tseldora, often in suspicious circumstances that suggest hidden motives.</p>
            <p><strong>Dialogue:</strong> Pate speaks politely and with an air of calm confidence, always maintaining a friendly tone regardless of the situation. His conversations are filled with subtle manipulation and double meanings, leaving players unsure whether to trust or fear him.</p>
            <p><strong>Questline:</strong> Pate's story intertwines with that of Creighton the Wanderer. Depending on the player's actions, they can uncover a violent confrontation between the two. The player must choose whom to assist—revealing either Pate as a cunning betrayer or Creighton as a vengeful madman. The truth, as with much in Drangleic, remains uncertain.</p>
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