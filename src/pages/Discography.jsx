import styles from '../modules/Discography.module.css';

// Guardando os dados dos álbuns em um array de objetos
const albumsData = [
    {
        year: "1980",
        title: "Blizzard of Ozz",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/90/Ozzy_Osbourne_-_Blizzard_of_Ozz.jpg",
        songs: [
            "I Don't Know",
            "Crazy Train",
            "Goodbye to Romance",
            "Dee",
            "Suicide Solution",
            "Mr. Crowley",
            "No Bone Movies",
            "Revelation (Mother Earth)",
            "Steal Away (The Night)"
        ]
    },
    {
        year: "1981",
        title: "Diary of a Madman",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/Ozzy_Osbourne_-_Diary_of_a_Madman.jpg",
        songs: [
            "Over the Mountain",
            "Flying High Again",
            "You Can't Kill Rock and Roll",
            "Believer",
            "Little Dolls",
            "Tonight",
            "S.A.T.O.",
            "Diary of a Madman"
        ]
    },
    {
        year: "1983",
        title: "Bark at the Moon",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0f/Ozzy_Osbourne_-_Bark_at_the_Moon.jpg",
        songs: [
            "Bark at the Moon",
            "You're No Different",
            "Now You See It (Now You Don't)",
            "Rock 'n' Roll Rebel",
            "Centre of Eternity",
            "So Tired",
            "Slow Down",
            "Waiting for Darkness"
        ]
    },
    {
        year: "1991",
        title: "No More Tears",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/04/Ozzy-osbourne-no-more-tears.jpg",
        songs: [
            "Mr. Tinkertrain",
            "I Don't Want to Change the World",
            "Mama, I'm Coming Home",
            "Desire",
            "No More Tears",
            "S.I.N.",
            "Hellraiser",
            "Time After Time",
            "Zombie Stomp",
            "A.V.H.",
            "Road to Nowhere"
        ]
    }
];

export default function Discography() {
    return (
        <div className={styles.discographyPage}>
            <h1>Discografia Solo</h1>
            <div className={styles.albumGrid}>
                {albumsData.map((album) => (
                    <div key={album.title} className={styles.albumCard}>
                        <img src={album.imageUrl} alt={`Capa do álbum ${album.title}`} className={styles.albumCover} />
                        <div className={styles.albumInfo}>
                            <h2>{album.title}</h2>
                            <p className={styles.albumYear}>{album.year}</p>
                            <ul className={styles.songList}>
                                {album.songs.map((song) => (
                                    <li key={song}>{song}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}