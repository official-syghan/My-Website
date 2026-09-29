import NotFound from '@/app/not-found'
import { render, screen } from '@testing-library/react'

describe('NotFound', () => {
  it('renders not found message and home link', () => {
    render(<NotFound />)

    expect(screen.getByText('404')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'PÁGINA NÃO ENCONTRADA' })
    ).toBeInTheDocument()

    expect(
      screen.getByText('Alguns caminhos terminam em lugar nenhum.')
    ).toBeInTheDocument()

    expect(screen.getByText('Este foi um deles.')).toBeInTheDocument()

    expect(
      screen.getByText('Mas ainda há histórias por aqui.')
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Voltar ao início' })
    ).toHaveAttribute('href', '/#inicio')
  })
})
