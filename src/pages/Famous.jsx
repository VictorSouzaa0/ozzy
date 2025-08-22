import styles from '../modules/Famous.module.css';

const famousSongs = [
  { title: 'Crazy Train', videoUrl: 'https://www.youtube.com/watch?v=RMR5zf1J12U' },
  { title: "Mama, I'm Coming Home", videoUrl: 'https://www.youtube.com/watch?v=K0siYUjV9UM' },
  { title: 'No More Tears', videoUrl: 'https://www.youtube.com/watch?v=Cdg_f_X2p6g' },
  { title: 'Mr. Crowley', videoUrl: 'https://www.youtube.com/watch?v=G3LvhdFEOqs' },
  { title: 'Bark at the Moon', videoUrl: 'https://www.youtube.com/watch?v=F89-MOy7Xfg' },
  { title: 'Shot in the Dark', videoUrl: 'https://www.youtube.com/watch?v=VB_v8_Al-M0' },
  { title: 'Dreamer', videoUrl: 'https://www.youtube.com/watch?v=2K_m8_I11iA' },
  { title: 'Over the Mountain', videoUrl: 'https://www.youtube.com/watch?v=c_e9-3dBU3A' }
];

export default function Famous() {
  return (
    <div className={styles.famousPage}>
      <h1>Maiores Sucessos</h1>
      <p>Uma coleção de alguns dos sons mais icônicos da carreira solo de Ozzy Osbourne.</p>
      <div className={styles.songContainer}>
        <ul className={styles.songList}>
          {famousSongs.map((song) => (
            <li key={song.title} className={styles.songItem}>
              <a 
                href={song.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.songLink}
              >
                {song.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}