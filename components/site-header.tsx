'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/vietgrow-logo.svg"
        alt="Vietgrow"
        width={36}
        height={36}
        className="h-9 w-9"
        priority
      />
      <div className="flex flex-col">
        <span className="font-heading text-xl font-semibold tracking-tight text-foreground leading-none">
          Vietgrow
        </span>
        <span className="text-xs font-medium text-muted-foreground">F&B</span>
      </div>
    </a>
  )
}

export function SiteHeader() {
  const { copy, toggleLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#system" className="transition-colors hover:text-foreground">
            {copy.header.how}
          </a>
          <a href="#package" className="transition-colors hover:text-foreground">
            {copy.header.package}
          </a>
          <a href="#results" className="transition-colors hover:text-foreground">
            {copy.header.results}
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            {copy.header.faq}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" size="sm" variant="outline" className="rounded-full px-3" aria-label={copy.lang.toggleLabel} onClick={toggleLanguage}>
            {copy.lang.next}
          </Button>
          <Button asChild size="sm" className="rounded-full">
            <a href="https://meet.brevo.com/vietgrowai" target="_blank" rel="noreferrer">{copy.header.cta}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
