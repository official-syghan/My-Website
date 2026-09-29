import { Button } from '@/components/ui/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('renders an internal Next link', () => {
    render(<Button href="/livro">Saiba mais</Button>)

    expect(screen.getByRole('link', { name: 'Saiba mais' })).toHaveAttribute(
      'href',
      '/livro'
    )
  })

  it('renders an external link with safe attributes', () => {
    render(
      <Button href="https://example.com" external>
        Comprar
      </Button>
    )

    const link = screen.getByRole('link', { name: 'Comprar' })

    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
