import styles from './characterCss/SirAlonne.module.css'
import song from './characterAssets/SirAlonne.mp3'
import SA1 from './characterAssets/sir-alonne.jpg'
import SA2 from './characterAssets/sir-alonne1.jpg'
import SA3 from './characterAssets/sir-alonne2.jpg'
import SA4 from './characterAssets/sir-alonne3.jpg'
import Header from '../components/header'
import Footer from '../components/footer'

function Body() {
    return(
     <div className={styles.characterPage}>
        <a href="characters" className={styles.backButton}>Back to character page</a>

        <div className={styles.characterImage}>
            <img src={SA1} alt="0" />
        </div>

        <section className={styles.characterLore}>
            <h2>Sir Alonne</h2>
            <p>Sir Alonne was a legendary swordsman who served the Old Iron King with unmatched loyalty and honor. A master of the blade, he trained the king's knights and helped forge a mighty empire. Yet when his liege fell to ambition and corruption, Sir Alonne departed in silent disappointment. His spirit endures in memory, ever poised in eternal duels of pride and discipline.</p>
            <h3>Lore</h3>
            <p>Sir Alonne's tale begins in the distant eastern lands, where he earned renown as a disciplined and honorable warrior. Drawn by the promise of greatness, he journeyed west to serve the Old Iron King, becoming his most trusted general and mentor to his armies. Under Alonne's guidance, the kingdom rose to unmatched strength and power.</p>

            <p>But as the Iron King's ambition grew, so too did his corruption. The once-proud ruler was consumed by greed and arrogance, turning his empire into a furnace of conquest. Disillusioned, Sir Alonne chose the path of honor—departing in silence rather than serving a corrupted throne. His absence marked the beginning of the Iron King's downfall.</p>

            <p>Legends say that Sir Alonne later faced his greatest challenge in a final duel, testing his resolve and skill to the very end. Those who encounter his spirit within the Iron Keep's memory witness the elegance of his blade and the unyielding pride of a true warrior—one who sought death on his own terms, bound forever to the art of the sword.</p>


            <h3>Theories and Speculations</h3>
            <ul>
                <li><strong>Noble Samurai-Warrior:</strong> Some fans theorize that Alonne embodies the archetype of an honorable samurai: devoted to his lord, but unwilling to overlook moral decay. His leaving at the peak of the Iron King's reign suggests he may have refused to serve a corrupted regime.</li>  
                <li><strong>Unseen Redemption:</strong> By departing in search of unknown lands, Alonne might be on a quest for redemption or personal purpose beyond the Iron King's realm. He could be seeking a place where his ideals still hold value.</li>  
                <li><strong>Seppuku as Honor:</strong> Sir Alonne has a special “seppuku” death animation if defeated without taking damage — some interpret this as him preserving his honor by choosing death on his own terms.</li>  
                <li><strong>Memory vs Reality:</strong> Since the fight takes place in the “Memory of the Old Iron King,” some believe that this Alonne is a projection or echo — not the real Alonne, but a memory of their past relationship.</li>  

                <li><strong>The Paradox of His Fate:</strong> It is said that Sir Alonne left the Iron Keep by his own will, but when the player enters the Memory of the Old Iron King, they encounter and slay him in the past. This mirrors the confirmed time alteration seen in the Giant Lord's memory, where defeating him reshapes the past itself. If this holds true, then Sir Alonne may have never truly left at all; his death at the player's hand becomes the actual end of his tale, rewriting history and turning his supposed departure into legend. His lingering spirit could be the echo of this paradox—caught between the honor of leaving and the tragedy of dying, bound forever to the blade and the cycle of time that defines the cursed world.</li>
            </ul>


            <div className={styles.characterSong}>
                <h3>Steel Before Shame, By Boireas</h3>
                <audio controls>
                    <source src={song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3>Visual Gallery</h3>
            <div className={styles.gallery}>
                <img src={SA2} alt="1" style={{height: "300px", width: "200px"}}/>
                <img src={SA3} alt="2" style={{height: "300px", width: "300px"}}/>
                <img src={SA4} alt="3" style={{height: "300px", width: "420px"}}/>
            </div>

            <h3>Additional Information</h3>
            <p><strong>Location:</strong> Sir Alonne is found within the Memory of the Old Iron King, accessed through the Old Iron Keep via the Iron Passage in the Crown of the Old Iron King DLC.</p>
            <p><strong>Boss Fight Mechanics:</strong> He uses a fast katana with bleed, performs dashing slashes, and can charge a dark projectile. When his health drops to a certain point, his attacks become more aggressive.</p>  
            <p><strong>Summons:</strong> Drifter Swordsman Aidel and Steel-willed Lorrie can be summoned for the fight.</p>  
            <p><strong>Drop:</strong> Defeating him gives the Soul of Sir Alonne and pieces of his armor.</p>        
        </section>
     </div>   
    )
}

export default function SirAlonne() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}