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
