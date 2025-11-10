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
            <p>The Emerald Herald, known as Shanalotte, is a pivotal character in *Dark Souls II*. She serves as the player's guide, assisting in leveling up and offering cryptic insights into the world's mysteries. Her presence is central to the player's journey through Drangleic.</p>
            <h3>Lore</h3>
            <p>Shanalotte was created by a collaboration between dragons and humans, specifically by Aldia and possibly Vendrick. This union aimed to produce an entity capable of transcending the curse of undead, a being who could end the cycle of hollowing. However, Shanalotte was considered a "failure" in this regard, as she could not break the curse herself. Instead, she aids other undead in their quest to do so.</p>

            <p>Shanalotte refers to herself as a "dragon child born via man." This suggests she possesses both human and dragon lineage, potentially similar to Priscilla from the first *Dark Souls*. Her appearance is human, but she may conceal dragon-like features, such as scales or subtle horns, hidden beneath her attire.</p>

            <p>Throughout the game, Shanalotte guides the player to seek the four Great Souls. Upon obtaining them, she directs the player to confront King Vendrick and ultimately Queen Nashandra. In the *Scholar of the First Sin* edition, Shanalotte reveals that Nashandra is a fragment of Manus, the primeval man, and urges the player to decide the world's fate.</p>

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
                <li><strong>Artificial Firekeeper</strong>: Some theories suggest that Shanalotte is an artificial firekeeper, created to manipulate souls and assist in leveling up. This aligns with her role in the game, where she helps the player enhance their abilities.</li>
                <li><strong>Aldia's Experiment</strong>: It's speculated that Aldia, obsessed with transcending the curse of undead, created Shanalotte as part of his experiments. Her existence may be a result of his attempts to merge dragon and human elements to overcome the limitations of mortality.</li>
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
            <p><strong>Location:</strong> Shanalotte resides in Majula, the game's central hub. She appears at various points throughout the game, providing guidance and assistance.</p>
            <p><strong>Dialogue:</strong> Her speech is often cryptic, filled with references to fate, dragons, and the curse of undead. She speaks of her creators and her purpose, offering the player insights into the world's mysteries.</p>
            <p><strong>Final Encounter:</strong> In the endgame, Shanalotte confronts the player, revealing her true nature and purpose. Depending on the player's choices, she may assist in linking the fire or offer an alternative path.</p>           
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