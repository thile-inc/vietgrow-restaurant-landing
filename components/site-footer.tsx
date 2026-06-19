import { Logo } from '@/components/site-header'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Paid-ad growth systems for restaurants and food brands.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:items-end">
          <a
            href="#lead-form"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            Get your free restaurant growth plan
          </a>
          <p>© {new Date().getFullYear()} Vietgrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
