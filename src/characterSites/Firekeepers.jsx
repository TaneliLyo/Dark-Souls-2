import styles from './characterCss/FireKeepers.module.css'
import song from './characterAssets/firekeepers.mp3'
import FK1 from './characterAssets/firekeepers.jpg'
import FK2 from './characterAssets/firekeepers1.jpg'
import FK3 from './characterAssets/firekeepers2.jpg'
import FK4 from './characterAssets/firekeepers3.jpg'
import Header from '../components/header'
import Footer from '../components/footer'

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={FK1} alt="0" />
        </div>

        <section className={styles.characterLore}>
            <h2>The Three Fire Keepers</h2>
            <p>In Dark Souls II, the “Three Fire Keepers” are elderly sisters named **Strowen**, **Morrel**, and **Griant**. They live in a small hut in the liminal area called Things Betwixt, where they no longer actively tend a bonfire, but offer guidance to Undead travelers who arrive.</p>

            <h3>Lore</h3>
            <p>The three sisters are former Fire Keepers who have retired to Things Betwixt for their own protection. Their caretaker is a housemaid named Milibeth, who tends to them and their home. Milibeth comes from a long line of caretakers for these keepers.</p>

            <p>Strowen is portrayed as the cynical leader of the group. Morrel is quieter and more reserved, while Griant rarely speaks unless directly prompted.</p>

            <p>These keepers play a special mechanical role: Strowen allows the player to reallocate their stat points (respec) if they give her a Soul Vessel.</p>

            <p>The sisters also mention that there used to be a fourth Fire Keeper, although she is no longer present.</p>

            <h3>Notable Quotes</h3>
            <blockquote>
            <p>"The flame flickers, but it endures. Tread carefully, Undead."</p>
            </blockquote>
            <blockquote>
            <p>"Rest here, and gather your strength. The world outside is unforgiving."</p>
            </blockquote>
            <blockquote>
            <p>"Even the smallest ember can ignite hope, if one tends it with care."</p>
            </blockquote>
            <blockquote>
            <p>"Do not be hasty, traveler. Patience preserves both life and light."</p>
            </blockquote>
            <blockquote>
            <p>"The cycle continues, but each step you take matters. Guard the flame."</p>
            </blockquote>


            <h3>Theories and Speculations</h3>
            <ul>
                <li><strong>The Fourth Sister Theory:</strong> Some fans speculate that the missing fourth sister might be the woman seen in the *Things Betwixt* intro cutscene, or perhaps another character like the Emerald Herald.</li>
                <li><strong>Retired to Avoid Exploitation:</strong> Because Fire Keepers are often targets for pyromancy and hexing materials, it's theorized that these three retired to Things Betwixt to avoid danger.</li>
                <li><strong>Metaphorical Guardians:</strong> Their presence in Things Betwixt — a place outside the normal world — may symbolize their role as guardians of a transitional space, not just of fire, but of memory and identity.</li>
            </ul>



            <div className={styles.characterSong}>
                <h3>The Sisters Who Wait, By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={FK2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={FK3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={FK4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
            <p><strong>Location:</strong> Things Betwixt, in their hut.</p>  
            <p><strong>Function:</strong> Provide lore, reallocate stats (via Strowen), and give Human Effigies if the player has the King's Ring.</p>  
            <p><strong>Caretaker:</strong> Milibeth, who tends to them and mentions their past as real Fire Keepers.</p>        
        </section>
     </div>   
    )
}

export default function FireKeepers() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}