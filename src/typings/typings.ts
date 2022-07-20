export interface PostProps {
  key?: string
  id?: string
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  publishedAt: Date
  content: {
    type: "paragraph" | "link"
    content: string
  }[]
}

export interface CommentsProps {
  content: {
    id: number
    value: string
  }
  onDeleteComment?: (content: number) => void
}