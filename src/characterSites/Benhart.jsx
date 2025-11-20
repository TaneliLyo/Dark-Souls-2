import styles from './characterCss/Benhart.module.css'
import song from './characterAssets/benhart.mp3'
import B1 from './characterAssets/benhart.jpg'
import B2 from './characterAssets/benhart1.jpg'
import B3 from './characterAssets/benhart2.jpg'
import B4 from './characterAssets/benhart3.jpg'
import Header from '../components/header'
import Footer from '../components/footer'

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={B1} alt="0" />
        </div>

        <section className={styles.characterLore}>
        <h2>Benhart of Jugo</h2>  
            <p>Benhart of Jugo is a proud and honorable warrior from the distant land of Jugo. He claims his family has wielded the Bluemoon Greatsword for generations, and he travels Drangleic to perfect his skill and unlock the hidden potential of his heirloom. Though confident in his abilities, Benhart's strength comes with a sincere and loyal heart — he will aid the player in battle, honoring his word and seeking true heroism.</p>

            <h3>Lore</h3>  
            <p>Benhart hails from Jugo, a far-off land that he describes as filled with honorable fighters. His greatsword, the Bluemoon Greatsword, is a family heirloom, and he believes it conceals a power yet to be uncovered. He journeyed to Drangleic not just for tests of strength, but to prove his worth and perhaps restore his family's legacy. However, it is confirmed to be a fake, according to a smith (Maughlin).</p>

            <p>Throughout his travels in Drangleic, Benhart meets the player several times: outside Majula's Shaded Woods, in Drangleic Castle by the Central Castle bonfire, in the Forest of Fallen Giants, and finally in the Memory of Orro. He can be summoned for boss fights (Prowling Magus & Congregation; Looking Glass Knight; Giant Lord; Nashandra; Elana). If he survives three such fights, he rewards the player with his gear: Bluemoon Greatsword, armor set, and shield.</p>

            <p>Benhart's armor features a stag crest similar to Creighton of Mirrah's, implying a possible shared history or bloodline. His quest is bittersweet — he is driven by the hope of greatness, but the reality may be that he is chasing a legacy built on illusion.</p>

            <h3>Notable Quotes</h3>
            <blockquote>
            <p>"I come from the land of Jugo, a true man hails from there. Name's Benhart. You're not one of those hollowed, are you?"</p>
            </blockquote>
            <blockquote>
            <p>"This sword has been in my family for generations. They say it's made from the blue moonlight... though, I've yet to see it shine."</p>
            </blockquote>
            <blockquote>
            <p>"I've my own purpose, but I'll help you on yours. We're both cursed, after all—might as well face it together."</p>
            </blockquote>
            <blockquote>
            <p>"Even a curse can't keep a good man down! I'll keep swingin' till the end!"</p>
            </blockquote>
            <blockquote>
            <p>"Ahh... I can rest now, can't I? You've done me proud, friend... truly proud."</p>
            </blockquote>





            <h3>Theories and Speculations</h3>
            <ul>  
                <li><strong>The Hidden Power Theory:</strong> Benhart truly believes his Bluemoon Greatsword has a hidden magical power, but many speculate that he is wrong — the real powerful sword might actually be the Moonlight Greatsword.</li>  
                <li><strong>Fallen Noble Bloodline:</strong> His armor's stag crest matches Creighton's, leading to the theory that Benhart comes from a once-noble but now fallen lineage, perhaps tied to Mirrah.</li>  
                <li><strong>Quest for Redemption:</strong> Benhart may not just be fighting for glory — he is trying to redeem his family's honor, proving his worth through his deeds.</li>  
                <li><strong>Memory Realm Connection:</strong> Because he ends up in the Memory of Orro and interacts with its history, some fans think his journey is about being trapped between his legacy and the memory of what once was.</li>  
            </ul>



            <div className={styles.characterSong}>
                <h3>The Blue Moons Promise, By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={B2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={B3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={B4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
            <p><strong>Location:</strong> Benhart of Jugo can be found near Majula after progressing through the game, often resting by a campfire with his blue moon greatsword. He later appears in several key areas, such as the shaded woods and Drangleic Castle, offering his aid to the player.</p>
            <p><strong>Dialogue:</strong> Benhart is known for his proud yet friendly demeanor, frequently boasting about his heritage and sword. Despite his confidence, his words often reveal humility and genuine respect for the player, showing a deep sense of companionship and honor.</p>
            <p><strong>Summon and Questline:</strong> Benhart can be summoned for multiple boss fights, including the Prowling Magus, Looking Glass Knight, and Nashandra. If he survives enough battles, his storyline concludes with him expressing gratitude before his peaceful death, leaving behind his greatsword as a final token of respect.</p>
        </section>
     </div>   
    )
}

export default function Benhart() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}