"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Scale,
  Shield,
  PhoneCall,
  MapPin,
  MessageCircle,
  FileText,
  Gavel,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Award,
  Users,
  Compass,
  Briefcase,
  Heart,
  Sparkles,
  Phone,
  Star,
  Quote,
  Clock,
  Send,
} from "lucide-react";

// Custom SVG for Instagram
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Custom Google Icon
function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Form States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mainWhatsAppNumber = "5592992127414";
  const secondPhoneNumber = "5592984083042";

  const defaultWaMessage = encodeURIComponent(
    "Olá, Dr. Jean Bruno! Acessei o site e gostaria de falar diretamente com o advogado."
  );

  const emergencyWaMessage = encodeURIComponent(
    "🚨 URGÊNCIA: Olá, Dr. Jean Bruno! Preciso de atendimento imediato em Manaus (Flagrante / Custódia / Tribunal do Júri)."
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || "Cliente";
    const text = encodeURIComponent(
      `Olá, Dr. Jean Bruno!\n\n*Formulário de Contato do Site:*\n- *Nome:* ${fullName}\n- *E-mail:* ${email || "Não informado"}\n- *Telefone:* ${phone || "Não informado"}\n- *Mensagem:* ${message || "Gostaria de uma orientação jurídica."}`
    );
    window.open(`https://wa.me/${mainWhatsAppNumber}?text=${text}`, "_blank");
  };

  // Menu links matching the exact reference: Sobre, Áreas de Atuação, Contato
  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Áreas de Atuação", href: "#areas-de-atuacao" },
    { name: "Contato", href: "#contato" },
  ];

  // Áreas de Atuação no formato exato do modelo de referência
  const practiceAreas = [
    {
      title: "Tribunal do Júri",
      description:
        "Defesa combativa e estratégica perante o Conselho de Sentença, com análise minuciosa de laudos, oratória incisiva em plenário e proteção inabalável da vida e da liberdade.",
      tags: "Plenário do Júri • Sustentação Oral • Desqualificação • Habeas Corpus",
      icon: Gavel,
    },
    {
      title: "Execução Penal & Progressão",
      description:
        "Cálculos detalhados de pena para assegurar a liberdade no tempo exato da lei, com pedidos de progressão de regime, livramento condicional, remições e indultos.",
      tags: "Progressão de Regime • Livramento Condicional • Remição de Pena • Indulto",
      icon: FileText,
    },
    {
      title: "Flagrante & Custódia",
      description:
        "Acompanhamento presencial 24 horas em delegacias e audiências de custódia, atuando de imediato para coibir abusos e pleitear o relaxamento ou liberdade provisória.",
      tags: "Plantão 24h • Relaxamento de Prisão • Liberdade Provisória • Fiança",
      icon: Shield,
    },
    {
      title: "Defesa Criminal Estratégica",
      description:
        "Atuação técnica desde o inquérito policial até instâncias superiores (TJAM, STJ e STF), elaborando defesas robustas, trancamento de ações penais e recursos.",
      tags: "Inquérito Policial • Recursos TJAM/STJ/STF • Trancamento de Ação • Defesa Prévia",
      icon: Scale,
    },
    {
      title: "Direito Cível & Indenizações",
      description:
        "Defesa patrimonial e contratual com foco em ações indenizatórias, responsabilidade civil, danos morais e materiais, cobranças judiciais e revisão de contratos.",
      tags: "Danos Morais • Responsabilidade Civil • Cobranças • Revisão Contratual",
      icon: Briefcase,
    },
    {
      title: "Consultoria & Pareceres",
      description:
        "Orientação jurídica consultiva e preventiva personalizada para indivíduos e empresas, mitigando riscos processuais e garantindo total conformidade legal.",
      tags: "Consultoria Preventiva • Pareceres Técnicos • Mitigação de Riscos • Acordos",
      icon: Award,
    },
  ];

  // Depoimentos dos clientes
  const clientReviews = [
    {
      quote:
        "O Dr. Jean Bruno transformou uma situação extremamente delicada em uma vitória completa. Um advogado ético, presente e com técnica impecável em plenário.",
      name: "Mariza Sá",
      role: "Avaliação Verificada — Atendimento Presencial",
      initial: "M",
      color: "bg-[#7E57C2]",
    },
    {
      quote:
        "Excelente profissional, muito atencioso e comprometido com o cliente. Explica tudo com clareza sem juridiquês e transmite total confiança. Recomendo de olhos fechados!",
      name: "Joyce Marques",
      role: "Avaliação Verificada — Acompanhamento Processual",
      initial: "J",
      color: "bg-[#0288D1]",
    },
    {
      quote:
        "Passando para agradecer por toda a dedicação e disponibilidade durante um momento de urgência na nossa família. Super recomendo o Dr. Jean!",
      name: "Rose Carvalho",
      role: "Avaliação Verificada — Plantão Criminal",
      initial: "R",
      color: "bg-[#5D4037]",
    },
    {
      quote:
        "Ótimo atendimento, muito prestativo e transparente. Demonstrou conhecimento profundo da lei e resolveu nossa demanda com muita agilidade. Nota 10!",
      name: "Wanderson Balzary",
      role: "Avaliação Verificada — Direito Estratégico",
      initial: "W",
      color: "bg-[#00897B]",
    },
  ];

  const tickerItems = [
    "DIREITO CRIMINAL",
    "TRIBUNAL DO JÚRI",
    "EXECUÇÃO PENAL",
    "CONSULTORIA PROATIVA",
    "ATENDIMENTO HUMANIZADO",
    "DEFESA DE DIREITOS",
    "DIREITO CÍVEL",
    "MANAUS / AM",
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#181B20] selection:bg-[#DFB76C] selection:text-[#181B20]">
      
      {/* =========================================================================
          1. HEADER / NAVBAR (ESTILO REVOREDO & ASSOCIADOS)
      ========================================================================= */}
      <header className="sticky top-0 z-50 glass-nav-light transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO & IDENTIDADE INSTITUCIONAL */}
            <a href="#inicio" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#DFB76C] via-[#F3E5AB] to-[#C5A059] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src="/logo.webp"
                    alt="Logo Dr. Jean Bruno Advogado"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#181B20] group-hover:text-[#A98239] transition-colors">
                  JEAN BRUNO
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#A98239] font-bold">
                  Advocacia • OAB/AM 17.710
                </span>
              </div>
            </a>

            {/* MENU LINKS (SOBRE, ÁREAS DE ATUAÇÃO, CONTATO) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-stone-700 hover:text-[#A98239] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* BOTÃO CTA DO HEADER: "Fale agora com Advogado" */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider gold-btn-gradient text-white shadow-md shadow-[#C5A059]/25 hover:shadow-lg hover:shadow-[#C5A059]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Fale agora com Advogado</span>
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5]/98 border-b border-[#DFB76C]/30 px-6 py-6 space-y-4 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-800 hover:text-[#A98239] py-2 border-b border-stone-200/80 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider gold-btn-gradient text-white shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Fale agora com Advogado</span>
              </a>

              <a
                href="tel:5592992127414"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-stone-800 border border-stone-300 bg-white hover:border-[#DFB76C]"
              >
                <PhoneCall className="w-4 h-4 text-[#A98239]" />
                <span>Ligar: (92) 99212-7414</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          2. HERO SECTION
          "A proteção que o seu trabalho exige. A Justiça que o direito Garante."
      ========================================================================= */}
      <section id="inicio" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-sand-pattern border-b border-[#DFB76C]/25">
        {/* Soft Background Warm Lighting */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#DFB76C]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#F3E5AB]/40 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO TEXT (COL 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* OAB & Credenciais */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-[#DFB76C]/40 text-xs sm:text-sm font-semibold text-[#7E5F20] shadow-sm">
                <Scale className="w-4 h-4 text-[#C5A059]" />
                <span>OAB/AM nº 17.710 • Manaus / Amazonas</span>
              </div>

              {/* TÍTULO PRINCIPAL */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B20] leading-[1.18]">
                A proteção que a sua liberdade exige.{" "}
                <span className="gold-gradient-text block mt-1 sm:inline">
                  A Justiça que o Direito Garante.
                </span>
              </h1>

              {/* SUBTÍTULO */}
              <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Advocacia especializada em direito criminal e cível com consultoria estratégica e atendimento humanizado.
              </p>

              {/* BOTAO HERO PRINCIPAL: "Fale agora com Advogado" */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider gold-btn-gradient text-white shadow-lg shadow-[#C5A059]/30 hover:shadow-xl hover:shadow-[#C5A059]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Fale agora com Advogado</span>
                </a>

                <a
                  href="tel:5592992127414"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-stone-800 border border-[#DFB76C]/50 bg-white/90 hover:border-[#C5A059] hover:bg-[#F4EFEA] transition-all duration-200 shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-[#A98239]" />
                  <span>Plantão: (92) 99212-7414</span>
                </a>
              </div>

              {/* TRUST METRICS */}
              <div className="pt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 border-t border-stone-200">
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#A98239]">Plantão 24h</div>
                  <div className="text-[11px] text-stone-500 font-medium">Urgências Criminais</div>
                </div>
                <div className="text-center lg:text-left border-x border-stone-200 px-2">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#A98239]">100% Sigilo</div>
                  <div className="text-[11px] text-stone-500 font-medium">Ética & Discrição</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#A98239]">Nota 5.0 ★</div>
                  <div className="text-[11px] text-stone-500 font-medium">Google Avaliações</div>
                </div>
              </div>

            </div>

            {/* HERO IMAGE (COL 8-12) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#DFB76C]/30 via-[#F3E5AB]/40 to-[#C5A059]/20 blur-2xl transform scale-105" />

                <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white via-[#F4EFEA] to-[#EFE6DC] border border-[#DFB76C]/40 shadow-xl">
                  <div className="relative rounded-[20px] overflow-hidden bg-stone-100 aspect-[4/5]">
                    <Image
                      src="/perfil.webp"
                      alt="Dr. Jean Bruno Advogado Manaus"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#DFB76C]/40 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif font-bold text-[#181B20] text-base">Dr. Jean Bruno</p>
                          <p className="text-xs text-[#A98239] font-semibold">Advogado OAB/AM 17.710</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#DFB76C] to-[#C5A059] text-white flex items-center justify-center font-bold shadow-sm">
                          <Scale className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -bottom-4 -left-4 p-3.5 rounded-2xl bg-white border border-[#DFB76C]/40 items-center gap-3 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4EFEA] to-[#EFE6DC] border border-[#DFB76C]/40 flex items-center justify-center text-[#A98239]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Atuação Firme</div>
                    <div className="text-xs font-bold text-[#181B20]">Tribunal do Júri</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ÁREAS DE ATUAÇÃO EM ADVOCACIA ESPECIALIZADA (ESTILO REVOREDO)
          Cards com título, parágrafo, divisor '_______' e marcadores com '•'
      ========================================================================= */}
      <section id="areas-de-atuacao" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
              Áreas de Atuação em Advocacia Especializada
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Atuação técnica, estratégica e humanizada na defesa intransigente dos seus direitos e da sua liberdade.
            </p>
          </div>

          {/* Grid de Cards no formato exato */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {practiceAreas.map((area, index) => {
              const IconComp = area.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl p-7 flex flex-col justify-between glass-card-light glass-card-light-hover border border-[#DFB76C]/30 transition-all duration-300"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#F4EFEA] to-[#EFE6DC] border border-[#DFB76C]/40 flex items-center justify-center text-[#A98239] shadow-sm mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#181B20] mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                      {area.description}
                    </p>

                    {/* Divisor característico */}
                    <div className="my-5 text-stone-300 text-center font-serif select-none">
                      _______________________________
                    </div>

                    {/* Tags / Sub-itens com separador • */}
                    <p className="text-xs font-medium text-[#7E5F20] leading-relaxed">
                      {area.tags}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-200/80">
                    <a
                      href={`https://wa.me/${mainWhatsAppNumber}?text=${encodeURIComponent(
                        `Olá, Dr. Jean Bruno! Gostaria de uma consulta especializada sobre *${area.title}*.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#A98239] hover:text-[#181B20] transition-colors group uppercase tracking-wider"
                    >
                      <span>Consultar sobre esta área</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <a
              href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider gold-btn-gradient text-white shadow-lg shadow-[#C5A059]/25 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Solicitar Análise de Caso no WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. ATENDIMENTO HUMANIZADO (CALLOUT + BOTÃO + TEXT MARQUEE)
      ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#F5EFEB] via-[#FAF8F5] to-[#F5EFEB] border-y border-[#DFB76C]/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Nossa Filosofia</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
            Atendimento humanizado
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Atendimento presencial e online focado na resolução de conflitos com o máximo respeito e empatia, priorizando a tranquilidade e a dignidade dos clientes.
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${mainWhatsAppNumber}?text=${encodeURIComponent(
                "Olá, Dr. Jean Bruno! Gostaria de agendar uma consulta jurídica."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider gold-btn-gradient text-white shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agende uma Consulta</span>
            </a>
          </div>
        </div>

        {/* TEXT MARQUEE INFINITO */}
        <div className="mt-14 py-4 bg-[#FAF4E6] border-y border-[#DFB76C]/40 overflow-hidden">
          <div className="animate-marquee-infinite flex items-center whitespace-nowrap">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="flex items-center text-xs sm:text-sm font-bold tracking-widest text-[#7E5F20] uppercase px-4">
                <span>{item}</span>
                <span className="ml-8 text-[#C5A059]">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SOBRE O ADVOGADO (BIO + EXPERIÊNCIA E EXPERTISE COM 4 ITENS)
      ========================================================================= */}
      <section id="sobre" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* IMAGENS DO DR. JEAN (COL 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Foto OAB Amazonas */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-2 border border-[#DFB76C]/30 shadow-md group">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100">
                    <Image
                      src="/oab.webp"
                      alt="Dr. Jean Bruno na OAB Amazonas"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="text-[11px] font-semibold text-[#181B20] bg-white/90 px-3 py-1 rounded-full border border-[#DFB76C]/30 shadow-sm">
                        OAB Amazonas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Foto Fachada Escritório */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-2 border border-[#DFB76C]/30 shadow-md group sm:translate-y-6">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100">
                    <Image
                      src="/escritorio.webp"
                      alt="Dr. Jean Bruno no Escritório em Manaus"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="text-[11px] font-semibold text-[#181B20] bg-white/90 px-3 py-1 rounded-full border border-[#DFB76C]/30 shadow-sm">
                        Sede do Escritório
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sede Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#DFB76C]/30 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FAF8F5] border border-[#DFB76C] p-0.5 shrink-0">
                    <Image
                      src="/logo.webp"
                      alt="Logo Jean Bruno"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-sm">Escritório Dr. Jean Bruno</h4>
                    <p className="text-xs text-stone-500">Rua Francisco José Furtado, 7 - São Francisco, Manaus</p>
                  </div>
                </div>
                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#FAF4E6] text-[#A98239] hover:bg-[#C5A059] hover:text-white transition-colors border border-[#DFB76C]/30"
                  aria-label="Instagram @imjeanbruno"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* TEXTO BIOGRÁFICO & BLOCO DE EXPERIÊNCIA (COL 7-12) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Sobre o Advogado</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20] leading-tight">
                Dr. Jean Bruno
                <span className="block text-xl sm:text-2xl font-light text-[#A98239] mt-1">
                  Advocacia com Alma, Técnica e Proximidade
                </span>
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                O Advogado Dr. Jean Bruno inscrito na OAB/AM nº 17.710, atuante em Direito Criminal e Cível com uma trajetória marcada pela excelência e pelo compromisso ético. Com atuação no mercado jurídico de Manaus, dedica-se a oferecer uma consultoria estratégica e um atendimento humanizado, garantindo que cada cliente receba a atenção e o suporte jurídico que merece.
              </p>

              {/* BLOCO: EXPERIÊNCIA E EXPERTISE */}
              <div className="p-6 rounded-2xl bg-white border border-[#DFB76C]/35 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-xl text-[#181B20]">
                  Experiência e Expertise
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-semibold text-stone-800">
                    <div className="w-6 h-6 rounded-full bg-[#FAF4E6] border border-[#DFB76C] text-[#A98239] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Competência na Atuação</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-stone-800">
                    <div className="w-6 h-6 rounded-full bg-[#FAF4E6] border border-[#DFB76C] text-[#A98239] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Consultoria Proativa</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-stone-800">
                    <div className="w-6 h-6 rounded-full bg-[#FAF4E6] border border-[#DFB76C] text-[#A98239] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Atendimento Humanizado</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-stone-800">
                    <div className="w-6 h-6 rounded-full bg-[#FAF4E6] border border-[#DFB76C] text-[#A98239] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Defesa Incondicional de Direitos e Liberdade</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider gold-btn-gradient text-white hover:scale-105 transition-transform shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Consulta com Dr. Jean</span>
                </a>

                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-stone-800 border border-stone-300 bg-white hover:border-[#C5A059] hover:text-[#A98239] transition-colors shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@imjeanbruno</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. O QUE DIZEM OS CLIENTES (TESTIMONIALS SECTION)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F5EFEB] border-y border-[#DFB76C]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#181B20]">
              O QUE DIZEM OS CLIENTES
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Depoimentos reais de quem confiou sua causa e liberdade ao Dr. Jean Bruno.
            </p>

            {/* Google Rating Badge */}
            <div className="pt-2 inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white border border-[#DFB76C]/40 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-serif font-bold text-stone-900 text-sm">5.0 / 5.0</span>
              <span className="text-xs text-stone-500 border-l border-stone-300 pl-3">
                Google Avaliações
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientReviews.map((rev, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl bg-white border border-[#DFB76C]/30 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${rev.color} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}
                      >
                        {rev.initial}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-stone-900 text-base">
                            {rev.name}
                          </h4>
                          <GoogleIcon className="w-3.5 h-3.5 shrink-0" />
                        </div>
                        <p className="text-xs text-stone-500 font-light">
                          {rev.role}
                        </p>
                      </div>
                    </div>

                    <Quote className="w-6 h-6 text-[#DFB76C]/40" />
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic font-light">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Avaliação verificada no Google
                  </span>
                  <span className="text-stone-400 font-serif">OAB/AM 17.710</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider gold-btn-gradient text-white shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale Diretamente com o Dr. Jean Bruno</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. LOCALIZAÇÃO / VISITE-NOS (ENDEREÇO & HORÁRIOS)
      ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* INFORMAÇÕES DE LOCALIZAÇÃO (COL 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Localização</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
                Visite-nos
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Estrutura preparada para receber você com total privacidade e conforto, além de suporte presencial e online em todo o Amazonas.
              </p>

              <div className="space-y-4 pt-2">
                {/* Endereço */}
                <div className="p-5 rounded-2xl bg-white border border-[#DFB76C]/30 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] text-[#A98239] border border-[#DFB76C]/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-base">Endereço</h4>
                    <p className="text-sm text-stone-700 mt-1 font-medium">
                      Rua Francisco José Furtado, nº 7, Bairro São Francisco
                    </p>
                    <p className="text-xs text-stone-500">
                      Manaus - AM, 69079-200
                    </p>
                    <a
                      href="https://maps.google.com/?q=Rua+Francisco+Jos%C3%A9+Furtado+7+Sao+Francisco+Manaus+AM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A98239] hover:underline mt-2"
                    >
                      <span>Abrir no Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="p-5 rounded-2xl bg-white border border-[#DFB76C]/30 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] text-[#A98239] border border-[#DFB76C]/40 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-base">Telefone & WhatsApp</h4>
                    <p className="text-sm font-bold text-[#181B20] mt-1">
                      (92) 99212-7414 / (92) 98408-3042
                    </p>
                    <p className="text-xs text-stone-500">Atendimento 24 horas para urgências</p>
                  </div>
                </div>

                {/* Horário de Atendimento */}
                <div className="p-5 rounded-2xl bg-white border border-[#DFB76C]/30 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] text-[#A98239] border border-[#DFB76C]/40 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-base">Horário de Atendimento</h4>
                    <p className="text-sm text-stone-700 mt-1">
                      Seg - Sex: 09:00 - 18:00
                    </p>
                    <p className="text-xs text-[#A98239] font-semibold mt-0.5">
                      Plantão Criminal 24h para prisões e audiências de custódia
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* FOTO DO ESCRITÓRIO & VISUAL MAPA (COL 7-12) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl p-3 bg-white border border-[#DFB76C]/40 shadow-xl overflow-hidden group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src="/escritorio2.webp"
                    alt="Sala de Atendimento do Dr. Jean Bruno em Manaus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#DFB76C]/40 shadow-md">
                    <h4 className="font-serif font-bold text-[#181B20] text-sm sm:text-base">
                      Atendimento Presencial em Manaus
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Rua Francisco José Furtado, nº 7, Bairro São Francisco
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href="https://maps.google.com/?q=Rua+Francisco+Jos%C3%A9+Furtado+7+Sao+Francisco+Manaus+AM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF4E6] text-[#7E5F20] text-xs font-bold border border-[#DFB76C]/30 hover:bg-[#C5A059] hover:text-white transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Ver Rota no GPS</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          8. FORMULÁRIO DE CONTATO DIRETO (ESTILO EXATO DO SITE DE REFERÊNCIA)
          "Advocacia especializada para proteger seus direitos"
          Nome, Sobrenome, E-mail, Telefone, Mensagem -> Botão Enviar Mensagem
      ========================================================================= */}
      <section id="contato" className="py-20 lg:py-28 bg-[#F5EFEB] border-t border-[#DFB76C]/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
              Advocacia especializada para proteger seus direitos
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Preencha o formulário abaixo para entrar em contato com nossos especialistas. Retornaremos o mais breve possível.
            </p>
          </div>

          {/* CARD DO FORMULÁRIO */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DFB76C]/40 shadow-xl relative">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* NOME & SOBRENOME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Seu primeiro nome"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    Sobrenome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Seu sobrenome"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              {/* E-MAIL & TELEFONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(92) 99999-9999"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              {/* MENSAGEM */}
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva brevemente como podemos ajudar..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                ></textarea>
              </div>

              {/* BOTÃO ENVIAR MENSAGEM */}
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm uppercase tracking-wider gold-btn-gradient text-white shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center">
                🔒 Suas informações são estritamente confidenciais e protegidas pelo sigilo profissional da advocacia.
              </p>
            </form>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. FOOTER (ESTILO REVOREDO & ASSOCIADOS)
      ========================================================================= */}
      <footer className="bg-[#FAF8F5] border-t border-[#DFB76C]/30 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-stone-200 text-center md:text-left">
            
            {/* BRANDING & OAB */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-[#DFB76C] p-0.5 shadow-sm">
                  <Image
                    src="/logo.webp"
                    alt="Logo Dr. Jean Bruno"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-serif font-bold text-lg text-[#181B20]">
                  Dr. Jean Bruno & Associados
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Inscrição OAB/AM nº 17.710 • Advocacia Criminal e Cível
              </p>
            </div>

            {/* LINKS DO MENU NO FOOTER */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-stone-700">
              <a href="#sobre" className="hover:text-[#A98239] transition-colors">
                Sobre
              </a>
              <a href="#areas-de-atuacao" className="hover:text-[#A98239] transition-colors">
                Áreas de Atuação
              </a>
              <a href="#contato" className="hover:text-[#A98239] transition-colors">
                Contato
              </a>
              <a href="#contato" className="hover:text-[#A98239] transition-colors">
                Política de Privacidade
              </a>
            </div>

            {/* CONTATOS */}
            <div className="text-center md:text-right text-xs text-stone-600 space-y-1">
              <p className="font-bold text-[#181B20] text-sm">+55 (92) 99212-7414</p>
              <p>Rua Francisco José Furtado, nº 7, São Francisco, Manaus/AM</p>
            </div>

          </div>

          {/* COPYRIGHT & ÉTICA OAB */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-stone-500">
            <p>© {new Date().getFullYear()}. Dr. Jean Bruno & Associados. Todos os direitos reservados.</p>
            <p className="text-[10px] text-stone-400">
              Em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          BOTÃO FLUTUANTE DE WHATSAPP (FIXO MOBILE & DESKTOP)
      ========================================================================= */}
      <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <div className="hidden sm:block bg-white border border-[#DFB76C]/60 text-[#7E5F20] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg">
          Fale com o Advogado no WhatsApp
        </div>
        
        <a
          href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 pulse-whatsapp group"
          aria-label="Falar no WhatsApp com Dr. Jean Bruno"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </aside>

    </div>
  );
}
