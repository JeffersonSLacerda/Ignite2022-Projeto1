import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://avatars.githubusercontent.com/u/47826649?v=4"
          />
          <div className={styles.authorInfo}>
            <strong> Jefferson Lacerda </strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title='31 de Maio ás 08:13H' dateTime='2023-05-31 08:05:13'> 
          Publicado à 1h 
        </time>
      </header>

      <div className={styles.content}>
       <p> Fala galeraa </p>
       <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da </p>
       <p> Rocketseat, O nome do projeto é DoctorCare 🚀 </p>
       <p> <a href="#"> 👉 jane.design/doctorcare </a> </p>
       <p> <a href="#"> #novoprojeto #nlw #rocketseat </a> </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentátio!'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}