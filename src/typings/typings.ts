export interface PostProps {
  key: string
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  publishedAt: Date
  content: {
    type: string
    content: string
  }[]
}
