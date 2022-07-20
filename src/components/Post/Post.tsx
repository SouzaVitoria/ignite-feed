import { useEffect, useState, FormEvent } from "react";
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import { CommentsProps, PostProps } from '../../typings/typings';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }: PostProps) {
  const [commentText, setCommentText] = useState<string>("")
  const [comments, setComments] = useState<CommentsProps[]>([])
  const date = new Date(publishedAt)
  const publishedDateFormatted = format(new Date(date), "d' de 'LLLL' de 'yyyy' às 'HH':'mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })

  useEffect(() => {
    const loadComments = async () => {
      const response = await fetch("http://localhost:3004/comments")
      const data = await response.json()
      setComments(data)
    }
    loadComments()
  }, [])

  const handleCreateNewComment = async (event: FormEvent) => {
    event.preventDefault()

    setComments([
      ...comments,
      {
        id: comments.length + 1,
        content: commentText
      }
    ])

    setCommentText("")
  }

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
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p> {line.content}</p>
          } else if (line.type === "link") {
            return <p><a href="#"> {line.content} </a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          onChange={event => setCommentText(event.target.value)}
          value={commentText}
          required
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment: CommentsProps) => {
          return <Comment key={comment.id} content={comment.content} />
        })}
      </div>
    </article>
  )
}