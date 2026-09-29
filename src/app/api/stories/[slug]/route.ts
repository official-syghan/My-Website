import { getStoryBySlug } from '@/data/stories'
import { NextResponse } from 'next/server'

interface RouteParams {
  params: Promise<{
    slug: string
  }>
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    return NextResponse.json(
      { message: 'Story not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(story)
}