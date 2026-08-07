


export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] py-12 text-[hsl(var(--primary-foreground))]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-10 border-b border-[hsl(var(--primary-foreground)/.16)] pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[250px] text-sm leading-relaxed text-[hsl(var(--primary-foreground)/.58)]">
              The capability partner for people leaders building what’s next.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-[hsl(var(--primary-foreground)/.25)]"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-[hsl(var(--primary-foreground)/.25)]"
                data-testid="link-social-instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
          {[
            [
              "Explore",
              [
                ["Approach", "#approach"],
                ["Solutions", "#solutions"],
                ["Impact", "#impact"],
                ["Stories", "#stories"],
              ],
            ],
            [
              "Connect",
              [
                ["Talk to our team", "#contact"],
                ["hello@accredian.com", "mailto:hello@accredian.com"],
                ["LinkedIn", "https://www.linkedin.com"],
              ],
            ],
            [
              "Offices",
              [
                ["London", "#contact"],
                ["New York", "#contact"],
                ["Singapore", "#contact"],
              ],
            ],
          ].map(([title, items]) => (
            <div key={title as string}>
              <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--secondary))]">
                {title as string}
              </h3>
              <div className="space-y-3">
                {(items as string[][]).map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-sm text-[hsl(var(--primary-foreground)/.62)] transition-colors hover:text-[hsl(var(--primary-foreground))]"
                    data-testid={`link-footer-${label.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary-foreground)/.4)] sm:flex-row">
          <span>© 2024 Accredian Enterprise</span>
          <div className="flex gap-6">
            <a href="#contact" data-testid="link-footer-privacy">
              Privacy
            </a>
            <a href="#contact" data-testid="link-footer-terms">
              Terms
            </a>
            <span>Made for meaningful work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}