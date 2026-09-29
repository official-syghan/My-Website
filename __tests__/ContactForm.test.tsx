import { Contact } from '@/components/sections/Contact'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Contact', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('shows validation errors', async () => {
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    })

    render(<Contact />)

    await user.type(screen.getByLabelText('Nome'), 'A')
    await user.type(screen.getByLabelText('E-mail'), 'email-invalido')
    await user.type(screen.getByLabelText('Mensagem'), 'Curta')

    expect(
      await screen.findByText('Nome deve ter ao menos 2 caracteres')
    ).toBeInTheDocument()

    expect(await screen.findByText('E-mail inválido')).toBeInTheDocument()

    expect(
      await screen.findByText('Mensagem deve ter ao menos 10 caracteres')
    ).toBeInTheDocument()
  })

  it('submits valid data and shows success message', async () => {
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    })

    render(<Contact />)

    await user.type(screen.getByLabelText('Nome'), 'Thiago Correia')
    await user.type(screen.getByLabelText('E-mail'), 'thiago@email.com')
    await user.type(
      screen.getByLabelText('Mensagem'),
      'Olá, gostaria de falar sobre o livro.'
    )

    const submitButton = screen.getByRole('button', {
      name: 'Enviar mensagem',
    })

    await waitFor(() => {
      expect(submitButton).toBeEnabled()
    })

    await user.click(submitButton)

    expect(
      await screen.findByRole('button', { name: 'Enviando...' })
    ).toBeDisabled()

    await act(async () => {
      jest.advanceTimersByTime(1200)
    })

    expect(
      await screen.findByText(/Mensagem enviada com sucesso/i)
    ).toBeInTheDocument()
  })
})
