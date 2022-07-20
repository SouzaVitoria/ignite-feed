import { ThumbsUp, Trash } from 'phosphor-react';
import { CommentsProps } from '../../typings/typings';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }: CommentsProps) {
  const handleDeleteComment = () => onDeleteComment(content.id)

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/SouzaVitoria.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitória Souza</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p> {content.value} </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}