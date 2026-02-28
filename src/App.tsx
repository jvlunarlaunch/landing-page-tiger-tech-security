import React from 'react';
import { motion } from 'motion/react';
import { Shield, Radar, Eye, AlertTriangle, CheckCircle2, ChevronDown, ShieldAlert, Lock, Server, Smartphone, Users, MessageSquareWarning, Fingerprint, MailWarning, Search, DatabaseZap, Scale, AudioLines, Menu, X } from 'lucide-react';
import { Button } from './components/Button';
import logo from './assets/logo_tiger_tech_security.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-tiger-dark text-gray-300 font-sans selection:bg-tiger-blue/30">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tiger-blue/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-tiger-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Tiger Tech Security" className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Tiger Tech <span className="text-tiger-blue">Security</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#problema" className="hover:text-white transition-colors">O Problema</a>
            <a href="#protocolo" className="hover:text-white transition-colors">Protocolo RBM</a>
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <Button size="sm" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              Auditoria Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-tiger-dark/95 backdrop-blur-xl border-b border-white/5 p-6 space-y-4 flex flex-col items-center text-center"
          >
            <a href="#problema" className="w-full py-2 text-lg font-medium hover:text-tiger-blue transition-colors" onClick={() => setIsMenuOpen(false)}>O Problema</a>
            <a href="#protocolo" className="w-full py-2 text-lg font-medium hover:text-tiger-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Protocolo RBM</a>
            <a href="#resultados" className="w-full py-2 text-lg font-medium hover:text-tiger-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Resultados</a>
            <Button
              size="lg"
              className="w-full text-center"
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Auditoria Gratuita
            </Button>
          </motion.div>
        )}
      </nav>

      <main className="relative z-10 pt-20 md:pt-24 pb-12 md:pb-16">
        {/* Hero Section - Premium Split Layout */}
        <section className="max-w-7xl mx-auto px-6 pt-8 md:pt-16 pb-12 md:pb-20 min-h-[calc(100vh-80px)] xl:min-h-0 xl:h-[calc(100vh-80px)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            {/* Left Column: Copy */}
            <div className="flex flex-col items-start text-left relative z-10 lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tiger-blue/5 border border-tiger-blue/20 text-tiger-blue text-xs font-mono mb-6 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-tiger-blue animate-pulse" />
                <span>SISTEMA DE AUDITORIA ATIVO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-none sm:leading-none mb-4"
              >
                Sua exposição digital já existe.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiger-blue to-blue-400">
                  Quem vai encontrá-la primeiro?
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base lg:text-lg text-gray-400 max-w-xl mb-6 leading-snug"
              >
                Mapeamos sua exposição, blindamos sua operação e monitoramos ameaças 24h — para que uma invasão nunca defina a sua história.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto"
              >
                <Button size="lg" withArrow onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(0,136,255,0.4)]">
                  Solicitar Auditoria de Exposição
                </Button>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">Sem compromisso</span>
                  <span className="text-[10px] font-mono text-gray-500">RESPOSTA EM 24H</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-8 lg:mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6 sm:gap-12 w-full"
              >
                <div>
                  <div className="text-2xl lg:text-3xl font-display font-bold text-white mb-0.5">Google</div>
                  <div className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">Cybersecurity Certified</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-display font-bold text-white mb-0.5">57º</div>
                  <div className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">De 2.000+ no Desafio TDI</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Premium Visual */}
            {/* Right Column: Premium Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full aspect-square md:aspect-[4/3] max-w-[480px] xl:max-w-[500px] mx-auto lg:ml-auto block lg:mt-0 mt-8"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-tiger-blue/20 blur-[100px] rounded-full pointer-events-none" />

              {/* Main Glass Panel */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 bg-tiger-dark/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="h-8 lg:h-10 border-b border-white/10 flex items-center px-4 justify-between bg-white/[0.02]">
                  <div className="flex gap-1.5 lg:gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="text-[10px] sm:text-[12px] font-mono text-gray-500 tracking-widest">OSINT_SCAN_INITIALIZED</div>
                </div>

                {/* Body */}
                <div className="p-4 xl:p-5 flex-1 flex flex-col gap-3 xl:gap-4 font-mono text-[11px] xl:text-[13px]">
                  <div className="flex justify-between items-center text-gray-400 gap-2">
                    <span className="flex items-center gap-2 truncate"><Server className="w-4 h-4 text-gray-500 shrink-0" /> Scanning public databases...</span>
                    <span className="text-tiger-blue animate-pulse shrink-0">RUNNING</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400 gap-2">
                    <span className="flex items-center gap-2 truncate"><Smartphone className="w-4 h-4 text-gray-500 shrink-0" /> Checking WhatsApp exposure...</span>
                    <span className="text-red-400 shrink-0">VULNERABLE</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400 gap-2">
                    <span className="flex items-center gap-2 truncate"><Users className="w-4 h-4 text-gray-500 shrink-0" /> Analyzing leaked credentials...</span>
                    <span className="text-yellow-400 shrink-0">3 FOUND</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400 gap-2">
                    <span className="flex items-center gap-2 truncate"><Search className="w-4 h-4 text-gray-500 shrink-0" /> Crawling dark web forums...</span>
                    <span className="text-tiger-blue animate-pulse shrink-0">RUNNING</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400 gap-2">
                    <span className="flex items-center gap-2 truncate"><DatabaseZap className="w-4 h-4 text-gray-500 shrink-0" /> Validating domain records...</span>
                    <span className="text-green-500 shrink-0">CLEAR</span>
                  </div>
                  <div className="hidden sm:flex justify-between items-center text-gray-400 gap-2">
                    <span className="flex items-center gap-2 truncate"><AudioLines className="w-4 h-4 text-gray-500 shrink-0" /> Detecting deepfake footprint...</span>
                    <span className="text-yellow-400 shrink-0">1 FOUND</span>
                  </div>

                  {/* Radar Animation */}
                  <div className="mt-auto relative h-24 md:h-28 lg:h-32 xl:h-36 w-full border border-white/5 rounded-xl bg-tiger-dark/80 overflow-hidden flex items-center justify-center shrink-0">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Radar Rings */}
                    <div className="absolute inset-0 m-auto aspect-square h-full flex items-center justify-center opacity-40">
                      <div className="w-[90%] h-[90%] border border-tiger-blue/40 rounded-full absolute" />
                      <div className="w-[60%] h-[60%] border border-tiger-blue/30 rounded-full absolute" />
                      <div className="w-[30%] h-[30%] border border-tiger-blue/20 rounded-full absolute" />
                      {/* Crosshairs */}
                      <div className="w-full h-[1px] bg-tiger-blue/20 absolute" />
                      <div className="h-full w-[1px] bg-tiger-blue/20 absolute" />
                    </div>

                    {/* Sweeping Beam */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 m-auto aspect-square h-full rounded-full"
                    >
                      {/* The geometric arc gradient (Left to Top) */}
                      <div
                        className="absolute inset-0 rounded-full mix-blend-screen"
                        style={{
                          background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(0,136,255,0.05) 270deg, rgba(0,136,255,0.4) 360deg)'
                        }}
                      />

                      {/* Leading edge (Top, moving clockwise) */}
                      <div className="absolute top-0 bottom-1/2 left-1/2 w-[2px] bg-tiger-blue origin-bottom shadow-[0_0_10px_rgba(0,136,255,0.8)] -translate-x-1/2" />

                      {/* Trailing edge (Left) */}
                      <div className="absolute top-1/2 bottom-1/2 left-0 right-1/2 h-[2px] bg-tiger-blue origin-right opacity-60 shadow-[0_0_10px_rgba(0,136,255,0.8)] -translate-y-1/2" />
                    </motion.div>

                    {/* Blips (Targets) */}
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute top-[30%] left-[60%] w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                    />
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
                      className="absolute top-[70%] left-[30%] w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                    />
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2.1 }}
                      className="absolute top-[40%] left-[20%] w-2 h-2 rounded-full bg-tiger-blue shadow-[0_0_10px_rgba(0,136,255,0.8)]"
                    />

                    {/* Center Icon */}
                    <div className="relative z-10 w-8 h-8 rounded-full bg-tiger-dark border border-tiger-blue/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,136,255,0.3)]">
                      <Shield className="w-4 h-4 text-tiger-blue" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 md:-right-6 top-1/4 p-3 md:p-4 rounded-xl border border-white/10 bg-tiger-dark/90 backdrop-blur-md shadow-2xl flex items-center gap-2 z-20 scale-95 md:scale-100"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Ameaça Detectada</div>
                  <div className="text-[9px] text-gray-400 font-mono">VAZAMENTO DE DADOS</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 md:-left-8 bottom-1/4 p-3 md:p-4 rounded-xl border border-white/10 bg-tiger-dark/90 backdrop-blur-md shadow-2xl flex items-center gap-2 z-20 scale-95 md:scale-100"
              >
                <div className="w-8 h-8 rounded-full bg-tiger-blue/10 border border-tiger-blue/20 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-tiger-blue" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Protocolo RBM</div>
                  <div className="text-[9px] text-tiger-blue font-mono">BLINDAGEM ATIVA</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Resultados / Provas */}
        <section id="resultados" className="py-16 md:py-24 bg-tiger-gray/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Não somos uma empresa de TI genérica.
              </h2>
              <p className="text-xl text-tiger-blue font-medium">
                Somos especialistas em proteger quem governa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
              {[
                {
                  metric: "57º",
                  label: "de 2.000+ no Desafio TDI",
                  desc: "Resultado real e verificável em hacking."
                },
                {
                  metric: "Google",
                  label: "Cybersecurity Certified",
                  desc: "Formação técnica de referência internacional."
                },
                {
                  metric: "6",
                  label: "Vetores de Ataque",
                  desc: "Mapeados e cobertos pelo Protocolo RBM em PE."
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 md:p-8 rounded-2xl bg-tiger-dark border border-white/5 relative overflow-hidden group hover:border-tiger-blue/30 transition-colors ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-tiger-blue/5 rounded-bl-full transition-transform group-hover:scale-110 group-hover:bg-tiger-blue/10" />
                  <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">{stat.metric}</div>
                  <div className="text-tiger-blue text-sm md:text-base font-medium mb-1 md:mb-2">{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 text-center">O Custo da Desatenção</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
                  <div className="text-red-400 font-mono text-sm mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Antes (O Padrão)
                  </div>
                  <p className="text-gray-300 text-sm">Gabinete com grupos de WhatsApp estratégicos sem proteção, zero visibilidade sobre exposição de assessores em bases vazadas.</p>
                </div>
                <div className="p-6 rounded-xl border border-tiger-blue/20 bg-tiger-blue/5">
                  <div className="text-tiger-blue font-mono text-sm mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Depois (O Risco Realizado)
                  </div>
                  <p className="text-gray-300 text-sm">Candidato que identificou vazamento de comunicação interna apenas após a informação aparecer na imprensa — dano irreversível.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-20 pt-10 border-t border-white/5 text-center">
              <p className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">Protegendo a operação de</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 font-medium text-sm md:text-base">
                <span>Gabinetes de Deputados Estaduais</span>
                <span className="hidden md:inline text-gray-700">•</span>
                <span>Lideranças Partidárias</span>
                <span className="hidden md:inline text-gray-700">•</span>
                <span>Assessorias Políticas (PE)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Apresentação do Problema */}
        <section id="problema" className="py-20 md:py-32 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-6">
                O INIMIGO INVISÍVEL
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Exposição digital não gerenciada.
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                O risco que nenhum assessor sabe dimensionar. Lideranças políticas acumulam exposição ao longo de anos sem qualquer auditoria.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Comunicações internas em apps não criptografados",
                  "Assessores usando dispositivos pessoais para estratégia",
                  "Dados sensíveis da equipe em bases vazadas públicas"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-medium text-white mb-3">O custo de não resolver:</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Vazamento de estratégia para adversários. Sequestro de Instagram com base construída por anos. Áudio deepfake em grupos antes da eleição. Ransomware paralisando prefeitura. <strong className="text-white">O dano é irreversível no momento em que vem à tona.</strong>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-tiger-blue/20 to-transparent blur-3xl rounded-full" />
              <div className="relative grid gap-4">
                {[
                  `"Nunca passei por isso, então acho que estou seguro"`,
                  `"Minha equipe cuida das redes sociais, isso é suficiente"`,
                  `"Só fico sabendo quando um eleitor me manda um print estranho"`,
                  `"Não sei o que adversários descobrem sobre mim sem me hackear"`,
                  `"Prefiro não pensar nisso perto da campanha"`
                ].map((quote, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-xl bg-tiger-gray border border-white/5 text-gray-300 italic text-sm shadow-lg"
                  >
                    {quote}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* O Campo de Batalha Digital */}
        <section id="vetores" className="py-20 md:py-32 bg-tiger-dark border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-block px-3 py-1 rounded-full bg-tiger-blue/10 border border-tiger-blue/20 text-tiger-blue text-xs font-mono mb-6">
                O CAMPO DE BATALHA DIGITAL
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Conheça os 7 vetores de ataque mais usados contra lideranças políticas hoje.
              </h2>
              <p className="text-xl text-gray-400">
                Adversários não precisam ser hackers profissionais. Com as ferramentas disponíveis em 2026, qualquer um com motivação e acesso à internet pode executar esses ataques. A diferença está em quem se preparou antes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {[
                {
                  icon: <MessageSquareWarning className="w-8 h-8 text-tiger-blue" />,
                  title: "Espionagem de WhatsApp",
                  desc: "Grupos estratégicos de campanha podem estar sendo monitorados em tempo real. Não é necessário invadir o grupo — basta um único dispositivo comprometido entre os membros. A estratégia interna chega ao adversário sem que ninguém no gabinete perceba."
                },
                {
                  icon: <Fingerprint className="w-8 h-8 text-tiger-blue" />,
                  title: "Invasão de Contas em Redes Sociais",
                  desc: "Perfis verificados de deputados são sequestrados via SIM swap ou phishing de e-mail de recuperação. O parlamentar perde o acesso. O perfil passa a publicar conteúdo de terceiros para uma base de seguidores construída por anos."
                },
                {
                  icon: <MailWarning className="w-8 h-8 text-tiger-blue" />,
                  title: "Phishing e Engenharia Social",
                  desc: "Um assessor abre um PDF enviado por número desconhecido. Em minutos, um terceiro tem acesso completo à comunicação interna do gabinete — sem invadir nada, sem que ninguém perceba. O elo mais fraco quase nunca é o deputado. É quem está ao redor dele."
                },
                {
                  icon: <Search className="w-8 h-8 text-tiger-blue" />,
                  title: "OSINT de Adversários",
                  desc: "Nome, CPF, endereço, rotina e senhas de assessores estão disponíveis publicamente em bases de dados vazadas. Um adversário com intenção leva menos de uma hora para mapear toda a equipe e encontrar uma entrada. Você não precisa ser hackeado para estar exposto."
                },
                {
                  icon: <DatabaseZap className="w-8 h-8 text-tiger-blue" />,
                  title: "Sabotagem de Servidores e Banco de Dados",
                  desc: "Sistemas de prefeituras e gabinetes têm sido alvos de ataques coordenados — servidores sequestrados, documentos apagados, banco de dados corrompidos. Uma estrutura digital paralisada na reta final de uma campanha é narrativa pronta para o adversário."
                },
                {
                  icon: <Scale className="w-8 h-8 text-tiger-blue" />,
                  title: "Crimes contra a Honra e Fake News",
                  desc: "Uma notícia falsa publicada por perfil anônimo circula em centenas de grupos antes que você saiba que existe. Quando a publicação é apagada, a prova some. Sem cadeia de custódia digital, não há Boletim de Ocorrência que avance — e não há ação judicial possível."
                },
                {
                  icon: <AudioLines className="w-8 h-8 text-tiger-blue" />,
                  title: "Deepfake de Áudio e Vídeo",
                  desc: "Com 30 segundos de áudio público — um discurso, uma entrevista, um vídeo no Instagram — qualquer pessoa pode gerar um áudio seu dizendo o que quiser, usando ferramentas gratuitas disponíveis hoje. O material é distribuído em grupos antes de qualquer resposta ser possível."
                }
              ].map((vetor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-2xl bg-tiger-gray/50 border border-white/5 hover:border-tiger-blue/30 transition-colors group ${i === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                >
                  <div className="mb-6 p-3 bg-tiger-blue/10 rounded-xl inline-block group-hover:scale-110 transition-transform origin-left">{vetor.icon}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{vetor.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{vetor.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mecanismo Único */}
        <section id="protocolo" className="py-20 md:py-32 bg-tiger-gray/50 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-tiger-blue/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Protocolo RBM
              </h2>
              <p className="text-xl text-gray-400">
                A Tiger Tech não espera o ataque acontecer. Nós mapeamos o que já está exposto hoje e eliminamos cada vulnerabilidade antes que um adversário a encontre.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12 relative mt-16">
              {/* Connecting Line */}
              <div className="absolute left-[3.5rem] top-10 bottom-10 w-[1px] bg-gradient-to-b from-tiger-blue/50 via-white/10 to-transparent hidden md:block" />

              {/* R */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-2xl bg-tiger-dark border border-tiger-blue/30 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,136,255,0.15)] group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-tiger-blue/10 rounded-2xl" />
                  <Radar className="w-8 h-8 md:w-12 md:h-12 text-tiger-blue" />
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-tiger-dark border border-tiger-blue text-tiger-blue flex items-center justify-center font-mono text-[10px] md:text-sm font-bold">R</div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-3xl font-display font-bold text-white">Reconhecimento</h3>
                    <span className="hidden sm:inline-block text-xs font-mono text-tiger-blue px-2 py-1 rounded bg-tiger-blue/10 border border-tiger-blue/20 tracking-widest uppercase">Fase 01</span>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed bg-tiger-gray/30 p-6 rounded-2xl border border-white/5 shadow-lg">
                    Fazemos o que um adversário faria: mapeamos tudo exposto sobre você, assessores, contas e domínios. OSINT completo. Você recebe um relatório com o próprio risco na tela.
                  </p>
                </div>
              </motion.div>

              {/* B */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-2xl bg-tiger-dark border border-white/10 flex items-center justify-center relative z-10 group-hover:border-tiger-blue/30 group-hover:scale-105 transition-all">
                  <Shield className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-tiger-blue transition-colors" />
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-tiger-dark border border-white/10 text-gray-400 flex items-center justify-center font-mono text-xs md:text-sm font-bold group-hover:border-tiger-blue group-hover:text-tiger-blue transition-colors">B</div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-3xl font-display font-bold text-white">Blindagem</h3>
                    <span className="hidden sm:inline-block text-xs font-mono text-gray-500 px-2 py-1 rounded bg-white/5 border border-white/10 tracking-widest uppercase">Fase 02</span>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed bg-tiger-gray/30 p-6 rounded-2xl border border-white/5 shadow-lg">
                    Protegemos em camadas progressivas: comunicação interna, dispositivos, identidade digital e infraestrutura. Cada vulnerabilidade é endereçada com protocolo técnico.
                  </p>
                </div>
              </motion.div>

              {/* M */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-2xl bg-tiger-dark border border-white/10 flex items-center justify-center relative z-10 group-hover:border-tiger-blue/30 group-hover:scale-105 transition-all">
                  <Eye className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-tiger-blue transition-colors" />
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-tiger-dark border border-white/10 text-gray-400 flex items-center justify-center font-mono text-xs md:text-sm font-bold group-hover:border-tiger-blue group-hover:text-tiger-blue transition-colors">M</div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-3xl font-display font-bold text-white">Monitoramento</h3>
                    <span className="hidden sm:inline-block text-xs font-mono text-gray-500 px-2 py-1 rounded bg-white/5 border border-white/10 tracking-widest uppercase">Fase 03</span>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed bg-tiger-gray/30 p-6 rounded-2xl border border-white/5 shadow-lg">
                    Vigilância ativa do ambiente político digital — menções, tentativas de phishing, perfis falsos e novos vetores. Para que você seja o primeiro a saber, não o último.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-tiger-blue/10 to-transparent border border-tiger-blue/20 max-w-4xl mx-auto">
              <h4 className="font-display font-bold text-white mb-2">Por que essa ordem funciona?</h4>
              <p className="text-gray-300 text-sm">
                Proteger sem mapear é armar uma fortaleza sem saber onde estão as janelas abertas. O Reconhecimento vem primeiro porque determina onde investir esforço. A Blindagem é cirúrgica, não genérica. E o Monitoramento garante que a proteção não se torne obsoleta.
              </p>
            </div>
          </div>
        </section>

        {/* CTA e FAQ */}
        <section id="contato" className="py-16 md:py-24 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-6">
              A JANELA DE RISCO ESTÁ ABERTA
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              2026 é ano eleitoral.
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              A janela de maior risco começa em abril. Gabinetes que chegam ao período de campanha sem auditoria chegam sem saber o tamanho da própria exposição.
            </p>

            <div className="bg-tiger-gray border border-white/10 rounded-2xl p-8 max-w-md mx-auto text-left shadow-2xl">
              <h3 className="font-display font-bold text-white text-xl mb-6 text-center">Solicite sua Auditoria</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-1">NOME COMPLETO</label>
                  <input id="name" type="text" className="w-full bg-tiger-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tiger-blue transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-xs font-mono text-gray-400 mb-1">CARGO / FUNÇÃO</label>
                  <input id="role" type="text" className="w-full bg-tiger-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tiger-blue transition-colors" placeholder="Ex: Assessor Parlamentar" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-mono text-gray-400 mb-1">WHATSAPP</label>
                  <input id="whatsapp" type="tel" className="w-full bg-tiger-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tiger-blue transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <Button className="w-full mt-4" size="lg">
                  Solicitar Contato
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">Retorno da Tiger Tech em até 24h úteis.</p>
              </form>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-32">
            <h3 className="font-display text-3xl font-bold text-white mb-10 text-center">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {[
                {
                  q: "Nunca fui atacado, então não preciso disso.",
                  a: "A maioria dos ataques só é descoberta depois que o dano já está feito — e muitos nunca são descobertos. Não ter histórico de incidente não significa ausência de vulnerabilidade; significa que ninguém fez o mapeamento ainda."
                },
                {
                  q: "Minha equipe de TI já cuida disso.",
                  a: "TI generalista cobre infraestrutura básica. Cibersegurança política exige conhecimento específico de vetores de ataque contra figuras públicas, timing eleitoral e monitoramento de ameaças no ambiente político. São disciplinas diferentes."
                },
                {
                  q: "É muito caro para um gabinete.",
                  a: "A Auditoria de Exposição começa em R$ 2.500. Compare com o custo de recuperar uma conta de Instagram com 50 mil seguidores, reverter um vazamento de comunicação interna ou lidar com ransomware em sistemas de prefeitura no meio de uma gestão."
                },
                {
                  q: "Como sei que posso confiar em vocês com informações sensíveis?",
                  a: "Toda auditoria opera com acordo de confidencialidade. Além disso, nosso modelo funciona sem precisar acessar comunicações internas — o OSINT é feito com dados públicos, exatamente como um adversário faria."
                },
                {
                  q: "E se eu já tiver sido comprometido?",
                  a: "Ainda mais razão para fazer a auditoria. Identificar uma exposição ativa é sempre melhor do que descobri-la pela imprensa. O relatório de OSINT mostra o que está exposto agora — e o Protocolo RBM fecha o caminho de volta."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-tiger-gray/50 border border-white/5 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-tiger-dark py-12 text-center text-sm text-gray-500">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={logo} alt="Tiger Tech Security" className="w-8 h-8 object-contain" />
          <span className="font-display font-bold text-white">Tiger Tech Security</span>
        </div>
        <p>© 2026 Tiger Tech Security. Todos os direitos reservados.</p>
        <p className="mt-2">Especialistas em proteção digital para o ambiente político.</p>
      </footer>
    </div >
  );
}

