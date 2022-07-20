export interface PostContent {
  type: "paragraph" | "link"
  content: string
}

export interface PostProps {
  key?: string
  id?: string
  author: Author
  publishedAt: Date
  content: PostContent[]
}

export interface CommentsProps {
  content: {
    id: number
    value: string
  }
  onDeleteComment?: (commentIdToDelete: number) => void
}

export interface AvatarProps {
  hasBorder?: boolean
  src: string
}

export interface Author {
  avatarUrl: string
  name: string
  role: string
}