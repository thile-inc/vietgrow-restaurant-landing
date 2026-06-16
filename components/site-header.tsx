import Image from 'next/image'
import { Button } from '@/components/ui/button'

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
        <span className="text-xs font-medium text-muted-foreground">SPA</span>
      </div>
    </a>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#system" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#package" className="transition-colors hover:text-foreground">
            What you get
          </a>
          <a href="#results" className="transition-colors hover:text-foreground">
            Results
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </div>
        <Button asChild size="sm" className="rounded-full">
          <a href="#lead-form">Get Free Plan</a>
        </Button>
      </div>
    </header>
  )
}
