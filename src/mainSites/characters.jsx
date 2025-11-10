import Header from "../components/header"
import { useState } from "react";
import './mainCss/characters.css'
import Footer from "../components/footer";

const loreEntries = [
  { title: "The Emerald Herald", content: "The Emerald Herald, also known as Shanalotte, is a mysterious figure who aids the player throughout their journey. She offers guidance and support, including leveling up the player in exchange for souls. While her origins remain unclear, it is speculated that she is one of the few remaining remnants of an ancient order tasked with guiding the Undead. Her connection to the Firekeeper is evident, as she shares some of the same qualities, such as her ability to heal and assist the player. Shanalotte is also the one who gives the player the task of defeating the Old King and acquiring the Lord Soul fragments.", pageUrl: '/Shanalotte' },
  { title: "King Vendrick", content: "King Vendrick was the ruler of Drangleic and a key figure in Dark Souls 2. Known for his ambition, he sought to transcend humanity and achieve immortality by harnessing the power of the soul. However, his greed and lust for power ultimately led to his downfall. After an extensive war against the giants, Vendrick became consumed by his own power and lost his sanity. His soul was hollowed, and he now remains trapped in the ruins of Drangleic, an empty shell of the once great king. His tragic story mirrors the downfall of many rulers in the Dark Souls universe, driven by the desire for power at the cost of their humanity.", pageUrl: '/Vendrick' },
  { title: "Sir Alonne", content: "Sir Alonne was a wandering swordsman who helped the Old Iron King rise to power, only to leave when the king became corrupt. He's a master of the blade, swift and honorable. His memory is preserved as a challenge—one final test for any warrior brave enough to face him. Sir Alonne is one of the few characters in Dark Souls II with a strong sense of pride and honor, and his graceful death animation (when defeated without taking damage) suggests respect even in loss.", pageUrl: '/SirAlonne' },
  { title: "Aldia, scholar of the First Sin", content: "Aldia is the brother of King Vendrick and once a brilliant scholar who sought to understand the curse. He delved deep into forbidden experiments, creating abominations and challenging the very concept of the flame and the cycle. Eventually, he transcended his physical form and exists as a writhing mass of thought and power. Aldia questions the entire premise of the game's world—what if the cycle must be broken, not continued?", pageUrl: '/Aldia' },
  { title: "Benhart of Jugo", content: "Benhart of Jugo is a noble and valiant knight who appears throughout Dark Souls 2 as a helpful ally. He is a skilled warrior with a strong sense of honor and a desire to protect those who are weak or helpless. Benhart’s tragic fate is intertwined with the player’s journey. As the player advances through the game, Benhart is seen struggling against the Hollowing Curse. Despite his best efforts to fight it, Benhart eventually succumbs to it and becomes a hollow shell of his former self. His story reflects the central theme of the inevitability of death and decay in the Dark Souls series.", pageUrl: '/benhart' },
  { title: "Mild-Mannered Pate", content: "Mild-Mannered Pate is a somewhat comical character in Dark Souls 2. He initially appears as a friendly, easy-going NPC who offers the player advice and some helpful items. However, it is later revealed that Pate is not as mild-mannered as he seems. His role in the story is tied to betrayal and deception. He is encountered in various locations throughout the game, often encouraging the player to trust him, only to later reveal his true, self-serving nature. Pate represents the themes of mistrust and survival in the harsh world of Drangleic.", pageUrl: '/Pate' },
  { title: "The Firekeepers", content: "These three crones dwell in Things Betwixt and serve as gatekeepers to the cycle. Cryptic and mocking, they know far more than they say. They serve a role similar to the Fire Keepers of previous games, watching over the Undead and mocking the futility of their journey. They represent inevitability and the slow march of fate. Their laughter lingers long after you leave their hut.", pageUrl: '/TheFirekeepers' },
  { title: "Velstadt, the Royal Aegis", content: "Velstadt, the stalwart protector of King Vendrick, embodies unwavering loyalty and unyielding strength. Towering and clad in dark, imposing armor, he stands as the shield of the monarch, enforcing the king's will without question. Silent and relentless, he challenges any who dare approach the throne, his presence a grim reminder of duty and sacrifice. Though a servant of the crown, his tragic devotion hints at the cost of blind loyalty, and the shadow he casts lingers long after battle ends.", pageUrl: '/Velstadt' },
  { title: "Raime, the Fume Knight", content: "Raime, the Fume Knight, was once a proud and noble warrior, but devotion twisted into obsession. Clad in scorched, imposing armor, he wields a massive sword with unyielding fury, serving a cause that has long since decayed. Silent and relentless, he stalks the battlefield like a shadow of his former self, a tragic monument to duty corrupted by time and fire. Those who face him feel not just his strength, but the weight of his endless torment, and the ashes of his fury linger long after the clash is over.", pageUrl: '/Raime' },
  
];

function Body() {
    const [expanded, setExpanded] = useState({});

    const handleToggle = (index) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
    };
    return (
        <div className="character-page">
            <div id="loreContainer">
                {loreEntries.map((entry, index) => (
                <div onClick={() => handleToggle(index)} key={index} className="lore-entry">
                    <h2 >{entry.title}</h2>
                    {expanded[index] && <p>{entry.content}</p>}
                    {expanded[index] && entry.pageUrl && (
                    <button onClick={() => window.location.href = entry.pageUrl}
                    className="read-more-button"
                    >
                        Read More
                    </button>
                    )}
                </div>
                ))}
            </div>
        </div>
    );
}

export default function CharactersPage() {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}