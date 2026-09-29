import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'
import Image from 'next/image'

const purchaseUrl =
  'https://t.me/Syghan_Official'

export const metadata: Metadata = {
  title: 'Carne e Osso',
  description:
    'Conheça Carne e Osso, livro de estreia de Cabral Correia: uma coletânea de 26 contos realistas sobre desejo, violência, amor, desigualdade e os absurdos do cotidiano.',
  openGraph: {
    title: 'Carne e Osso — Cabral Correia',
    description:
      'Livro de estreia de Cabral Correia, Carne e Osso reúne 26 contos realistas escritos ao longo de 22 anos.',
    images: [
      {
        url: '/images/carne-e-osso-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Capa do livro Carne e Osso, de Cabral Correia',
      },
    ],
    locale: 'pt_BR',
    type: 'book',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carne e Osso — Cabral Correia',
    description:
      'Conheça Carne e Osso, coletânea de contos realistas de Cabral Correia.',
    images: ['/images/carne-e-osso-cover.jpg'],
  },
}

export default function LivroPage(): React.JSX.Element {
  return (
    <main id="main-content" className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-20">
            <div className="flex justify-center lg:sticky lg:top-28 lg:justify-start">
              <Image
                src="/images/carne-e-osso-cover.jpg"
                alt="Capa do livro Carne e Osso, de Cabral Correia"
                width={459}
                height={616}
                priority
                className="h-auto w-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[340px] lg:w-[390px]"
              />
            </div>

            <div className="min-w-0">
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                Livro de estreia
              </p>

              <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
                CARNE E OSSO
              </h1>

              <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
                <p>
                  Em <em>Carne e Osso</em>, Cabral Correia reúne 26 contos
                  escritos ao longo de 22 anos. Ambientadas em uma Fortaleza
                  ficcional e em cidades inspiradas no interior cearense, as
                  narrativas acompanham personagens comuns diante de escolhas
                  difíceis, relações ambíguas e situações em que afeto,
                  brutalidade e sobrevivência se confundem.
                </p>

                <p>
                  Embora possam ser lidos de forma independente, os contos
                  estabelecem relações sutis entre si. Personagens, ruas, bares
                  e acontecimentos reaparecem ao longo da leitura, criando ecos
                  entre as narrativas e compondo um mesmo universo ficcional.
                </p>

                <p>
                  Com linguagem direta e atenção aos detalhes, Carne e Osso
                  percorre encontros, perdas, obsessões e gestos capazes de
                  alterar destinos. Uma coletânea para leitores de ficção
                  contemporânea, literatura urbana e histórias centradas na
                  complexidade das relações humanas.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 font-body text-sm text-zinc-700 sm:grid-cols-4">
                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Editora
                  </p>
                  <p className="mt-2">RDS</p>
                </div>

                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Ano
                  </p>
                  <p className="mt-2">2025</p>
                </div>

                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Páginas
                  </p>
                  <p className="mt-2">235</p>
                </div>

                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Contos
                  </p>
                  <p className="mt-2">26</p>
                </div>
              </div>

              <div className="mt-10 border-l-2 border-[#A95633] pl-5 font-body text-base leading-7 text-zinc-700">
                <p>
                  Disponível no Mercado Livre e também na Livraria Leitura do
                  Shopping RioMar Fortaleza.
                </p>

                <p className="mt-3">
                  Contém temas e linguagem destinados ao público adulto.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={purchaseUrl} external tone="light">
                  Comprar no Mercado Livre
                </Button>

                <Button href="/#contos" variant="outline" tone="light">
                  Ler contos
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
