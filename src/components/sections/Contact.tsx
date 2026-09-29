'use client'

import { Container } from '@/components/layout/Container'
import { contactSchema, type ContactFormData } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'

export function Contact(): React.JSX.Element {
  const [isSuccess, setIsSuccess] = useState(false)
  const formDescriptionId = useId()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (_data: ContactFormData): Promise<void> => {
    setIsSuccess(false)

    await new Promise((resolve) => setTimeout(resolve, 1200))

    reset()
    setIsSuccess(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-zinc-950 py-24 text-zinc-100"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,4.2fr)_minmax(0,5.8fr)]">
          <div className="min-w-0">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              Contact
            </p>

            <h2 className="font-heading text-5xl leading-none tracking-[0.04em] text-white sm:text-6xl">
              TALK TO ME
            </h2>

            <p
              id={formDescriptionId}
              className="mt-8 max-w-md font-body text-lg leading-8 text-zinc-300"
            >
             For invitations, literary conversations or questions about Twisted Desires, please send a message using the form.
            </p>
          </div>

          <form
            aria-describedby={formDescriptionId}
            aria-label="Formulário de contato"
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-0 space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-body text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300"
              >
                Nome
              </label>

              <input
                id="name"
                type="text"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
                className="h-12 w-full border border-zinc-700 bg-transparent px-4 font-body text-base text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#A95633]"
                placeholder="Your Name"
              />

              {errors.name && (
                <p
                  id="name-error"
                  className="mt-2 font-body text-sm text-[#D4A373]"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-body text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300"
              >
                E-mail
              </label>

              <input
                id="email"
                type="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
                className="h-12 w-full border border-zinc-700 bg-transparent px-4 font-body text-base text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#A95633]"
                placeholder="officialsyghan@email.com"
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 font-body text-sm text-[#D4A373]"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-body text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300"
              >
                Mensagem
              </label>

              <textarea
                id="message"
                rows={7}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message')}
                className="w-full resize-none border border-zinc-700 bg-transparent px-4 py-3 font-body text-base leading-7 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#A95633]"
                placeholder="Write your message"
              />

              {errors.message && (
                <p
                  id="message-error"
                  className="mt-2 font-body text-sm text-[#D4A373]"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="inline-flex h-12 w-full items-center justify-center border border-white bg-white px-8 font-body text-base text-zinc-950 transition-colors hover:border-[#A95633] hover:bg-[#A95633] hover:text-white disabled:cursor-not-allowed disabled:border-zinc-700 disabled:bg-zinc-800 disabled:text-zinc-500 sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {isSuccess && (
              <p role="status" className="font-body text-base text-zinc-300">
                'Message sent successfully. We’ll get back to you soon.'
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}
