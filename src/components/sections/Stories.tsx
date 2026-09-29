import { StoryCard } from '@/components/cards/StoryCard'
import { Container } from '@/components/layout/Container'
import { stories } from '@/data/stories'

export function Stories(): React.JSX.Element {
  return (
    <section id="contos" className="scroll-mt-20 bg-white py-32 text-zinc-950">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
            Contos selecionados
          </p>

          <h2 className="font-heading text-5xl leading-none tracking-[0.04em] sm:text-6xl">
            HISTÓRIAS DE CARNE E OSSO
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </Container>
    </section>
  )
}
