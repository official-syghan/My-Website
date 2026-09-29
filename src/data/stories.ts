import type { Story } from '@/types'

import { bemTeVi } from '@/content/bem-te-vi'
import { cafeETapioca } from '@/content/cafe-e-tapioca'
import { gracasADeus } from '@/content/gracas-a-deus'
import { insignificancia } from '@/content/insignificancia'

export const stories: Story[] = [
  {
    id: 'insignificancia',
    slug: 'insignificancia',
    title: 'Insignificância',
    excerpt:
      'Despertando todos os dias na mesma praça, um homem alimenta fantasias sobre uma mulher inalcançável e inveja a vida aparentemente perfeita de seu rival.',
    image: '/images/stories/insignificancia.png',
    readingTime: 1,
    content: insignificancia,
  },
  {
    id: 'cafe-e-tapioca',
    slug: 'cafe-e-tapioca',
    title: 'Café e Tapioca',
    excerpt:
      'Apaixonado por uma garçonete, um estudante transforma a rotina de uma cafeteria em palco para sonhos românticos e inseguranças difíceis de vencer.',
    image: '/images/stories/cafe-e-tapioca.png',
    readingTime: 6,
    content: cafeETapioca,
  },
  {
    id: 'gracas-a-deus',
    slug: 'gracas-a-deus',
    title: 'Graças a Deus',
    excerpt:
      'Enquanto aguarda notícias do pai internado durante a pandemia, uma trabalhadora doméstica vê de perto o contraste entre privilégio e sofrimento.',
    image: '/images/stories/gracas-a-deus.png',
    readingTime: 2,
    content: gracasADeus,
  },
  {
    id: 'bem-te-vi',
    slug: 'bem-te-vi',
    title: 'Bem-te-vi',
    excerpt:
      'Confinado pelas limitações impostas pelo mundo ao seu redor, um garoto encontra num pequeno pássaro uma inesperada lição sobre liberdade.',
    image: '/images/stories/bem-te-vi.png',
    readingTime: 4,
    content: bemTeVi,
  },
]

export const getStoryBySlug = (slug: string): Story | undefined => {
  return stories.find((story) => story.slug === slug)
}
