import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only z-[100] bg-zinc-950 px-4 py-3 font-body text-sm text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Ir para o conteúdo principal
      </a>

      <Header />
      {children}
      <Footer />
    </div>
  )
}
