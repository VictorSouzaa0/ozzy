// src/pages/Discography.jsx

import styles from '../modules/Discography.module.css';

// As importações de imagens locais foram removidas

const albumsData = [
    {
        year: "1980",
        title: "Blizzard of Ozz",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Blizzard_of_ozz.jpg/250px-Blizzard_of_ozz.jpg",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzx4dZr-EaAcY7c5tuSyJnUGrH8F-s1S4sw&s",
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Bark_at_the_moon.jpg/250px-Bark_at_the_moon.jpg",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd9WKqu3u95yG3ONbiBapEuoZ98u9XpVFOw&s",
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