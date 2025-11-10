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
            <p>Benhart of Jugo is a proud and steadfast knight who claims descent from a long line of noble warriors. Wielding his distinctive blue moon greatsword, he journeys across Drangleic in search of true heroism and purpose. Though boastful of his strength and ancestry, his actions reveal a kind and loyal heart beneath the bravado. Ever eager to aid the player, Benhart stands as a symbol of honest courage in a world consumed by decay, his unwavering spirit shining even as the curse takes its toll.</p>
            <h3>Lore</h3>
            <p>Benhart of Jugo hails from the distant land of Jugo, a place known for its proud warriors and unyielding sense of honor. Carrying his trademark blue moon greatsword—a weapon he claims to have inherited from his ancestors—Benhart travels Drangleic in search of great deeds to prove his strength and worth. Though he often boasts of his lineage and power, his words carry a tone of sincerity rather than arrogance, reflecting a man clinging to purpose in a fading world.</p>

            <p>Throughout his journey, Benhart aids the player multiple times, offering his sword in several key battles. His loyalty and courage never waver, even when the odds are dire. Yet his confidence may stem from illusion—his sword, dull and seemingly ordinary, could symbolize the fading glory of a knight chasing legends that no longer exist. This duality paints Benhart as both a comic and tragic figure, a man defined not by his victories but by his steadfast belief in what it means to be a hero.</p>

            <p>Should the player summon him often and survive together through trials, Benhart meets his end in dignity, passing on his sword as a final gesture of trust and respect. Whether he was truly the great hero he believed himself to be, or simply a man lost in a cursed age, his story embodies the bittersweet valor that defines the fading light of Drangleic.</p>

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
                <li><strong>The Illusion of Heroism:</strong> Some believe Benhart's confidence in his strength and his blue moon greatsword is based on falsehood. The weapon appears to be a mundane blade, suggesting that his legendary lineage may be nothing more than a tale he tells himself to maintain purpose in a dying world.</li>

                <li><strong>Symbol of Faded Glory:</strong> Benhart's unwavering faith in his weapon and heritage could symbolize the decay of old ideals in Drangleic. Like many remnants of past ages, he clings to a fading legend, representing the persistence of hope even when all proof of greatness has vanished.</li>

                <li><strong>The True Knight:</strong> Despite possible delusion, Benhart's courage and loyalty are genuine. His actions—not his weapon or words—define his heroism. This has led some to interpret him as one of the few truly honorable figures left in the cursed age, a man whose heart remains pure even as the world crumbles around him.</li>
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