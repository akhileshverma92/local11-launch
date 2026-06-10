export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/60">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href="https://t.co/FOKsUJe57J"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp Community
          </a>
          <a href="#early-access" className="hover:text-foreground transition-colors">
            Join Waitlist
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LOCAL11. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
