import StoryPage from '@/app/(site)/contos/[slug]/page'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

describe('StoryPage', () => {
  it('renders story content and final CTA', async () => {
    const page = await StoryPage({
      params: Promise.resolve({
        slug: 'insignificancia',
      }),
    })

    render(page)

    expect(
      screen.getByRole('heading', { name: 'Insignificância' })
    ).toBeInTheDocument()

    expect(screen.getByText(/min de leitura/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Conhecer Carne e Osso' })
    ).toHaveAttribute('href', '/livro')

    expect(
      screen.getByRole('link', { name: 'Voltar aos contos' })
    ).toHaveAttribute('href', '/#contos')
  })
})
