import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { getStoryBySlug, stories } from '@/data/stories'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface StoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams(): { slug: string }[] {
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    return {
      title: 'Conto não encontrado',
    }
  }

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} — Cabral Correia`,
      description: story.excerpt,
      images: [
        {
          url: story.image,
          width: 1200,
          height: 630,
          alt: `Imagem do conto ${story.title}`,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${story.title} — Cabral Correia`,
      description: story.excerpt,
      images: [story.image],
    },
  }
}

export default async function StoryPage({
  params,
}: StoryPageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    notFound()
  }

  const paragraphs = story.content
    .trim()
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <main className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      <article className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Link
            href="/#contos"
            className="inline-flex font-body text-base text-[#A95633] transition-colors hover:text-zinc-950"
          >
            ← Voltar para os contos
          </Link>

          <header className="mx-auto mt-10 max-w-4xl text-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              {story.readingTime} min de leitura
            </p>

            <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
              {story.title}
            </h1>
          </header>

          <div className="relative mx-auto mt-12 aspect-[16/9] max-w-6xl overflow-hidden bg-zinc-200 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <Image
              src={story.image}
              alt={`Imagem do conto ${story.title}`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover grayscale"
            />
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-7 font-body text-xl leading-9 text-zinc-800 sm:text-2xl sm:leading-10">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${story.slug}-${index}`}
                className="indent-8 text-justify hyphens-auto"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="mx-auto mt-20 max-w-4xl border-t border-zinc-300 pt-10 text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              Gostou deste conto?
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-8 text-zinc-700">
              Este texto faz parte de <em>Carne e Osso</em>, coletânea de 26
              contos de Cabral Correia.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/livro" tone="light">
                Conhecer Carne e Osso
              </Button>

              <Button href="/#contos" variant="outline" tone="light">
                Voltar aos contos
              </Button>
            </div>
          </footer>
        </Container>
      </article>
    </main>
  )
}
