import Header from "../components/header";
import EH1 from './characterAssets/emerald-herald.jpg'
import EH2 from './characterAssets/emerald-herald1.jpg'
import EH3 from './characterAssets/emerald-herald2.jpg'
import EH4 from './characterAssets/emerald-herald3.jpg'
import song from './characterAssets/Shanalotte.mp3'
import styles from './characterCss/Shanalotte.module.css'
import Footer from "../components/footer";

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={EH1} alt="0" />
        </div>

        <section className={styles.characterLore}>
            <h2>Shanalotte: The Emerald Herald</h2>
            <p>Shanalotte, known as the Emerald Herald, is a key NPC in Dark Souls II who guides the player's journey. She helps the player level up and provides cryptic commentary on the curse, fate, and Drangleic's history.</p>

            <h3>Lore</h3>
            <p>Her true name is Shanalotte, a name given to her by dragons. She claims she was “born of dragons, contrived by men,” implying a mixed heritage. Her creators include Aldia, and possibly King Vendrick, who sought to use her as a tool to break the Undead Curse.</p>

            <p>Shanalotte's stated purpose is to guide the Undead: she draws cursed Undead to Drangleic in the hope that one of them will succeed in ending the curse.</p>

            <p>Despite her role, she admits her creation failed in its ultimate goal: she was supposed to “break” the curse but did not come out as intended.</p>

            <h3>Notable Quotes</h3>
            <blockquote>
                <p>"Bearer of the curse… seek souls. Larger, more powerful souls."</p>
            </blockquote>
            <blockquote>
                <p>"Seek the King… that is the only way. Lest this land swallow you whole… as it has so many others."</p>
            </blockquote>
            <blockquote>
                <p>"This ring is the symbol of the king. Use it to gain passage… and venture to the far east."</p>
            </blockquote>
            <blockquote>
                <p>"May the power of the monoliths grant you strength."</p>
            </blockquote>
            <blockquote>
                <p>"Bearer of the curse… I will always be at your side."</p>
            </blockquote>


            <h3>Theories and Speculations</h3>
            <ul>
                <li><strong>Artificial Dragon-Human Hybrid:</strong> Because of her “dragon child” line and claims of being contrived by men, many fans believe she is a half-dragon experiment by Aldia to combine draconic immortality with humanity.</li>

                <li><strong>Failed Cure for the Curse:</strong> Her failure to break the Undead Curse suggests that her creators (Aldia and possibly Vendrick) underestimated the complexity of the defect — she guides the player instead, hoping they'll succeed where she could not.</li>

                <li><strong>Last Firekeeper or Guardian:</strong> Some interpret her role as more than a guide — she is seen as a kind of “artificial firekeeper” created for a higher purpose, rather than a traditional, natural firekeeper.</li>

                <li><strong>Existence as a Projection:</strong> There are theories that the Shanalotte the player interacts with may be a projection or clone — she mentions being “led by” an “other self,” pointing to possible metaphysical duplicity.</li>
            </ul>

            <div className={styles.characterSong}>
                <h3>Bearer of the Curse (呪いの継承者), By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={EH2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={EH3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={EH4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
            <p><strong>Location:</strong> She is first encountered in Majula, near the cliff overlooking the ocean.</p>  
            <p><strong>Function:</strong> Acts as the player's leveling NPC (replacing bonfires), and also gives the Aged Feather.</p>  
            <p><strong>Endgame Role:</strong> Near the end, she reveals her origins more fully — she was created by Aldia (and possibly others) in a failed effort to end the curse, and she warns the player about Nashandra and choice regarding the throne.</p>
        </section>
     </div>   
    )
}

export default function Shanalotte() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}