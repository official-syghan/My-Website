import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'

export function About(): React.JSX.Element {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-zinc-100 py-32 text-zinc-950"
    >
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[minmax(0,5.6fr)_minmax(0,4.4fr)] lg:gap-16">
          <div className="relative min-h-[440px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:min-h-[640px]">
            <Image
              src="/images/SYGHAN.jpeg"
              alt="Cabral Correia, autor de Carne e Osso"
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover grayscale"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              About the author
            </p>

            <h2 className="font-heading text-5xl leading-none tracking-[0.04em] text-zinc-950 sm:text-6xl">
              SYGHAN
            </h2>

            <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
              <p>
                Born and based in Mumbai, Maharashtra, Syghan is an upcoming writer whose work explores desire, guilt, loneliness, intimacy, and the contradictions of everyday life.
              </p>

              <p>
               His writing draws primarily from incidents, experiences, and observations from his own life, transforming real moments into fictional narratives while preserving their emotional truth.
              </p>

              <p>
                A few elements come from imagination, while Twisted Desires blends real experiences with fictional situations, exploring passion, temptation, and complicated choices.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
