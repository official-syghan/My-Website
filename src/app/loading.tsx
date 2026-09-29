'use client'

import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'

export default function Loading(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 text-zinc-950">
      <div className="flex flex-col items-center text-center">
        <Hourglass size={40} bgOpacity={0.1} speed={1.75} color="#A95633" />

        <p className="mt-6 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
          Carregando
        </p>
      </div>
    </main>
  )
}
