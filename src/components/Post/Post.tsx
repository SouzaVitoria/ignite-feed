import { useState, FormEvent, InvalidEvent } from "react";
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
  const isNewCommentEmpty = commentText.length === 0

  const handleCreateNewComment = async (event: FormEvent) => {
    event.preventDefault()

    setComments([
      ...comments,
      {
        content: {
          id: comments.length + 1,
          value: commentText
        }
      }
    ])

    setCommentText("")
  }

  const deleteComment = (commentIdToDelete: number) => {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.content.id !== commentIdToDelete)
    setComments(commentsWithoutDeletedOne)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório")
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
            return <p key={line.content}> {line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="#"> {line.content} </a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          onChange={event => {
            event.target.setCustomValidity("")
            setCommentText(event.target.value)
          }}
          value={commentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment: CommentsProps) => {
          return (
            <Comment
              key={comment.content.id}
              content={comment.content}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}