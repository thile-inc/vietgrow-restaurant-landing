import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ResultsStats } from '@/components/results-stats'
import { PackageSection } from '@/components/package-section'
import { Faq } from '@/components/faq'
import { LeadForm } from '@/components/lead-form'
import { SiteFooter } from '@/components/site-footer'
import { LanguageProvider } from '@/components/language-provider'

export default function Page() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <SiteHeader />
        <Hero />
        <ResultsStats />
        <PackageSection />
        <LeadForm />
        <Faq />
        <SiteFooter />
      </main>
    </LanguageProvider>
  )
}
