import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import _detailAssetUrl from "../assets/blackfit-detalhes.jpg";
const detailAsset = { url: _detailAssetUrl };
import _rackAssetUrl from "../assets/blackfit-arara.jpg";
const rackAsset = { url: _rackAssetUrl };
import _collectionAssetUrl from "../assets/blackfit-colecao.jpg";
const collectionAsset = { url: _collectionAssetUrl };
import _logoAssetUrl from "../assets/logo-beatriz.jpg";
const logoAsset = { url: _logoAssetUrl };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beatriz Silva | Storymaker" },
      { name: "description", content: "Registros audiovisuais de eventos, marcas e momentos especiais por Beatriz Silva." },
      { property: "og:title", content: "Beatriz Silva | Storymaker" },
      { property: "og:description", content: "Momentos vividos, histórias registradas com sensibilidade e intenção." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = ["Marcas", "Projetos", "Eventos", "Aniversários", "Casamentos"];

const marqueeItems = ["Marcas", "Projetos", "Eventos", "Aniversários", "Casamentos"];

function InfinityBand({ reverse = false }: { reverse?: boolean }) {
  const content = [...marqueeItems, ...marqueeItems];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const updatePosition = () => {
      frame = 0;
      const loopWidth = track.scrollWidth / 2;
      if (loopWidth <= 0) return;

      const distance = (window.scrollY * 0.22) % loopWidth;
      const position = reverse ? distance - loopWidth : -distance;
      track.style.transform = `translate3d(${position}px, 0, 0)`;
    };
    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [reverse]);

  return (
    <div className="overflow-hidden border-y border-border py-4" aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        {content.map((item, index) => (
          <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 font-display text-3xl italic md:text-5xl">
            {item}<span className="size-1.5 rounded-full bg-foreground" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-accent">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10" aria-label="Navegação principal">
          <a href="#inicio" className="flex flex-col leading-none" aria-label="Beatriz Silva, início">
            <img src={logoAsset.url} alt="Beatriz Silva Storymaker" className="h-12 w-auto object-contain object-left" />
          </a>
          <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.16em] md:gap-9">
            <a className="transition-opacity hover:opacity-50" href="#portfolio">Trabalhos</a>
            <a className="hidden transition-opacity hover:opacity-50 sm:block" href="#servicos">Serviços</a>
            <a className="transition-opacity hover:opacity-50" href="#contato">Contato</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="relative flex min-h-[92svh] flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24">
          <span aria-hidden="true" className="pointer-events-none absolute -right-10 top-16 select-none font-display text-[48vw] leading-none text-accent/45 md:right-0 md:text-[34vw]">BS</span>
          <div className="relative z-10 max-w-5xl animate-reveal">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.32em]">Registros audiovisuais</p>
            <h1 className="font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.78]">
              Eu registro.<br /><em>Você vive.</em>
            </h1>
            <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Transformo momentos em histórias que você vai querer reviver.
              </p>
              <a href="#portfolio" className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.18em]">
                Ver meu trabalho <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </section>

        <InfinityBand />

        <section id="portfolio" className="px-5 py-24 md:px-10 md:py-36">
          <div className="mb-14 flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.28em]">Trabalho selecionado / 01</h2>
            <div className="md:text-right">
              <p className="font-display text-3xl italic md:text-4xl">Black Fit × Girls Movement Club</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">20 de setembro</p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
            <figure className="md:col-span-7">
              <img src={detailAsset.url} alt="Bolsa Black Fit com detalhes artesanais no evento" className="aspect-[2/3] w-full object-cover" />
              <figcaption className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Detalhes / atmosfera / presença</figcaption>
            </figure>
            <div className="space-y-20 md:col-span-4 md:col-start-9 md:pt-40">
              <figure>
                <img src={rackAsset.url} alt="Bolsa e coleção Black Fit expostas em arara" className="aspect-[2/3] w-full object-cover" />
              </figure>
              <div className="max-w-sm">
                <h3 className="font-display text-4xl italic">O detalhe também conta a história.</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Um olhar atento para a atmosfera, a identidade e tudo o que faz um momento ser único.</p>
              </div>
              <figure className="md:-ml-24">
                <img src={collectionAsset.url} alt="Coleção Black Fit no evento com Girls Movement Club" className="aspect-[2/3] w-full object-cover" />
              </figure>
            </div>
          </div>
        </section>

        <InfinityBand reverse />

        <section id="servicos" className="bg-surface px-5 py-24 md:px-10 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
            <div className="md:sticky md:top-36 md:h-fit">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em]">O que eu registro</p>
              <h2 className="max-w-lg font-display text-6xl italic leading-none md:text-8xl">Histórias com verdade.</h2>
              <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">Cada trabalho nasce da escuta e de um olhar presente, para que a experiência continue viva depois que termina.</p>
            </div>
            <div>
              {services.map((title, index) => (
                <article key={title} className="flex items-end justify-between gap-6 border-b border-accent py-10 first:pt-0">
                  <h3 className="font-display text-4xl italic md:text-5xl">{title}</h3>
                  <span className="pb-1 text-[10px] font-semibold text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <InfinityBand />

        <section className="px-5 py-24 text-center md:py-40">
          <div className="mx-auto max-w-2xl">
            <p className="mb-16 text-[10px] font-bold uppercase tracking-[0.32em]">Como funciona</p>
            {["Você me conta", "A gente planeja", "Eu registro", "Você revive"].map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                {index > 0 && <span className="my-6 h-12 w-px bg-accent" />}
                <span className="font-display text-4xl italic">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <InfinityBand reverse />
      </main>

      <footer id="contato" className="bg-foreground px-5 py-24 text-background md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] opacity-60">Tem uma história para registrar?</p>
          <a href="https://instagram.com/beatrizmobile" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 font-display text-[clamp(3rem,8vw,7.5rem)] italic leading-none">
            Vamos conversar <ArrowUpRight className="size-[0.55em] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-background/15 pt-8 text-[10px] uppercase tracking-[0.18em] md:flex-row">
            <span>Beatriz Silva — Storymaker</span>
            <a href="https://instagram.com/beatrizmobile" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-50">@beatrizmobile</a>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}