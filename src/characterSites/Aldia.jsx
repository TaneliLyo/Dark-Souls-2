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
            <h2>Aldia, the scholar of the First Sin</h2>
            <p>Aldia, the Scholar of the First Sin, was the elder brother of King Vendrick and a brilliant yet obsessive seeker of truth. While Vendrick sought to rule, Aldia sought to understand the curse that plagued mankind. His experiments in the nature of souls and immortality led to horrific transformations and abominations born from his pursuit of freedom from the cycle. In time, his body was consumed by his own research, leaving behind a formless being of fire and thought—forever questioning the meaning of existence and the endless repetition of fate.</p>
            <h3>Lore</h3>
            <p>Aldia's tale runs parallel to that of his brother, King Vendrick. While Vendrick sought to protect Drangleic through conquest and order, Aldia turned inward—devoting himself to unraveling the secrets of life, death, and the curse that bound them all. His insatiable thirst for knowledge led him to conduct experiments with souls, seeking a way to escape the endless cycle of Light and Dark. Yet his discoveries only birthed horrors, as countless creatures and malformed beings emerged from his failed attempts at transcendence.</p>

            <p>In his obsession, Aldia delved too deeply into the essence of existence itself, losing his physical form and becoming a being of flame and thought. From within his manor, he watched Drangleic's decay unfold, questioning the purpose of the curse and the futility of man's struggle against it. He came to believe that true freedom could only be found by rejecting both the flame and the dark—an impossible third path beyond the reach of gods and mortals alike.</p>

            <p>Eventually, Aldia's fragmented consciousness spread throughout the world, appearing to the player as a voice of reason and doubt. His dialogue challenges the very foundations of the Dark Souls universe, urging the cursed to question destiny itself. Whether he is a guide, a manipulator, or a remnant of a broken scholar is unknown—but his influence lingers as the embodiment of inquiry and the cost of forbidden knowledge.</p>

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
                <li><strong>The Scholar of the Third Path:</strong> Many believe Aldia represents the search for an alternative beyond the cycle of Light and Dark—a "third path" that rejects both linking the fire and letting it fade. His transformation into a being of pure thought may symbolize the transcendence he sought, even if it cost him his humanity.</li>

                <li><strong>The True Architect of Drangleic's Fall:</strong> Some theorize that Aldia's forbidden experiments destabilized the natural order, indirectly dooming Drangleic long before Vendrick's war with the Giants. The twisted creatures in Aldia's Keep stand as living testaments to his reckless pursuit of truth.</li>

                <li><strong>Embodiment of the Player's Doubt:</strong> Aldia's fragmented form and cryptic dialogue mirror the player's internal conflict—whether to continue the endless cycle or reject it altogether. His presence at the end of the game challenges the player to think beyond action and question the very purpose of their journey.</li>
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
            <p><strong>Location:</strong> Aldia can first be encountered as a mysterious voice and later manifests physically in multiple locations, including Aldia's Keep and as a final boss after fulfilling certain conditions in the Scholar of the First Sin edition.</p>
            <p><strong>Dialogue:</strong> Aldia speaks in riddles and philosophical reflections about the nature of existence, fire, and the curse. His words challenge the player to question the purpose of their journey and the meaning of the cycles they perpetuate.</p>
            <p><strong>Boss Fight:</strong> Aldia, Scholar of the First Sin, serves as an optional final boss. The battle takes place amid swirling flames and dark energy, representing his transformation into a formless, eternal entity. Upon defeat, he leaves the player with one final question—whether to accept or reject the fate of all who came before.</p>
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