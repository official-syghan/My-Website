import SiteLayout from '@/app/(site)/layout'
import Home from '@/app/(site)/page'
import { Header } from '@/components/layout/Header'
import { Contact } from '@/components/sections/Contact'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('accessibility improvements', () => {
  it('renders a skip link to the main content', async () => {
    const user = userEvent.setup()

    render(
      <SiteLayout>
        <main id="main-content">Conteúdo principal</main>
      </SiteLayout>
    )

    const skipLink = screen.getByRole('link', {
      name: 'Ir para o conteúdo principal',
    })

    expect(skipLink).toHaveAttribute('href', '#main-content')

    await user.tab()

    expect(skipLink).toHaveFocus()
  })

  it('renders home page with main content landmark', () => {
    render(<Home />)

    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })

  it('marks active header navigation item with aria-current', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Início' })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('sets aria-invalid when contact fields are invalid', async () => {
    const user = userEvent.setup()

    render(<Contact />)

    const nameInput = screen.getByLabelText('Nome')

    await user.type(nameInput, 'A')

    await waitFor(() => {
      expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    })
  })
})
