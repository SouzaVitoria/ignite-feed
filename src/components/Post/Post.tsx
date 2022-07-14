import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';

import styles from './Post.module.css';

interface PostProps {
  author: string
  job: string
  avatar: string
}

export function Post(props: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.avatar} />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.job}</span>
          </div>
        </div>

        <time title="13 de Julho às 08:54h" dateTime="2022-07-13 08:54:00">Publicado agora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite Lab | React, evento da Rocketseat. O nome do projeto é <strong>Event Platform</strong> 🚀
        </p>
        <p>👉<a href="#"> SouzaVitoria/eventplatform </a></p>
        <p>
          <a href="#"> #novoprojeto </a>
          <a href="#"> #ignitelab </a>
          <a href="#"> #rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}