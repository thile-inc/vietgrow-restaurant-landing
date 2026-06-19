import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ResultsStats } from '@/components/results-stats'
import { GrowthSystem } from '@/components/growth-system'
import { PackageSection } from '@/components/package-section'
import { CampaignPreviews } from '@/components/campaign-previews'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
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
        <GrowthSystem />
        <PackageSection />
        <CampaignPreviews />
        <FinalCta />
        <LeadForm />
        <Faq />
        <SiteFooter />
      </main>
    </LanguageProvider>
  )
}
