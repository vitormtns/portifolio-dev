import type { SiteContent } from "@/lib/i18n";

type FooterProps = {
  t: SiteContent;
};

export default function Footer({ t }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-white/10 bg-transparent px-5 py-16 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent-blue/90">{t.footer.label}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">{t.footer.title}</h2>
          <a
            href="mailto:mtns.vitor@gmail.com"
            aria-label={t.footer.emailAria}
            className="focus-ring mt-5 inline-block rounded-md text-lg text-white/92 underline decoration-white/30 underline-offset-4"
          >
            mtns.vitor@gmail.com
          </a>
        </div>
        <div className="space-y-2 text-sm text-white/70">
          <a
            href="https://github.com/vitormtns"
            target="_blank"
            rel="noreferrer"
            aria-label={t.footer.githubAria}
            className="focus-ring block rounded-md transition-colors duration-200 hover:text-white"
          >
            {t.footer.github}
          </a>
          <a
            href="https://www.linkedin.com/in/vitormtns/"
            target="_blank"
            rel="noreferrer"
            aria-label={t.footer.linkedinAria}
            className="focus-ring block rounded-md transition-colors duration-200 hover:text-white"
          >
            {t.footer.linkedin}
          </a>
          <p className="pt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">{t.footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}
