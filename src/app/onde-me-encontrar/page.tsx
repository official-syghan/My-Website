import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const purchaseUrl =
  'https://produto.mercadolivre.com.br/MLB-4687862395-carne-e-osso-cabral-correia-coletnea-de-contos-contemporneos-literatura-brasileira-livro-novo-1a-edico-_JM'

export const metadata: Metadata = {
  title: 'Onde me encontrar',
  description:
    'Links oficiais de Cabral Correia: site, Instagram, Threads, contato e onde comprar Carne e Osso.',
  openGraph: {
    title: 'Onde me encontrar — Cabral Correia',
    description:
      'Links oficiais de Cabral Correia: site, Instagram, Threads, contato e onde comprar Carne e Osso.',
    images: [
      {
        url: '/images/cabral-correia-pb.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cabral Correia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onde me encontrar — Cabral Correia',
    description:
      'Links oficiais de Cabral Correia: site, Instagram, Threads, contato e onde comprar Carne e Osso.',
    images: ['/images/cabral-correia-pb.jpeg'],
  },
}

export default function OndeMeEncontrarPage(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <Image
          src="/images/cabral-correia-pb.jpeg"
          alt="Cabral Correia"
          width={220}
          height={220}
          priority
          className="mx-auto rounded-full border border-zinc-300 object-cover"
        />

        <h1 className="mt-8 font-heading text-6xl tracking-[0.12em] text-zinc-950">
          CABRAL CORREIA
        </h1>

        <p className="mt-6 font-body text-xl leading-9 text-zinc-700">
          Escritor cearense.
          <br />
          Autor de <em>Carne e Osso</em>.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 bg-zinc-950 px-6 font-body text-lg text-white transition-colors hover:border-[#A95633] hover:bg-[#A95633]"
          >
            Comprar Carne e Osso
          </a>

          <a
            href="https://www.cabralcorreia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Site oficial
          </a>

          <Link
            href="/livro"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Onde encontrar o livro
          </Link>

          <a
            href="https://instagram.com/cabralcorreia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Instagram
          </a>

          <a
            href="https://www.threads.com/@cabralcorreia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Threads
          </a>

          <Link
            href="/#contato"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Contato
          </Link>
        </div>
      </div>
    </main>
  )
}
