export interface Story {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  readingTime: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  photo: string
  text: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
