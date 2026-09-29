import { StoryCard } from '@/components/cards/StoryCard'
import type { Story } from '@/types'
import { render, screen } from '@testing-library/react'

const story: Story = {
  id: 'insignificancia',
  slug: 'insignificancia',
  title: 'Insignificância',
  excerpt: 'Um homem desperta todos os dias na mesma praça.',
  image: '/images/stories/insignificancia.png',
  readingTime: 1,
  content: 'Texto completo do conto.',
}

describe('StoryCard', () => {
  it('renders story title and excerpt', () => {
    render(<StoryCard story={story} />)

    expect(
      screen.getByRole('heading', { name: 'Insignificância' })
    ).toBeInTheDocument()
  })

  it('links to the individual story page', () => {
    render(<StoryCard story={story} />)

    expect(
      screen.getByRole('link', { name: /insignificância/i })
    ).toHaveAttribute('href', '/contos/insignificancia')
  })
})
