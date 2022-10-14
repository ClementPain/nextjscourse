export interface Post {
  title?: string
  date?: string
  excerpt?: string
  image?: string
  slug: string
  content?: string
  isFeatured?: boolean
}

export interface PostMarkdownData {
  title: string
  date: string
  excerpt: string
  image: string
  isFeatured: boolean
}

export interface ContactData {
  email: string
  name: string
  message: string
}

export type OnAddedContact = (contactData: ContactData) => void

export type NotificationStatus = 'pending' | 'error' | 'success' | null