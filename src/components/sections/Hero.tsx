import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const purchaseUrl =
  'https://t.me/Syghan_Official'

export function Hero(): React.JSX.Element {
  return (
    <section id="home" className="bg-zinc-100 pt-20 text-zinc-950">
      <div className="relative">
        <Container>
          <div className="grid grid-cols-1 items-end gap-12 pt-14 pb-10 sm:pt-20 lg:grid-cols-[minmax(0,4.8fr)_minmax(0,5.2fr)] lg:pt-24 lg:pb-14">
            <div className="relative z-10 flex justify-center lg:justify-start lg:-mb-72">
              <Image
                src="/images/Book Cover.png"
                alt="Capa do livro Carne e Osso, de Cabral Correia"
                width={459}
                height={616}
                priority
                className="h-auto w-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[340px] lg:w-[390px]"
              />
            </div>

            <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                DARK STORIES
              </p>

              <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
                TWISTED DESIRES
              </h1>
            </div>
          </div>
        </Container>

        <div className="bg-zinc-950 text-zinc-100">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4.8fr)_minmax(0,5.2fr)]">
              <div className="hidden lg:block" />

              <div className="flex min-w-0 flex-col items-center pt-10 pb-16 text-center sm:pb-20 lg:items-start lg:pt-14 lg:pb-24 lg:text-left">
                <p className="max-w-xl font-body text-xl leading-9 text-zinc-100 sm:text-xl sm:leading-10">
                  Lust, longing, guilt, love and quiet betrayals. Intimate stories built from glances, whispers and encounters that leave invisible marks.
                </p>

                <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <Button
                    href={purchaseUrl}
                    external
                    variant="outline"
                    tone="dark"
                  >
                   Read Stories
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
