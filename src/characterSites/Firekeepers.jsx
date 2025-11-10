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
            <p>The Three Fire Keepers at Things Betwix are mysterious women who tend to the embers scattered across the cursed land. Each keeper carries the weight of guiding lost Undead, offering warmth, solace, and the promise of rebirth at the bonfire. Though they speak little of themselves, their presence provides comfort and a semblance of order in a world wracked by decay. United yet distinct, the keepers symbolize the enduring cycle of flame and dark, maintaining the fragile balance between hope and despair for those who pass through their watchful gaze.</p>
            <h3>Lore</h3>
            <p>The Three Fire Keepers at Things Betwix are enigmatic caretakers of the scattered embers that sustain the cursed land. Each keeper tends to a separate bonfire, offering warmth, guidance, and the promise of rebirth to wandering Undead. Though their words are few, their actions carry weight, symbolizing the enduring cycle of flame and dark that defines Drangleic.</p>

            <p>The keepers appear united yet distinct, each with her own mannerisms and subtle personality traits that hint at a deeper history. They observe travelers with quiet vigilance, rewarding perseverance and punishing recklessness, maintaining the fragile balance between hope and despair. Their presence serves as both a comfort and a reminder: even in a world consumed by decay, the light of the flame endures, fragile but unwavering.</p>

            <p>While little is known about their origins or true intentions, the Three Fire Keepers exemplify the cost of devotion. They are guardians not of wealth or power, but of the cycle itself, embodying the solemn duty and quiet resilience required to sustain the cursed world, one ember at a time.</p>

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
                <li><strong>Retired Fire Keepers:</strong> Many players theorize that the three Fire Keepers at Things Betwixt are retired, no longer actively tending major bonfires. Their presence hints at a fading tradition or broken order.</li>

                <li><strong>Last Vestiges of the Order:</strong> The keepers may be the final guardians of the Flame in that region, representing the collapse of the Fire Keeper system in Drangleic.</li>

                <li><strong>Missing Bonfires, Missing Keepers:</strong> Some suggest that many bonfires lack an identified Fire Keeper because the keepers are dying out or being phased out. This implies a decline of the Flame's guardians.</li>

                <li><strong>Agents of the Cycle:</strong> The keepers may not only tend flames but also consciously participate in the cycle of Fire → Link → Rekindle → Fade, monitoring the entry of Undead into the curse.</li>

                <li><strong>Spatial-Temporal Anchors:</strong> Some players speculate that the keepers exist partially outside normal time, acting as metaphysical guardians of the flame and thresholds for the Undead.</li>
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
            <p><strong>Location:</strong> The Three Fire Keepers at Things Betwix are stationary at their respective bonfires in the tutorial-like area of Things Betwix. They do not move from their posts, but their presence is crucial for introducing players to the concept of flame, rest, and rebirth.</p>
            <p><strong>Dialogue:</strong> The keepers speak sparingly, offering short, cryptic guidance about tending the flame, resting at bonfires, and the balance of Light and Dark. Their words are calm and solemn, reflecting centuries of devotion to their duties.</p>
            <p><strong>Role:</strong> While they do not accompany the player like a summon, the Three Fire Keepers serve as the first lesson in the cycle of flame and death. They symbolize vigilance, guidance, and the moral weight of maintaining the fire in a cursed world.</p>
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