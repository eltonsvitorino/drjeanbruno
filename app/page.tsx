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
  Star,
  Quote,
  Building2,
  CalendarCheck,
  Check,
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
    { name: "O Escritório", href: "#escritorio" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Diferenciais", href: "#diferenciais" },
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
      subtitle: "Plantão e acompanhamento imediato 24h",
      description:
        "Presença imediata na delegacia e na Audiência de Custódia para combater abusos, pleitear relaxamento de prisão ilegal ou liberdade provisória com ou sem fiança.",
      badge: "Plantão 24h",
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
    { label: "Advogado Criminalista", detail: "Atuação combatente e técnica", icon: Gavel },
    { label: "33 Anos de Idade", detail: "Energia, vigor & dedicação", icon: Sparkles },
    { label: "Casado & Pai de Meninos", detail: "Valores humanos e familiares", icon: Heart },
    { label: "Espírita", detail: "Ética, respeito e humanismo", icon: Compass },
    { label: "Criador de Conteúdo", detail: "Direito claro e sem juridiquês", icon: InstagramIcon },
    { label: "OAB/AM 17.710", detail: "Inscrição ativa na Seccional Amazonas", icon: Award },
  ];

  // Google Reviews anexadas
  const clientReviews = [
    {
      name: "Mariza Sá",
      details: "7 avaliações",
      time: "5 meses atrás",
      rating: 5,
      avatarColor: "bg-[#7E57C2]",
      avatarInitial: "M",
      hasPhoto: true,
      text: "Atendimento humanizado, ambiente agradável, excelência no serviço prestado. Um advogado que pode ser recomendado sem receio nenhum! Parabéns pela excelência!",
    },
    {
      name: "Joyce Marques",
      details: "3 avaliações",
      time: "10 meses atrás",
      rating: 5,
      avatarColor: "bg-[#0288D1]",
      avatarInitial: "J",
      hasPhoto: false,
      text: "Excelente profissional, muito atencioso e comprometido com o cliente. Explica tudo com clareza e transmite confiança. Recomendo! Contrate sem medo...",
    },
    {
      name: "Rose Carvalho",
      details: "2 avaliações · 1 foto",
      time: "3 meses atrás",
      rating: 5,
      avatarColor: "bg-[#5D4037]",
      avatarInitial: "R",
      hasPhoto: true,
      text: "Passando pra agradecer por toda atenção e disponibilidade , muito obrigada Dr JEAN BRUNO. 👏🏾👏🏾👏🏾👏🏾👏🏾super recomendo pessoal ! 🙋🏾‍♀️🫶🏾🙏🏾",
    },
    {
      name: "Wanderson Balzary",
      details: "1 avaliação",
      time: "um mês atrás",
      rating: 5,
      avatarColor: "bg-[#00897B]",
      avatarInitial: "W",
      hasPhoto: false,
      text: "Ótimo atendimento, muito prestativo. Recomendo nota 10!",
    },
  ];

  const faqs = [
    {
      question: "Um familiar ou conhecido foi detido agora. Qual a primeira providência?",
      answer:
        "O primeiro passo fundamental é orientar a pessoa a não prestar depoimento sem a presença de um advogado e exercer o direito constitucional de permanecer em silêncio. Entre em contato imediatamente pelo nosso WhatsApp ou plantão telefônico para que seja feito o acompanhamento presencial na delegacia ou na Audiência de Custódia.",
    },
    {
      question: "Como funciona o atendimento e o cálculo de Progressão de Regime?",
      answer:
        "A progressão ocorre quando o apenado atinge o tempo exigido por lei (lapso temporal objetivo) e ostenta bom comportamento carcerário. Realizamos o cálculo minucioso de pena, verificação de remições por trabalho ou estudo e protocolo imediato perante a Vara de Execuções Penais de Manaus.",
    },
    {
      question: "O Dr. Jean Bruno atende apenas em Manaus ou também no interior e outros estados?",
      answer:
        "Nosso escritório físico fica situado em Manaus/AM (Rua Francisco José Furtado, nº 7, São Francisco). Atuamos presencialmente na capital, no interior do Amazonas e também realizamos consultorias e sustentações em Tribunais Superiores (STJ e STF em Brasília).",
    },
    {
      question: "Como funciona a primeira consulta e o orçamento?",
      answer:
        "O primeiro contato pode ser feito via WhatsApp ou ligação telefônica. Analisamos preliminarmente a demanda com absoluto sigilo profissional e agendamos a consulta (presencial no escritório ou online) com clareza e transparência.",
    },
    {
      question: "O escritório também atua em causas Cíveis?",
      answer:
        "Sim. Além da sólida atuação criminal e em plenário do júri, o Dr. Jean Bruno atua estrategicamente na esfera Cível em ações indenizatórias, cobranças, contratos e litígios patrimoniais.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#181B20] selection:bg-[#DFB76C] selection:text-[#181B20]">
      {/* =========================================================================
          TOP BANNER DE PLANTÃO & URGÊNCIAS (MINIMALISTA E ELEGANTE)
      ========================================================================= */}
      <div className="bg-[#F4EFEA] border-b border-[#DFB76C]/30 text-xs py-2 px-4 text-[#272B33]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A059]"></span>
            </span>
            <span className="text-[#A98239] font-bold tracking-wide uppercase text-[11px] sm:text-xs">
              Plantão Criminal 24h & Urgências
            </span>
            <span className="hidden md:inline text-stone-400">•</span>
            <span className="hidden md:inline text-stone-600 font-medium">
              Flagrantes • Audiência de Custódia • Tribunal do Júri • Manaus/AM
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold">
            <a
              href="tel:5592992127414"
              className="flex items-center gap-1.5 text-stone-800 hover:text-[#C5A059] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>(92) 99212-7414</span>
            </a>
            <span className="text-stone-300">/</span>
            <a
              href="tel:5592984083042"
              className="flex items-center gap-1.5 text-stone-800 hover:text-[#C5A059] transition-colors"
            >
              <span>(92) 98408-3042</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          NAVBAR PRINCIPAL (TRANSLÚCIDA, LEVE E MINIMALISTA)
      ========================================================================= */}
      <header className="sticky top-0 z-50 glass-nav-light transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <a href="#inicio" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#DFB76C] via-[#F3E5AB] to-[#C5A059] shadow-sm group-hover:scale-105 transition-transform duration-300">
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

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-stone-700 hover:text-[#A98239] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
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
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider gold-btn-gradient text-white shadow-md shadow-[#C5A059]/25 hover:shadow-lg hover:shadow-[#C5A059]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Atendimento Direto</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5]/98 border-b border-[#DFB76C]/30 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl backdrop-blur-xl">
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
                href={`https://wa.me/${mainWhatsAppNumber}?text=${emergencyWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider gold-btn-gradient text-white shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar no WhatsApp Agora</span>
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
          HERO SECTION (CORES LEVES, HUMANIZADA, PALETA DO ESCRITÓRIO)
      ========================================================================= */}
      <section id="inicio" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-sand-pattern">
        {/* Soft Warm Auras */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#DFB76C]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#F3E5AB]/40 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO TEXT (COL 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* OAB & LOCALIZAÇÃO BADGE */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-[#DFB76C]/40 text-xs sm:text-sm font-semibold text-[#7E5F20] shadow-sm">
                <Scale className="w-4 h-4 text-[#C5A059]" />
                <span>OAB/AM 17.710 • Manaus / Amazonas</span>
              </div>

              {/* MAIN TITLE */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181B20] leading-[1.18]">
                Advocacia Humanizada & Defesa Técnica da{" "}
                <span className="gold-gradient-text block mt-1 sm:inline">
                  Sua Liberdade
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Atuação combativa e próxima em <strong className="font-semibold text-stone-900">Direito Criminal</strong>,{" "}
                <strong className="font-semibold text-[#A98239]">Tribunal do Júri</strong>,{" "}
                <strong className="font-semibold text-stone-900">Execução Penal</strong> e resolução estratégica na seara{" "}
                <strong className="font-semibold text-stone-900">Cível</strong>.
              </p>

              {/* QUOTE CARD MINIMALISTA */}
              <div className="p-4 sm:p-5 rounded-2xl glass-card-light border-l-4 border-l-[#C5A059] text-stone-700 text-sm sm:text-base italic max-w-2xl mx-auto lg:mx-0 shadow-sm">
                &ldquo;Sou advogado e milito na seara CRIMINAL e CÍVEL, caso tenha algum problema com a justiça me ligue.&rdquo;
                <div className="mt-2 text-xs font-serif font-bold text-[#A98239] not-italic uppercase tracking-wider">
                  — Dr. Jean Bruno
                </div>
              </div>

              {/* HERO ACTION BUTTONS */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`https://wa.me/${mainWhatsAppNumber}?text=${defaultWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider gold-btn-gradient text-white shadow-lg shadow-[#C5A059]/30 hover:shadow-xl hover:shadow-[#C5A059]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Falar com Dr. Jean Bruno</span>
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
              <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 border-t border-stone-200">
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#A98239]">24 Horas</div>
                  <div className="text-[11px] text-stone-500 font-medium">Plantão de Urgência</div>
                </div>
                <div className="text-center lg:text-left border-x border-stone-200 px-2">
                  <div className="text-lg sm:text-xl font-bold font-serif text-[#A98239]">100% Sigilo</div>
                  <div className="text-[11px] text-stone-500 font-medium">Ética e Discrição</div>
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
                
                {/* Background Warm Aura */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#DFB76C]/30 via-[#F3E5AB]/40 to-[#C5A059]/20 blur-2xl transform scale-105" />

                {/* Main Card Frame */}
                <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white via-[#F4EFEA] to-[#EFE6DC] border border-[#DFB76C]/40 shadow-xl">
                  <div className="relative rounded-[20px] overflow-hidden bg-stone-100 aspect-[4/5]">
                    <Image
                      src="/perfil.webp"
                      alt="Dr. Jean Bruno Advogado Criminalista Manaus"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Floating Info Tag inside Image */}
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

                {/* Floating Badge (Side) */}
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
          EMERGENCY CTA STRIP (FLAGRANTE / CUSTÓDIA)
      ========================================================================= */}
      <section className="relative py-8 bg-gradient-to-r from-[#F4EFEA] via-[#EFE6DC] to-[#F4EFEA] border-y border-[#DFB76C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-700">
                <AlertTriangle className="w-6 h-6 animate-pulse text-[#A98239]" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181B20]">
                  Precisa de Atendimento Criminal Urgente em Manaus?
                </h3>
                <p className="text-sm text-stone-600">
                  Prisão em flagrante, mandados de busca e apreensão ou audiência de custódia iminente.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/${mainWhatsAppNumber}?text=${emergencyWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-rose-700 hover:bg-rose-800 text-white shadow-md shadow-rose-700/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Acionar Plantão 24h</span>
              </a>
              <a
                href="tel:5592992127414"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-stone-800 border border-stone-300 bg-white hover:border-[#C5A059]"
              >
                <Phone className="w-4 h-4 text-[#A98239]" />
                <span>(92) 99212-7414</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ÁREAS DE ATUAÇÃO ESTRATÉGICA
      ========================================================================= */}
      <section id="atuacao" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
              <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Especialidades Jurídicas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
              Áreas de Atuação Estratégica
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Atuação técnica e humanizada, garantindo a proteção intransigente das suas garantias constitucionais, da sua liberdade e do seu patrimônio.
            </p>
          </div>

          {/* Grid de Cards Minimalistas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between glass-card-light glass-card-light-hover ${
                    area.highlight ? "border-[#C5A059]/60 bg-gradient-to-b from-white to-[#FAF4E6]" : ""
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F4EFEA] to-[#EFE6DC] border border-[#DFB76C]/40 flex items-center justify-center text-[#A98239] shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF4E6] text-[#7E5F20] border border-[#DFB76C]/30">
                        {area.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#181B20] mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#A98239] mb-3">
                      {area.subtitle}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                      {area.description}
                    </p>
                  </div>

                  {/* Botão de contato direto da área */}
                  <div className="pt-6 mt-6 border-t border-stone-200">
                    <a
                      href={`https://wa.me/${mainWhatsAppNumber}?text=${encodeURIComponent(
                        `Olá, Dr. Jean Bruno! Gostaria de uma consulta sobre *${area.title}*.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#A98239] hover:text-[#181B20] transition-colors group"
                    >
                      <span>Consultar sobre {area.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botão Central de Contato */}
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
          QUEM SOU EU / SOBRE O DR. JEAN BRUNO (HUMANIZADO)
      ========================================================================= */}
      <section id="sobre" className="py-20 lg:py-28 bg-[#F5EFEB] relative border-y border-[#DFB76C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* IMAGENS DO DR. JEAN (COL 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Card com Foto OAB e Escritório */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Foto OAB Amazonas */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-2 border border-[#DFB76C]/30 shadow-md group">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100">
                    <Image
                      src="/oab.webp"
                      alt="Dr. Jean Bruno na Plenária da OAB Amazonas"
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

              {/* Box de Resumo da Banca */}
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

            {/* TEXTO BIOGRÁFICO / QUEM SOU EU (COL 7-12) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Quem Sou Eu?</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20] leading-tight">
                Dr. Jean Bruno
                <span className="block text-xl sm:text-2xl font-light text-[#A98239] mt-1">
                  Advocacia com Alma, Técnica e Proximidade
                </span>
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                Com inscrição ativa na <strong className="text-[#181B20] font-semibold">OAB/AM sob o nº 17.710</strong>, atuo com foco rigoroso nas áreas <strong className="text-[#7E5F20] font-semibold">Criminal</strong> e <strong className="text-[#181B20] font-semibold">Cível</strong>, oferecendo uma advocacia presente, dinâmica e comprometida com a justiça real.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                Acredito que a defesa da liberdade e a busca pelos direitos de cada cliente exigem não apenas conhecimento aprofundado das leis e da jurisprudência, mas também sensibilidade humana, disponibilidade integral e coragem diante dos tribunais.
              </p>

              {/* Grid de Atributos Humanizados */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {personalAttributes.map((attr, i) => {
                  const Icon = attr.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white border border-[#DFB76C]/30 hover:border-[#C5A059] transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-[#A98239] mb-1">
                        <Icon className="w-4 h-4" />
                        <span className="text-xs font-bold text-[#181B20]">{attr.label}</span>
                      </div>
                      <p className="text-[11px] text-stone-500">{attr.detail}</p>
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
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider gold-btn-gradient text-white hover:scale-105 transition-transform shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Consulta Pessoal</span>
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
          O ESCRITÓRIO & ATENDIMENTO PRESENCIAL (ESCRITORIO2.WEBP EM DESTAQUE)
      ========================================================================= */}
      <section id="escritorio" className="py-20 lg:py-28 relative bg-sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Ambiente & Estrutura</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
              Atendimento Humanizado & Conforto
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Um ambiente projetado para acolher você e sua família com total discrição, privacidade e atenção dedicada a cada detalhe do seu caso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Imagem Principal da Mesa de Atendimento (escritorio2.webp) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl p-3 bg-white border border-[#DFB76C]/40 shadow-xl overflow-hidden group">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src="/escritorio2.webp"
                    alt="Dr. Jean Bruno atendendo clientes em seu escritório em Manaus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#DFB76C]/40 shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-[#181B20] text-sm sm:text-base">
                          Mesa de Consultas e Atendimento Direto
                        </h4>
                        <p className="text-xs text-stone-500">
                          Reuniões estratégicas com sigilo profissional e atenção individualizada.
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#7E5F20] bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#DFB76C]/30 shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#C5A059]" /> Presencial & Online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destaques do Atendimento Presencial */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-4">
                <div className="p-5 rounded-2xl glass-card-light border border-[#DFB76C]/30 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] border border-[#DFB76C]/40 text-[#A98239] flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-base">Sigilo Absoluto</h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-1">
                      Sala de reuniões privativa para tratar de estratégias de defesa criminal e cível com total tranquilidade.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass-card-light border border-[#DFB76C]/30 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] border border-[#DFB76C]/40 text-[#A98239] flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-base">Atendimento com Horário Marcado</h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-1">
                      Agilidade e respeito ao seu tempo, garantindo dedicação exclusiva durante toda a sua consulta.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass-card-light border border-[#DFB76C]/30 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] border border-[#DFB76C]/40 text-[#A98239] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-base">Localização Acessível em Manaus</h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-1">
                      Bairro São Francisco, com facilidade de acesso a fóruns, tribunais e órgãos policiais da capital.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${mainWhatsAppNumber}?text=${encodeURIComponent(
                    "Olá, Dr. Jean Bruno! Gostaria de agendar uma visita/consulta presencial no seu escritório."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider gold-btn-gradient text-white shadow-md hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Consulta no Escritório</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          AVALIAÇÕES REAIS DOS CLIENTES (GOOGLE REVIEWS - ANEXADAS)
      ========================================================================= */}
      <section id="avaliacoes" className="py-20 lg:py-28 bg-[#F5EFEB] relative border-y border-[#DFB76C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header da Seção de Avaliações */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
              <GoogleIcon className="w-4 h-4" />
              <span>Avaliações Reais no Google</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
              O que Dizem Nossos Clientes
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Depoimentos reais e verificados de quem confiou sua causa e liberdade ao Dr. Jean Bruno.
            </p>

            {/* Google Rating Badge */}
            <div className="pt-3 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-[#DFB76C]/40 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-serif font-bold text-stone-900 text-base">5.0 / 5.0</span>
              <span className="text-xs text-stone-500 border-l border-stone-300 pl-3">
                Excelente no Google
              </span>
            </div>
          </div>

          {/* Grid de Avaliações (4 cards reais dos anexos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientReviews.map((rev, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DFB76C]/30 hover:border-[#C5A059] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar do Review (Google Style) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className={`w-11 h-11 rounded-full ${rev.avatarColor} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}
                      >
                        {rev.avatarInitial}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-stone-900 text-sm sm:text-base">
                            {rev.name}
                          </h4>
                          <GoogleIcon className="w-3.5 h-3.5 shrink-0" />
                        </div>
                        <p className="text-[11px] text-stone-500 font-light">
                          {rev.details} • <span className="text-stone-400">{rev.time}</span>
                        </p>
                      </div>
                    </div>

                    <Quote className="w-6 h-6 text-[#DFB76C]/40" />
                  </div>

                  {/* Estrelas */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Texto do Depoimento */}
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic font-light">
                    &ldquo;{rev.text}&rdquo;
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

          {/* CTA após depoimentos */}
          <div className="mt-12 text-center">
            <p className="text-sm text-stone-600 mb-4">
              Precisa de um atendimento humanizado, transparente e dedicado à sua causa?
            </p>
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
          DIFERENCIAIS & PILARES DO ESCRITÓRIO
      ========================================================================= */}
      <section id="diferenciais" className="py-20 lg:py-28 relative bg-sand-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Nossos Pilares</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
              Por que Confiar Sua Causa ao Dr. Jean Bruno
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Princípios inegociáveis que orientam cada atendimento, peça processual e defesa em audiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl glass-card-light glass-card-light-hover border border-[#DFB76C]/30 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#DFB76C]/40 text-[#A98239] flex items-center justify-center mb-5 font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#181B20] mb-2">Pronto Atendimento</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Resposta rápida para situações emergenciais como prisões em flagrante, apreensões e cumprimento de mandados judiciais.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card-light glass-card-light-hover border border-[#DFB76C]/30 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#DFB76C]/40 text-[#A98239] flex items-center justify-center mb-5 font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#181B20] mb-2">Atendimento Humanizado</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Você conversa diretamente com o advogado responsável pelo seu processo, sem intermediários ou burocracias.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card-light glass-card-light-hover border border-[#DFB76C]/30 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#DFB76C]/40 text-[#A98239] flex items-center justify-center mb-5 font-bold">
                <Gavel className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#181B20] mb-2">Defesa Combativa</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Análise minuciosa de nulidades, laudos periciais e depoimentos para construir teses sólidas perante juízes e jurados.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card-light glass-card-light-hover border border-[#DFB76C]/30 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#DFB76C]/40 text-[#A98239] flex items-center justify-center mb-5 font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#181B20] mb-2">Sigilo & Transparência</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Sigilo profissional absoluto resguardado pelo Estatuto da OAB, com relatórios constantes sobre o andamento da ação.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          COMO FUNCIONA O ATENDIMENTO (PASSO A PASSO)
      ========================================================================= */}
      <section id="como-funciona" className="py-20 bg-[#F5EFEB] border-y border-[#DFB76C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Fluxo Transparente</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
              Como Funciona o Seu Atendimento
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Etapas simples e organizadas para dar início à sua representação jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Passo 1 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full gold-btn-gradient text-white font-serif font-black text-2xl flex items-center justify-center shadow-md">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-[#181B20]">Primeiro Contato</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Você nos aciona via WhatsApp ou ligação telefônica relatando resumidamente a situação.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#DFB76C] text-[#A98239] font-serif font-black text-2xl flex items-center justify-center shadow-md">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-[#181B20]">Diagnóstico Técnico</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Análise documental, consulta processual no sistema e avaliação preliminar das medidas cabíveis.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#DFB76C] text-[#A98239] font-serif font-black text-2xl flex items-center justify-center shadow-md">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-[#181B20]">Estratégia de Defesa</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Definição das teses jurídicas, elaboração de peças ou comparecimento presencial imediato.
              </p>
            </div>

            {/* Passo 4 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full gold-btn-gradient text-white font-serif font-black text-2xl flex items-center justify-center shadow-md">
                4
              </div>
              <h3 className="font-serif font-bold text-lg text-[#181B20]">Acompanhamento Ativo</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Atuação contínua em audiências, julgamentos e recursos com comunicação constante ao cliente.
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
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Onde Estamos</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181B20]">
                Escritório em Manaus
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Estrutura preparada para receber você com total privacidade e conforto, além de suporte para atendimento em todo o estado do Amazonas.
              </p>

              {/* Endereço Detalhado */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-[#DFB76C]/30 shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] text-[#A98239] border border-[#DFB76C]/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#181B20] text-base">Endereço Presencial</h4>
                    <p className="text-sm text-stone-700 mt-1">
                      Rua Francisco José Furtado, nº 7, Bairro São Francisco
                    </p>
                    <p className="text-xs text-stone-500">
                      Manaus - AM, Brasil • CEP: 69079-200
                    </p>
                    <a
                      href="https://maps.google.com/?q=Rua+Francisco+Jos%C3%A9+Furtado+7+Sao+Francisco+Manaus+AM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A98239] hover:underline mt-2"
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
                    className="p-4 rounded-2xl bg-white border border-[#DFB76C]/30 hover:border-[#C5A059] flex items-center gap-3.5 transition-all shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] text-[#A98239] border border-[#DFB76C]/30 flex items-center justify-center shrink-0 group-hover:scale-105">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-400 uppercase font-semibold">Telefone / WhatsApp</span>
                      <p className="text-sm font-bold text-[#181B20]">(92) 99212-7414</p>
                    </div>
                  </a>

                  <a
                    href="tel:5592984083042"
                    className="p-4 rounded-2xl bg-white border border-[#DFB76C]/30 hover:border-[#C5A059] flex items-center gap-3.5 transition-all shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] text-[#A98239] border border-[#DFB76C]/30 flex items-center justify-center shrink-0 group-hover:scale-105">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-400 uppercase font-semibold">Telefone Adicional</span>
                      <p className="text-sm font-bold text-[#181B20]">(92) 98408-3042</p>
                    </div>
                  </a>
                </div>

                {/* Instagram Banner */}
                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#DFB76C]/30 hover:border-[#C5A059] flex items-center justify-between transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-sm">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-400 uppercase font-semibold">Instagram Oficial</span>
                      <p className="text-sm font-bold text-[#181B20]">@imjeanbruno</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#A98239]">Seguir &rarr;</span>
                </a>
              </div>

            </div>

            {/* FORMULÁRIO DE CONTATO DIRETO PARA WHATSAPP (COL 7-12) */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DFB76C]/40 shadow-xl relative">
                <div className="mb-6 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#181B20]">Envie Sua Mensagem Direta</h3>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Preencha os campos abaixo para iniciar o atendimento no WhatsApp com o Dr. Jean Bruno.
                  </p>
                </div>

                <form onSubmit={handleCustomFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ex: João da Silva"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Assunto Principal
                    </label>
                    <select
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
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
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Como podemos te ajudar? (Breve resumo)
                    </label>
                    <textarea
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Descreva brevemente a sua dúvida ou necessidade..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 text-[#181B20] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm uppercase tracking-wider gold-btn-gradient text-white shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Iniciar Atendimento no WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-stone-500 text-center">
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
      <section id="faq" className="py-20 bg-[#F5EFEB] border-t border-[#DFB76C]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFB76C]/40 text-xs font-semibold text-[#7E5F20] shadow-sm">
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Dúvidas Comuns</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#181B20]">
              Perguntas Frequentes
            </h2>
            <p className="text-stone-600 text-sm">
              Esclarecimentos essenciais sobre atuação penal e procedimentos jurídicos.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-[#DFB76C]/30 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base sm:text-lg text-[#181B20] hover:text-[#A98239] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A98239] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-4 animate-in fade-in duration-200">
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
          FOOTER (MINIMALISTA E ELEGANTE)
      ========================================================================= */}
      <footer className="bg-[#FAF8F5] border-t border-[#DFB76C]/30 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-200">
            
            {/* Coluna 1: Logo & Bio */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-[#DFB76C] p-0.5 shadow-sm">
                  <Image
                    src="/logo.webp"
                    alt="Logo Dr. Jean Bruno"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-[#181B20] block">Dr. Jean Bruno</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A98239] font-bold">
                    OAB/AM 17.710
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Advocacia combativa, humanizada e estratégica com foco em Direito Criminal, Tribunal do Júri, Execução Penal e Direito Cível em Manaus/AM.
              </p>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#7E5F20] uppercase tracking-wider">
                Navegação
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-[#A98239] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Especialidades */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#7E5F20] uppercase tracking-wider">
                Especialidades
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                <li>Tribunal do Júri</li>
                <li>Execução Penal & Progressão</li>
                <li>Prisão em Flagrante & Custódia</li>
                <li>Habeas Corpus & Recursos</li>
                <li>Direito Cível Estratégico</li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Redes */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#7E5F20] uppercase tracking-wider">
                Plantão & Contato
              </h4>
              <div className="space-y-2 text-xs text-stone-600">
                <p>📲 (92) 99212-7414</p>
                <p>📲 (92) 98408-3042</p>
                <p>📍 Rua Francisco José Furtado, nº 7, São Francisco, Manaus/AM</p>
                <a
                  href="https://instagram.com/imjeanbruno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A98239] font-medium hover:underline pt-1"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@imjeanbruno</span>
                </a>
              </div>
            </div>

          </div>

          {/* Rodapé Ético OAB e Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-stone-500">
            <div>
              <p>© {new Date().getFullYear()} Dr. Jean Bruno - Advocacia. Todos os direitos reservados.</p>
              <p className="mt-1">Inscrito na Ordem dos Advogados do Brasil, Seccional Amazonas: OAB/AM 17.710.</p>
            </div>
            <p className="text-[10px] text-stone-400 max-w-sm text-center sm:text-right">
              Este site tem caráter meramente informativo e respeita integralmente as diretrizes do Código de Ética e Disciplina da OAB.
            </p>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          BOTÃO FLUTUANTE DE WHATSAPP (FIXO MOBILE & DESKTOP)
      ========================================================================= */}
      <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <div className="hidden sm:block bg-white border border-[#DFB76C]/60 text-[#7E5F20] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg">
          Plantão Online • Fale Conosco
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
