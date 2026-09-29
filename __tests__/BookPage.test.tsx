import LivroPage from '@/app/(site)/livro/page'
import { render, screen } from '@testing-library/react'

describe('BookPage', () => {
  it('renders book information', () => {
    render(<LivroPage />)

    expect(
      screen.getByRole('heading', { name: 'CARNE E OSSO' })
    ).toBeInTheDocument()

    expect(screen.getByText('RDS')).toBeInTheDocument()
    expect(screen.getByText('2025')).toBeInTheDocument()
    expect(screen.getByText('235')).toBeInTheDocument()
    expect(screen.getByText('26')).toBeInTheDocument()

    expect(
      screen.getByText(/Contém temas e linguagem destinados ao público adulto/i)
    ).toBeInTheDocument()
  })

  it('renders purchase and stories buttons with correct links', () => {
    render(<LivroPage />)

    expect(
      screen.getByRole('link', { name: 'Comprar no Mercado Livre' })
    ).toHaveAttribute('href', expect.stringContaining('mercadolivre.com.br'))

    expect(screen.getByRole('link', { name: 'Ler contos' })).toHaveAttribute(
      'href',
      '/#contos'
    )
  })
})
