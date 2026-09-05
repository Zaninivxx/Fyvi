"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

const whatsapp = "https://wa.me/5513997705812?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fyvi%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
const services = [
  { title: "Automação", punch: "Sua operação trabalha. Você ganha tempo.", text: "Criamos fluxos que eliminam tarefas repetitivas, reduzem erros e fazem a rotina andar com inteligência.", word: "FLUXO" },
  { title: "Redesign", punch: "Desejo começa antes do primeiro pedido.", text: "Reposicionamos seus produtos para chamar atenção, transmitir qualidade e vender melhor no delivery e nas redes.", word: "DESEJO" },
  { title: "Sites", punch: "Uma presença digital que não só existe. Convence.", text: "Construímos experiências rápidas e marcantes que transformam visitantes em conversas e oportunidades reais.", word: "PRESENÇA" },
  { title: "Visibilidade", punch: "Quem procura o que você faz encontra você primeiro.", text: "Fortalecemos sua presença no Google e nas redes para sua empresa aparecer, ser lembrada e escolhida.", word: "ALCANCE" },
];

export default function Home() {
  const [comparison, setComparison] = useState(52);

  useEffect(() => {
    const root = document.documentElement;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slowDevice = (nav.deviceMemory !== undefined && nav.deviceMemory <= 3) || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 2);
    root.classList.toggle("lite-motion", reducedMotion || slowDevice);

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      root.style.setProperty("--scroll-y", `${scrollY}`);
      root.style.setProperty("--progress", `${max > 0 ? scrollY / max : 0}`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: .16 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => {
      removeEventListener("scroll", onScroll);
      observer.disconnect();
      root.classList.remove("lite-motion");
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <main>
    <div className="entry-intro" aria-hidden="true">
      <div className="entry-panel entry-panel-a"/><div className="entry-panel entry-panel-b"/>
      <div className="entry-logo"><img src="/fyvi-logo.png" alt=""/><span/></div>
    </div>
    <div className="scroll-progress" aria-hidden="true" />
    <header className="topbar">
      <a className="logo" href="#inicio" aria-label="Fyvi — início"><img src="/fyvi-logo.png" alt="Fyvi Soluções Tecnológicas" /></a>
      <a className="top-contact" href={whatsapp} target="_blank" rel="noreferrer">Iniciar projeto <ArrowUpRight size={15}/></a>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-track" aria-hidden="true"><i/><i/><i/></div>
      <div className="hero-meta" data-reveal>
        <span>FYVI / Soluções Tecnológicas</span>
        <span>Automação · Sites · Design · Visibilidade</span>
      </div>
      <h1>
        <span data-reveal>Processos que <em>fluem.</em></span>
        <span className="blue" data-reveal>Negócios que <em>evoluem.</em></span>
      </h1>
      <div className="hero-bottom">
        <p data-reveal>Transformamos gargalos em fluxo, ideias em presença e empresas em marcas difíceis de ignorar.</p>
        <div className="hero-proof" data-reveal><small>Da operação à presença digital</small><strong>Estratégia que vira movimento.</strong></div>
        <a href="#manifesto" aria-label="Continuar navegando"><ArrowDown size={19}/></a>
      </div>
      <div className="speed-word" aria-hidden="true">FYVI</div>
    </section>

    <section className="scene-cut" aria-label="Transição para a proposta Fyvi">
      <div className="cut-panel cut-left"/><div className="cut-panel cut-right"/>
      <div className="cut-core"><span>IDEIA</span><i/><strong>IMPACTO</strong></div>
    </section>

    <section className="manifesto" id="manifesto">
      <div className="manifesto-rule" aria-hidden="true"><span/></div>
      <h2 data-reveal>Tecnologia sozinha não move um negócio.<br/><em>Estratégia em movimento, sim.</em></h2>
    </section>

    <section className="services" id="servicos">
      <div className="services-intro">
        <h2>A gente encontra o freio.<br/><em>E transforma em impulso.</em></h2>
        <p>Automação, design e presença digital deixam de ser peças isoladas. Na Fyvi, tudo trabalha junto para mover o seu negócio.</p>
      </div>
      <div className="service-list">
        {services.map((service) => <article data-reveal data-word={service.word} key={service.title}>
          <div className="service-art" aria-hidden="true"><i/><i/><i/></div>
          <h3>{service.title}</h3><strong>{service.punch}</strong><p>{service.text}</p>
        </article>)}
      </div>
    </section>

    <section className="data-gate" aria-hidden="true"><div className="gate-a"/><div className="gate-b"/><p>FYVI</p><div className="gate-lines"><i/><i/><i/><i/><i/></div></section>

    <section className="work" id="portfolio">
      <div className="work-heading" data-reveal>
        <p className="kicker">Trabalho real. Diferença visível.</p>
        <h2>O produto é o mesmo.<br/><em>A percepção, não.</em></h2>
      </div>
      <div className="portfolio-stage">
        <article className="food-project" data-reveal>
          <div className="project-copy">
            <span>Redesign gastronômico</span>
            <h3>De registro comum<br/>a imagem que abre o apetite.</h3>
            <p>Direção visual, luz, enquadramento e acabamento trabalhando juntos para aumentar a percepção de qualidade do prato.</p>
          </div>
          <div className="comparison" style={{ "--compare": `${comparison}%` } as CSSProperties}>
            <img className="comparison-before" src="/case-restaurante-antes.jpg" alt="Foto original do prato antes do redesign" />
            <div className="comparison-after"><img src="/case-restaurante-depois.jpg" alt="Foto do prato depois do redesign da Fyvi" /></div>
            <span className="comparison-label label-before">Antes</span>
            <span className="comparison-label label-after">Depois</span>
            <div className="comparison-handle" aria-hidden="true"><i/><b>‹ ›</b></div>
            <input type="range" min="8" max="92" value={comparison} onChange={(event) => setComparison(Number(event.target.value))} aria-label="Comparar imagem antes e depois" />
          </div>
          <p className="comparison-hint">Arraste para comparar</p>
        </article>

        <article className="metro-project" data-reveal>
          <div className="metro-copy">
            <span className="metro-eyebrow">Projeto em destaque</span>
            <div className="metro-brand">
              <img src="/metroreport-logo.png" alt="Logo oficial do MetroReport" />
              <div>
                <small>Site desenvolvido pela Fyvi</small>
                <h3>MetroReport</h3>
              </div>
            </div>
            <p>Informação de mobilidade organizada para ser simples de consultar e fácil de confiar. Um projeto digital construído com foco em clareza, velocidade e experiência.</p>
            <div className="metro-actions">
              <a className="metro-link" href="https://metroreport.com.br/" target="_blank" rel="noreferrer">Visitar MetroReport <ArrowUpRight size={17}/></a>
              <span>metroreport.com.br</span>
            </div>
          </div>
          <a className="metro-mark" href="https://metroreport.com.br/" target="_blank" rel="noreferrer" aria-label="Visitar site do MetroReport">
            <img src="/metroreport-logo.png" alt="" />
            <span>Ver projeto ao vivo <ArrowUpRight size={16}/></span>
          </a>
        </article>
      </div>
    </section>

    <section className="process" id="processo">
      <div className="process-title" data-reveal><h2>Uma conversa vira<br/><em>movimento.</em></h2></div>
      <div className="flow-track">
        <article data-reveal><h3>Você conta.</h3><p>O momento da empresa e onde quer chegar.</p></article>
        <article data-reveal><h3>A gente constrói.</h3><p>Uma proposta clara para transformar a necessidade.</p></article>
        <article data-reveal><h3>Seu negócio avança.</h3><p>Aprovou, pagou com segurança e o projeto entra em ação.</p></article>
      </div>
    </section>

    <section className="final-cta">
      <h2 data-reveal>Vamos mover<br/>seu negócio?</h2>
      <a href={whatsapp} target="_blank" rel="noreferrer" data-reveal>Conversar no WhatsApp <ArrowUpRight size={22}/></a>
      <div className="cta-path" aria-hidden="true"><i/><i/><i/></div>
    </section>

    <footer><img src="/fyvi-logo.png" alt="Fyvi Soluções Tecnológicas"/><p>© {new Date().getFullYear()} Fyvi</p><p>+55 13 99770-5812</p></footer>
  </main>;
}
