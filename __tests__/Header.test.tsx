import { Header } from '@/components/layout/Header'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Header', () => {
  it('renders navigation links with correct section anchors', () => {
    render(<Header />)

    const desktopNavigation = screen.getByRole('navigation', {
      name: 'Principal',
    })

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Início' })
    ).toHaveAttribute('href', '/#inicio')

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Sobre' })
    ).toHaveAttribute('href', '/#sobre')

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Contos' })
    ).toHaveAttribute('href', '/#contos')

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Contato' })
    ).toHaveAttribute('href', '/#contato')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()

    render(<Header />)

    await user.click(
      screen.getByRole('button', { name: 'Abrir menu de navegação' })
    )

    expect(
      screen.getByRole('navigation', { name: 'Menu mobile' })
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Fechar menu de navegação' })
    )

    expect(
      screen.queryByRole('navigation', { name: 'Menu mobile' })
    ).not.toBeInTheDocument()
  })
})
