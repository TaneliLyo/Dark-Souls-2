import styles from './characterCss/Aldia.module.css'
import song from './characterAssets/Aldia.mp3'
import KV1 from './characterAssets/aldia.jpg'
import KV2 from './characterAssets/aldia1.jpg'
import KV3 from './characterAssets/aldia2.jpg'
import KV4 from './characterAssets/aldia3.jpg'
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
            <h2>Aldia, the Scholar of the First Sin</h2>
            <p>Aldia, the Scholar of the First Sin, was the elder brother of King Vendrick and a brilliant yet obsessive scholar. While Vendrick sought to rule Drangleic, Aldia sought to understand the Undead Curse and the nature of souls. His experiments in life, death, and immortality led to horrific transformations and malformed creatures. Over time, his body was consumed by his research, leaving behind a monstrous being of flame, branches, and a single glowing eye—forever questioning the meaning of existence and the cycle of Light and Dark.</p>

            <h3>Lore</h3>
            <p>Aldia's story runs parallel to that of his brother, King Vendrick. While Vendrick focused on protecting Drangleic through rule and conquest, Aldia delved into forbidden knowledge, attempting to uncover a way to escape the endless cycle of Light and Dark. His experiments with souls and powerful beings gave rise to abominations and horrors that spread throughout his domain.</p>

            <p>In his obsession, Aldia lost his physical form, becoming a spectral figure tied to flame and thought. From Aldia's Keep and other locations, he observes the decay of Drangleic and questions the purpose of the curse. He comes to believe that true freedom might lie in rejecting both Light and Dark—a "third path" beyond the reach of gods and mortals alike.</p>

            <p>Eventually, Aldia's consciousness interacts with the player, offering guidance, challenges, and philosophical questions. Depending on the player's actions, he may even become a secret boss who tests the player's understanding of the cycle. His dialogue and presence embody inquiry, the cost of forbidden knowledge, and the ultimate consequences of obsession.</p>

            <h3>Notable Quotes</h3>
            <blockquote>
            <p>"There is no path. Beyond the scope of light, beyond the reach of Dark... what could possibly await us?"</p>
            </blockquote>
            <blockquote>
            <p>"Young Hollow, do you truly seek peace... or merely another link in the chain?"</p>
            </blockquote>
            <blockquote>
            <p>"Those who come after will walk the same roads, and find the same answers. It has ever been so."</p>
            </blockquote>
            <blockquote>
            <p>"Fire came from the Dark... yet even now, we cling to it. Such is our nature."</p>
            </blockquote>
            <blockquote>
            <p>"When you link the fire, what is it you truly seek? Salvation... or an end to the question itself?"</p>
            </blockquote>



            <h3>Theories and Speculations</h3>
            <ul>
            <li><strong>The Scholar of the Third Path:</strong> Many fans believe Aldia is not just offering Light or Dark, but a genuine "third path" — a way to transcend the endless cycle by rejecting both linking the fire and letting it fade. His dialogue suggests there might be something beyond both.</li>

            <li><strong>The True Architect of Drangleic's Fall:</strong> Some speculate that Aldia's experiments destabilized the foundations of Drangleic. His twisted creations and manipulation of souls might have weakened the kingdom from within, contributing to its eventual downfall.</li>

            <li><strong>Embodiment of the Player's Doubt:</strong> Aldia is seen as a mirror for the player's own existential questioning. His cryptic dialogue at multiple Bonfires and during the final encounter challenges the player to choose: Light, Dark, or something else, encouraging reflection rather than simple action.</li>

            <li><strong>Aldia as a Timeless, Immortal Observer:</strong> Because Aldia drops no souls and his form appears tied to bonfires, some fans theorize he has transcended the cycle of life and death — becoming a being that exists outside time.</li>

            <li><strong>Connection to Dark Souls III's "First Scholar":</strong> A popular theory links Aldia to the mysterious First Scholar mentioned in Dark Souls III. Similarities in philosophy and magical abilities suggest he may have influenced or even is that figure.</li>
            </ul>



            <div className={styles.characterSong}>
                <h3>Born of Flame, Bound by Thought, By Boireas</h3>
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
        <p><strong>Location:</strong> Aldia appears at three bonfires before he can be fought as a boss: the final Primal Bonfire, the Undead Crypt bonfire, and the Dragon Shrine entrance bonfire. After meeting him in all three places and defeating King Vendrick, he will manifest as a final boss in the Throne of Want following the defeat of Nashandra.</p>

        <p><strong>Dialogue:</strong> Aldia's speech is deeply philosophical and cryptic. He reflects on the nature of existence, the curse, and the cycle of Light and Dark. He challenges the player to think about fate, what it means to inherit or destroy the world's order, and whether there might be a path beyond the accepted binary of Light and Dark.</p>

        <p><strong>Boss Fight:</strong> Aldia, Scholar of the First Sin, is an optional but secret final boss. During the fight, he uses attacks combining fire and dark damage. At half health, his flames intensify, and he casts more powerful successive spells. Uniquely, Aldia drops no souls or items when defeated. After beating him, you are asked what you truly seek — "Light, Dark, or something else" — allowing for an alternate ending if you walk away from the Throne.</p>
        </section>
     </div>   
    )
}

export default function Aldia() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}