import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';

import styles from './Post.module.css';
import { PostProps } from '../../typings/typings';

export function Post({ author, publishedAt }: PostProps) {
  const date = new Date(publishedAt)
  const publishedDateFormatted = format(new Date(date), "d' de 'LLLL' de 'yyyy' às 'HH':'mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toString()}> {publishedDateRelativeToNow} </time>
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