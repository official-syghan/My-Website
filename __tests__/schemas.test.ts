import { contactSchema } from '@/lib/schemas'

describe('contactSchema', () => {
  it('rejects short name', () => {
    const result = contactSchema.safeParse({
      name: 'A',
      email: 'valid@email.com',
      message: 'Mensagem válida.',
    })

    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({
      name: 'Thiago',
      email: 'email-invalido',
      message: 'Mensagem válida.',
    })

    expect(result.success).toBe(false)
  })

  it('rejects short message', () => {
    const result = contactSchema.safeParse({
      name: 'Thiago',
      email: 'valid@email.com',
      message: 'Curta',
    })

    expect(result.success).toBe(false)
  })

  it('accepts valid data', () => {
    const result = contactSchema.safeParse({
      name: 'Thiago Correia',
      email: 'thiago@email.com',
      message: 'Mensagem válida para contato.',
    })

    expect(result.success).toBe(true)
  })
})
