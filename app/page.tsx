"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Scale,
  Shield,
  PhoneCall,
  Clock,
  MapPin,
  MessageCircle,
  FileText,
  Gavel,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState("");
  const [contactSubject, setContactSubject] = useState("Direito Criminal / Urgência");
  const [contactMessage, setContactMessage] = useState("");

  const mainWhatsAppNumber = "5592992127414";
  const secondPhoneNumber = "5592984083042";

  const defaultWaMessage = encodeURIComponent(
    "Olá, Dr. Jean Bruno! Acessei o seu site e gostaria de uma consulta jurídica especializada."
  );

  const emergencyWaMessage = encodeURIComponent(
    "🚨 URGÊNCIA: Olá, Dr. Jean Bruno! Preciso de atendimento criminal imediato (Flagrante / Audiência de Custódia / Mandado)."
  );

  const handleCustomFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Dr. Jean Bruno!\n\nMeu nome é *${contactName || "Cliente"}*.\nAssunto: *${contactSubject}*\n\nMensagem: ${contactMessage || "Gostaria de agendar uma consulta."}`
    );
    window.open(`https://wa.me/${mainWhatsAppNumber}?text=${text}`, "_blank");
  };

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Áreas de Atuação", href: "#atuacao" },
    { name: "Sobre Dr. Jean", href: "#sobre" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Atendimento", href: "#como-funciona" },
    { name: "Localização", href: "#localizacao" },
    { name: "Dúvidas", href: "#faq" },
  ];

  const practiceAreas = [
    {
      icon: Gavel,
      title: "Tribunal do Júri",
      subtitle: "Defesa combativa perante o Conselho de Sentença",
      description:
        "Atuação incisiva e oratória estratégica em plenário, defendendo a liberdade e a vida com rigor técnico, análise minuciosa de provas e sustentação oral inabalável.",
      badge: "Especialidade Primordial",
      highlight: true,
    },
    {
      icon: FileText,
      title: "Execução Penal & Progressão",
      subtitle: "Garantia de direitos e liberdade no tempo correto",
      description:
        "Cálculos detalhados de pena, pedidos de progressão de regime (fechado, semiaberto e aberto), livramento condicional, remição de pena por trabalho/estudo e indulto.",
      badge: "Execução Penal",
      highlight: false,
    },
    {
      icon: AlertTriangle,
      title: "Flagrante & Custódia",
      subtitle: "Plantão e acompanhamento imediato",
      description:
        "Presença imediata na delegacia e na Audiência de Custódia para combater abusos, pleitear relaxamento de prisão ilegal ou liberdade provisória com ou sem fiança.",
      badge: "Urgência 24h",
      highlight: true,
    },
    {
      icon: Shield,
      title: "Defesa Criminal Estratégica",
      subtitle: "Inquéritos, Ações Penais e Habeas Corpus",
      description:
        "Acompanhamento preventivo em investigações da Polícia Civil e Federal, resposta à acusação, recursos para o TJAM, STJ e STF, e anulação de provas ilícitas.",
      badge: "Defesa Penal",
      highlight: false,
    },
    {
      icon: Scale,
      title: "Direito Cível Estratégico",
      subtitle: "Proteção de interesses e resolução de conflitos",
      description:
        "Atuação em ações indenizatórias, responsabilidade civil, revisão e elaboração contratual, cobranças, litígios possessórios e defesa de direitos patrimoniais.",
      badge: "Seara Cível",
      highlight: false,
    },
    {
      icon: Briefcase,
      title: "Consultoria & Pareceres",
      subtitle: "Segurança jurídica preventiva para pessoas e empresas",
      description:
        "Orientação prévia para mitigação de riscos criminais e cíveis, confecção de pareceres técnicos e assessoria estratégica personalizada.",
      badge: "Consultivo",
      highlight: false,
    },
  ];

  const personalAttributes = [
    { label: "Advogado Criminalista", detail: "Atuação combatente", icon: Gavel },
    { label: "33 Anos", detail: "Energia & Firmeza", icon: Sparkles },
    { label: "Casado & Pai de Meninos", detail: "Valores familiares", icon: Heart },
    { label: "Espírita", detail: "Ética e Humanismo", icon: Compass },
    { label: "Criador de Conteúdo", detail: "Direito acessível", icon: InstagramIcon },
    { label: "OAB/AM 17.710", detail: "Ordem dos Advogados", icon: Award },
  ];

  const faqs = [
    {
      question: "Um familiar ou conhecido foi preso agora. O que fazer imediatamente?",
      answer:
        "O primeiro passo fundamental é não prestar depoimento sem a presença de um advogado criminalista e exercer o direito constitucional de permanecer em silêncio. Entre em contato imediatamente com o Dr. Jean Bruno pelo WhatsApp ou plantão telefônico para que seja feito o acompanhamento imediato na delegacia ou na Audiência de Custódia.",
    },
    {
      question: "Como funciona o pedido de Progressão de Regime e Livramento Condicional?",
      answer:
        "A progressão de regime ocorre quando o apenado cumpre o lapso temporal exigido por lei (requisito objetivo) e apresenta bom comportamento carcerário (requisito subjetivo). O Dr. Jean Bruno faz o cálculo minucioso da pena, verifica possíveis remições por trabalho ou estudo e protocola o pedido perante a Vara de Execuções Penais.",
    },
    {
      question: "O Dr. Jean Bruno atende apenas em Manaus ou em todo o Amazonas e Brasil?",
      answer:
        "O escritório está sediado em Manaus/AM (Rua Francisco José Furtado, nº 7, São Francisco), onde o Dr. Jean atua presencialmente em delegacias, fóruns e no Tribunal do Júri. Além disso, presta consultorias online e atua em processos em todo o estado do Amazonas e perante os Tribunais Superiores (STJ e STF em Brasília).",
    },
    {
      question: "Como é feita a contratação e o primeiro atendimento?",
      answer:
        "O primeiro contato pode ser feito via WhatsApp ou ligação. Analisamos o caso preliminarmente com total sigilo profissional e agendamos a consulta (presencial no escritório ou por videoconferência) para traçar a estratégia jurídica mais adequada.",
    },
    {
      question: "O escritório também atua na área Cível?",
      answer:
        "Sim. O Dr. Jean Bruno atua de forma estratégica tanto na seara Criminal quanto na Cível, cuidando de ações indenizatórias, direitos contratuais, obrigações e soluções de controvérsias patrimoniais.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#040914] text-slate-100 selection:bg-[#dfb76c] selection:text-[#040914]">
      {/* =========================================================================
          TOP BANNER DE PLANTÃO 24H (MOBILE & DESKTOP)
      ========================================================================= */}
      <div className="bg-gradient-to-r from-[#0d1e3d] via-[#162c55] to-[#0d1e3d] border-b border-[#dfb76c]/30 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-[#dfb76c] font-semibold tracking-wide uppercase text-[11px] sm:text-xs">
              Plantão Criminal 24h & Urgências
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              Prisão em Flagrante • Audiência de Custódia • Tribunal do Júri
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:5592992127414"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#dfb76c] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>(92) 99212-7414</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              href="tel:5592984083042"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#dfb76c] transition-colors"
            >
              <span>(92) 98408-3042</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          NAVBAR PRINCIPAL
      ========================================================================= */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <a href="#inicio" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#dfb76c] via-[#f3e5ab] to-[#a98239] shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#081225] flex items-center justify-center">
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
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#dfb76c] transition-colors">
                  JEAN BRUNO
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#dfb76c] font-semibold">
                  Advocacia • OAB/AM 17.710
                </span>
              </div>
            </a>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-[#dfb76c] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#dfb76c] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* DESKTOP CTA BUTTON */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`https://wa.me/${mainWhatsAppNumber}?text=${emergencyWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#c5a059] via-[#dfb76c] to-[#a98239] text-[#081225] shadow-lg shadow-[#c5a059]/20 hover:shadow-[#dfb76c]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Atendimento Imediato</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#081225]/98 border-b border-[#dfb76c]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-[#dfb76c] py-2 border-b border-slate-800/80 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/${mainWhatsAppNumber}?text=${emergencyWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#c5a059] via-[#dfb76c] to-[#a98239] text-[#081225] shadow-lg shadow-[#c5a059]/30"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar no WhatsApp Agora</span>
              </a>

              <a
                href="tel:5592992127414"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-200 border border-slate-700 bg-slate-900/60 hover:border-[#dfb76c]"
              >
                <PhoneCall className="w-4 h-4 text-[#dfb76c]" />
                <span>Ligar: (92) 99212-7414</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section id="inicio" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-grid-pattern">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#162c55]/30 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#dfb76c]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO TEXT (COL 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* OAB BADGE */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d1e3d]/80 border border-[#dfb76c]/40 text-xs sm:text-sm font-semibold text-[#f3e5ab] shadow-sm">
                <Scale className="w-4 h-4 text-[#dfb76c]" />
                <span>OAB/AM 17.710 • Manaus / Amazonas</span>
              </div>

              {/* MAIN TITLE */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Defesa Técnica & Compromisso Inabalável com a{" "}
                <span className="gold-gradient-text block mt-1 sm:inline">
                  Sua Liberdade
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Especialista em <strong className="font-semibold text-white">Direito Criminal</strong>,{" "}
                <strong className="font-semibold text-[#f3e5ab]">Tribunal do Júri</strong>,{" "}
                <strong className="font-semibold text-white">Execução Penal (Progressão de Regime)</strong> e atuação estratégica na seara{" "}
                <strong className="font-semibold text-white">Cível</strong>.
              </p>

              {/* QUOTE CARD */}
              <div className="p-4 sm:p-5 rounded-2xl glass-card border-l-4 border-l-[#dfb76c] text-slate-200 text-sm sm:text-base italic max-w-2xl mx-auto lg:mx-0">
                &ldquo;Sou advogado e milito na seara CRIMINAL e CÍVEL, caso tenha algum problema com a justiça me ligue.&rdquo;
                <div className="mt-2 text-xs font-serif font-bold text-[#dfb76c] not-italic uppercase tracking-wider">
                  — Dr. Jean Bruno
                </div>
              </div>

              {/* HERO ACTION BUTTONS */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#c5a059] via-[#dfb76c] to-[#a98239] text-[#081225] shadow-xl shadow-[#c5a059]/25 hover:shadow-[#dfb76c]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Falar com Dr. Jean Bruno</span>
                </a>

                <a
                  href="tel:5592992127414"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-slate-200 border border-slate-700 bg-[#081225]/70 hover:border-[#dfb76c] hover:text-white hover:bg-[#0d1e3d] transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 text-[#dfb76c]" />
                  <span>Plantão: (92) 99212-7414</span>
                </a>
              </div>

              {/* TRUST BADGES */}
              <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 border-t border-slate-800/80">
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#dfb76c]">24 Horas</div>
                  <div className="text-[11px] text-slate-400">Plantão de Flagrantes</div>
                </div>
                <div className="text-center lg:text-left border-x border-slate-800 px-2">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#dfb76c]">100% Sigilo</div>
                  <div className="text-[11px] text-slate-400">Ética e Discrição</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#dfb76c]">OAB/AM</div>
                  <div className="text-[11px] text-slate-400">Inscrição 17.710</div>
                </div>
              </div>

            </div>

            {/* HERO IMAGE (COL 8-12) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none">
                
                {/* Background Aura */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#dfb76c]/20 via-[#162c55] to-[#c5a059]/20 blur-2xl transform scale-105" />

                {/* Main Card Frame */}
                <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-[#dfb76c]/60 via-[#162c55]/80 to-[#dfb76c]/30 shadow-2xl shadow-black/80">
                  <div className="relative rounded-[22px] overflow-hidden bg-[#081225] aspect-[4/5]">
                    <Image
                      src="/perfil.webp"
                      alt="Dr. Jean Bruno Advogado Criminalista Manaus"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-transparent opacity-80" />

                    {/* Floating Info Tag inside Image */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-card border border-[#dfb76c]/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif font-bold text-white text-base">Dr. Jean Bruno</p>
                          <p className="text-xs text-[#dfb76c] font-medium">Advocacia Criminal & Cível</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#dfb76c] text-[#081225] flex items-center justify-center font-bold">
                          <Scale className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge (Side) */}
                <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-2xl glass-card border border-[#dfb76c]/40 items-center gap-3 shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#dfb76c] to-[#a98239] flex items-center justify-center text-[#081225]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Atuação Firme</div>
                    <div className="text-xs font-bold text-[#dfb76c]">Tribunal do Júri</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          EMERGENCY CTA STRIP (FLAGRANTE / CUSTÓDIA)
      ========================================================================= */}
      <section className="relative py-8 bg-gradient-to-r from-[#0d1e3d] via-[#162c55] to-[#0d1e3d] border-y border-[#dfb76c]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 text-red-400">
                <AlertTriangle className="w-7 h-7 animate-pulse" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Precisa de Atendimento Criminal Urgente em Manaus?
                </h3>
                <p className="text-sm text-slate-300">
                  Prisão em flagrante, mandados de busca e apreensão ou audiência de custódia iminente.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/${mainWhatsAppNumber}?text=${emergencyWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Acionar Plantão 24h</span>
              </a>
              <a
                href="tel:5592992127414"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 border border-slate-600 bg-slate-900/80 hover:border-red-400"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>(92) 99212-7414</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ÁREAS DE ATUAÇÃO
      ========================================================================= */}
      <section id="atuacao" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162c55]/80 border border-[#dfb76c]/30 text-xs font-semibold text-[#dfb76c]">
              <Scale className="w-3.5 h-3.5" />
              <span>Especialidades Jurídicas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Áreas de Atuação Estratégica
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Atuação técnica e humanizada, garantindo a proteção intransigente das suas garantias constitucionais, da sua liberdade e do seu patrimônio.
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between glass-card glass-card-hover ${
                    area.highlight ? "border-[#dfb76c]/40 bg-[#0d1e3d]/80" : ""
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#162c55] to-[#081225] border border-[#dfb76c]/30 flex items-center justify-center text-[#dfb76c] shadow-md group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#162c55] text-[#f3e5ab] border border-[#dfb76c]/20">
                        {area.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs font-medium text-[#dfb76c] mb-3">
                      {area.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {area.description}
                    </p>
                  </div>

                  {/* Botão de contato direto da área */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80">
                    <a
                      href={`https://wa.me/${mainWhatsAppNumber}?text=${encodeURIComponent(
                        `Olá, Dr. Jean Bruno! Gostaria de uma consulta sobre *${area.title}*.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb76c] hover:text-white transition-colors group"
                    >
                      <span>Consultar sobre {area.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botão Central de Contato Geral */}
          <div className="mt-14 text-center">
            <a
              href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#c5a059] via-[#dfb76c] to-[#a98239] text-[#081225] shadow-xl shadow-[#c5a059]/20 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Solicitar Análise de Caso no WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          QUEM SOU EU / SOBRE O DR. JEAN BRUNO
      ========================================================================= */}
      <section id="sobre" className="py-20 lg:py-28 bg-[#081225] relative border-y border-[#dfb76c]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* IMAGENS DO DR. JEAN (COL 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Card Duplo com Foto OAB e Escritório */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Foto OAB Amazonas */}
                <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-[#dfb76c]/30 group">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/oab.webp"
                      alt="Dr. Jean Bruno na Plenária da OAB Amazonas"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="text-[11px] font-semibold text-[#f3e5ab] bg-[#081225]/90 px-2.5 py-1 rounded-full border border-[#dfb76c]/30">
                        OAB Amazonas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Foto Fachada Escritório */}
                <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-[#dfb76c]/30 group sm:translate-y-6">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/escritorio.webp"
                      alt="Dr. Jean Bruno no Escritório em Manaus"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="text-[11px] font-semibold text-[#f3e5ab] bg-[#081225]/90 px-2.5 py-1 rounded-full border border-[#dfb76c]/30">
                        Sede do Escritório
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Box de Resumo da Banca */}
              <div className="p-5 rounded-2xl glass-card border border-[#dfb76c]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#081225] border border-[#dfb76c] p-0.5 shrink-0">
                    <Image
                      src="/logo.webp"
                      alt="Logo Jean Bruno"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm">Escritório Dr. Jean Bruno</h4>
                    <p className="text-xs text-slate-400">Rua Francisco José Furtado, 7 - São Francisco, Manaus</p>
                  </div>
                </div>
                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#162c55] text-[#dfb76c] hover:bg-[#dfb76c] hover:text-[#081225] transition-colors"
                  aria-label="Instagram @imjeanbruno"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* TEXTO BIOGRÁFICO / QUEM SOU EU (COL 7-12) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162c55]/80 border border-[#dfb76c]/30 text-xs font-semibold text-[#dfb76c]">
                <Users className="w-3.5 h-3.5" />
                <span>Quem Sou Eu?</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Dr. Jean Bruno
                <span className="block text-xl sm:text-2xl font-light text-[#dfb76c] mt-1">
                  Advocacia com Alma, Técnica e Coragem
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Com inscrição ativa na <strong className="text-white font-semibold">OAB/AM sob o nº 17.710</strong>, atuo com foco rigoroso nas áreas <strong className="text-[#f3e5ab] font-semibold">Criminal</strong> e <strong className="text-white font-semibold">Cível</strong>, oferecendo uma advocacia presente, dinâmica e comprometida com a justiça real.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Acredito que a defesa da liberdade e a busca pelos direitos de cada cliente exigem não apenas conhecimento aprofundado dos códigos e da jurisprudência, mas também sensibilidade humana, disponibilidade integral e coragem diante dos tribunais.
              </p>

              {/* Grid de Atributos Humanizados */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {personalAttributes.map((attr, i) => {
                  const Icon = attr.icon;
                  return (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#0d1e3d]/60 border border-[#dfb76c]/20 hover:border-[#dfb76c]/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-[#dfb76c] mb-1">
                        <Icon className="w-4 h-4" />
                        <span className="text-xs font-bold text-slate-100">{attr.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{attr.detail}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Social & Contato */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#c5a059] via-[#dfb76c] to-[#a98239] text-[#081225] hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Consulta Pessoal</span>
                </a>

                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700 hover:border-[#dfb76c] hover:text-[#dfb76c] transition-colors"
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
          DIFERENCIAIS & PILARES DO ESCRITÓRIO
      ========================================================================= */}
      <section id="diferenciais" className="py-20 lg:py-28 relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162c55]/80 border border-[#dfb76c]/30 text-xs font-semibold text-[#dfb76c]">
              <Shield className="w-3.5 h-3.5" />
              <span>Nossos Pilares</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Por que Confiar Sua Causa ao Dr. Jean Bruno
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Princípios inegociáveis que orientam cada atendimento, peça processual e defesa em audiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl glass-card border border-[#dfb76c]/20 hover:border-[#dfb76c]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#162c55] text-[#dfb76c] flex items-center justify-center mb-5 font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Pronto Atendimento</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Resposta rápida para situações emergenciais como prisões em flagrante, apreensões e cumprimento de mandados judiciais.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-[#dfb76c]/20 hover:border-[#dfb76c]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#162c55] text-[#dfb76c] flex items-center justify-center mb-5 font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Atendimento Humanizado</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Você conversa diretamente com o advogado responsável pelo seu processo, sem intermediários ou burocracias desnecessárias.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-[#dfb76c]/20 hover:border-[#dfb76c]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#162c55] text-[#dfb76c] flex items-center justify-center mb-5 font-bold">
                <Gavel className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Defesa Combativa</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Análise minuciosa de nulidades, laudos periciais e depoimentos para construir teses sólidas perante juízes e jurados.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-[#dfb76c]/20 hover:border-[#dfb76c]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#162c55] text-[#dfb76c] flex items-center justify-center mb-5 font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Sigilo & Transparência</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Sigilo profissional absoluto resguardado pelo Estatuto da OAB, com relatórios constantes sobre o andamento da ação.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          COMO FUNCIONA O ATENDIMENTO (PASSO A PASSO)
      ========================================================================= */}
      <section id="como-funciona" className="py-20 bg-[#081225] border-y border-[#dfb76c]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162c55]/80 border border-[#dfb76c]/30 text-xs font-semibold text-[#dfb76c]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Fluxo Transparente</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Como Funciona o Seu Atendimento
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Etapas simples e organizadas para dar início à sua representação jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Passo 1 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#dfb76c] to-[#a98239] text-[#081225] font-serif font-black text-2xl flex items-center justify-center shadow-lg">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Primeiro Contato</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Você nos aciona via WhatsApp ou ligação telefônica relatando resumidamente a situação.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#162c55] border-2 border-[#dfb76c] text-[#dfb76c] font-serif font-black text-2xl flex items-center justify-center shadow-lg">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Diagnóstico Técnico</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Análise documental, consulta processual no sistema e avaliação preliminar das medidas urgentes.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#162c55] border-2 border-[#dfb76c] text-[#dfb76c] font-serif font-black text-2xl flex items-center justify-center shadow-lg">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Estratégia de Defesa</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Definição das teses jurídicas, elaboração de peças ou comparecimento presencial na unidade policial/judiciária.
              </p>
            </div>

            {/* Passo 4 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#dfb76c] to-[#a98239] text-[#081225] font-serif font-black text-2xl flex items-center justify-center shadow-lg">
                4
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Acompanhamento Ativo</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Atuação contínua em audiências, julgamentos e recursos com comunicação constante ao cliente e à família.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          LOCALIZAÇÃO & CONTATO / FORMULÁRIO DE ATENDIMENTO
      ========================================================================= */}
      <section id="localizacao" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* DADOS DE CONTATO & ENDEREÇO (COL 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162c55]/80 border border-[#dfb76c]/30 text-xs font-semibold text-[#dfb76c]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Onde Estamos</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Escritório em Manaus
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Estrutura preparada para receber você com total privacidade e conforto, além de suporte para atendimento em todo o estado do Amazonas.
              </p>

              {/* Endereço Detalhado */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl glass-card border border-[#dfb76c]/20 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#162c55] text-[#dfb76c] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Endereço Presencial</h4>
                    <p className="text-sm text-slate-300 mt-1">
                      Rua Francisco José Furtado, nº 7, Bairro São Francisco
                    </p>
                    <p className="text-xs text-slate-400">
                      Manaus - AM, Brasil • CEP: 69079-200
                    </p>
                    <a
                      href="https://maps.google.com/?q=Rua+Francisco+Jos%C3%A9+Furtado+7+Sao+Francisco+Manaus+AM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dfb76c] hover:underline mt-2"
                    >
                      <span>Abrir no Google Maps / Waze</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Telefones Clicáveis */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:5592992127414"
                    className="p-4 rounded-2xl glass-card border border-[#dfb76c]/20 hover:border-[#dfb76c]/60 flex items-center gap-3.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#162c55] text-[#dfb76c] flex items-center justify-center shrink-0 group-hover:scale-105">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase">Telefone / WhatsApp</span>
                      <p className="text-sm font-bold text-white">(92) 99212-7414</p>
                    </div>
                  </a>

                  <a
                    href="tel:5592984083042"
                    className="p-4 rounded-2xl glass-card border border-[#dfb76c]/20 hover:border-[#dfb76c]/60 flex items-center gap-3.5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#162c55] text-[#dfb76c] flex items-center justify-center shrink-0 group-hover:scale-105">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase">Telefone Adicional</span>
                      <p className="text-sm font-bold text-white">(92) 98408-3042</p>
                    </div>
                  </a>
                </div>

                {/* Instagram Banner */}
                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-card border border-[#dfb76c]/20 hover:border-[#dfb76c]/60 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase">Instagram Oficial</span>
                      <p className="text-sm font-bold text-white">@imjeanbruno</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#dfb76c]">Seguir &rarr;</span>
                </a>
              </div>

            </div>

            {/* FORMULÁRIO DE CONTATO DIRETO PARA WHATSAPP (COL 7-12) */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-8 rounded-3xl glass-card border border-[#dfb76c]/30 shadow-2xl relative">
                <div className="mb-6 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white">Envie Sua Mensagem Direta</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Preencha os campos abaixo para iniciar o atendimento no WhatsApp com o Dr. Jean Bruno.
                  </p>
                </div>

                <form onSubmit={handleCustomFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ex: João da Silva"
                      className="w-full px-4 py-3 rounded-xl bg-[#040914]/80 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#dfb76c] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Assunto Principal
                    </label>
                    <select
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#040914]/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#dfb76c] transition-colors"
                    >
                      <option value="Direito Criminal / Urgência">Direito Criminal / Prisão / Flagrante</option>
                      <option value="Tribunal do Júri">Tribunal do Júri</option>
                      <option value="Execução Penal / Progressão de Regime">Execução Penal / Progressão de Regime</option>
                      <option value="Audiência de Custódia">Audiência de Custódia</option>
                      <option value="Direito Cível">Direito Cível (Ações / Contratos)</option>
                      <option value="Consultoria Preventiva">Consultoria Jurídica / Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Como podemos te ajudar? (Breve resumo)
                    </label>
                    <textarea
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Descreva brevemente a sua dúvida ou necessidade..."
                      className="w-full px-4 py-3 rounded-xl bg-[#040914]/80 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#dfb76c] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#c5a059] via-[#dfb76c] to-[#a98239] text-[#081225] shadow-lg shadow-[#c5a059]/25 hover:shadow-[#dfb76c]/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Iniciar Atendimento no WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Seus dados são protegidos por sigilo profissional da advocacia.
                  </p>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ / PERGUNTAS FREQUENTES
      ========================================================================= */}
      <section id="faq" className="py-20 bg-[#081225] border-t border-[#dfb76c]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162c55]/80 border border-[#dfb76c]/30 text-xs font-semibold text-[#dfb76c]">
              <FileText className="w-3.5 h-3.5" />
              <span>Dúvidas Comuns</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-300 text-sm">
              Esclarecimentos essenciais sobre atuação penal e procedimentos jurídicos.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-card border border-[#dfb76c]/20 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base sm:text-lg text-white hover:text-[#dfb76c] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#dfb76c] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FOOTER
      ========================================================================= */}
      <footer className="bg-[#040914] border-t border-[#dfb76c]/20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Coluna 1: Logo & Bio */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#081225] border border-[#dfb76c] p-0.5">
                  <Image
                    src="/logo.webp"
                    alt="Logo Dr. Jean Bruno"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-white block">Dr. Jean Bruno</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#dfb76c] font-semibold">
                    OAB/AM 17.710
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Advocacia combativa e estratégica com foco em Direito Criminal, Tribunal do Júri, Execução Penal e Direito Cível em Manaus/AM.
              </p>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#dfb76c] uppercase tracking-wider">
                Navegação
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-[#dfb76c] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Especialidades */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#dfb76c] uppercase tracking-wider">
                Especialidades
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>Tribunal do Júri</li>
                <li>Execução Penal & Progressão</li>
                <li>Prisão em Flagrante & Custódia</li>
                <li>Habeas Corpus & Recursos</li>
                <li>Direito Cível Estratégico</li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Redes */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#dfb76c] uppercase tracking-wider">
                Plantão & Contato
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <p>📲 (92) 99212-7414</p>
                <p>📲 (92) 98408-3042</p>
                <p>📍 Rua Francisco José Furtado, nº 7, São Francisco, Manaus/AM</p>
                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#dfb76c] hover:underline pt-1"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@imjeanbruno</span>
                </a>
              </div>
            </div>

          </div>

          {/* Rodapé Ético OAB e Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
            <div>
              <p>© {new Date().getFullYear()} Dr. Jean Bruno - Advocacia. Todos os direitos reservados.</p>
              <p className="mt-1">Inscrito na Ordem dos Advogados do Brasil, Seccional Amazonas: OAB/AM 17.710.</p>
            </div>
            <p className="text-[10px] text-slate-600 max-w-sm text-center sm:text-right">
              Este site tem caráter meramente informativo e respeita integralmente as diretrizes do Código de Ética e Disciplina da OAB.
            </p>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          BOTÃO FLUTUANTE DE WHATSAPP (FIXO MOBILE & DESKTOP)
      ========================================================================= */}
      <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <div className="hidden sm:block bg-[#081225] border border-[#dfb76c]/40 text-[#f3e5ab] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg animate-pulse">
          Plantão Online • Fale Conosco
        </div>
        
        <a
          href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 pulse-whatsapp group"
          aria-label="Falar no WhatsApp com Dr. Jean Bruno"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </aside>

    </div>
  );
}
