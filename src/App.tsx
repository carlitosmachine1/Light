import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { proposalData } from './data';
import { Lightbulb, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState(proposalData.sections[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observers = proposalData.sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(section.id);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-brand-500/30 selection:text-brand-100 flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-white font-display font-bold">
          <Lightbulb className="w-5 h-5 text-brand-400" />
          <span>Rimmer Lighting</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-400 hover:text-white">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 bg-zinc-950 z-40 md:hidden overflow-y-auto pb-20"
          >
            <nav className="p-4 flex flex-col gap-2">
              {proposalData.sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20' 
                        : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-80 h-screen sticky top-0 flex-col border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-xl z-10">
        <div className="p-8 border-b border-zinc-800">
          <div className="flex items-center gap-3 text-white font-display font-bold text-xl mb-2">
            <Lightbulb className="w-6 h-6 text-brand-400" />
            <span>Rimmer Lighting</span>
          </div>
          <p className="text-xs text-zinc-500 font-medium tracking-wider uppercase">Propuesta Estratégica</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 custom-scrollbar">
          {proposalData.sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-brand-500/10 text-brand-400 shadow-[inset_0_1px_0_0_rgba(251,191,36,0.1)] border border-brand-500/20' 
                    : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-brand-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                <span className="font-medium text-sm leading-tight">{section.title}</span>
                {isActive && (
                  <motion.div layoutId="active-indicator" className="ml-auto">
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-6 border-t border-zinc-800">
          <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
            <p className="text-xs text-zinc-500 mb-1">Preparado para</p>
            <p className="text-sm font-semibold text-white">Directorio Rimmer Lighting</p>
            <p className="text-xs text-zinc-500 mt-3">Fecha: {proposalData.date}</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          
          {/* Hero Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium tracking-wide uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Propuesta Confidencial
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              {proposalData.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              Transformando la presencia digital de <span className="text-white font-medium">Rimmer Lighting</span> en una herramienta de especificación y generación de leads B2B.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-32">
            {proposalData.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.section 
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-32 relative"
                >
                  {/* Decorative line */}
                  <div className="absolute -left-6 md:-left-12 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-zinc-800 to-transparent hidden md:block" />
                  
                  <div className="flex items-center gap-4 mb-8 relative">
                    <div className="absolute -left-[35px] md:-left-[59px] w-5 h-5 rounded-full bg-zinc-950 border-2 border-brand-500 hidden md:flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg shadow-black/50">
                      <Icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="prose prose-invert prose-zinc max-w-none">
                    {section.content.map((paragraph, pIndex) => {
                      // Simple markdown parsing for bold text
                      const formattedText = paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      });

                      return (
                        <p key={pIndex} className="text-lg text-zinc-400 leading-relaxed mb-6">
                          {formattedText}
                        </p>
                      );
                    })}
                  </div>

                  {/* Gallery Render */}
                  {section.gallery && (
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.gallery.map((img, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3]"
                        >
                          <img 
                            src={img.url} 
                            alt={img.caption} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
                            referrerPolicy="no-referrer" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-8 h-1 bg-brand-500 mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                            <p className="text-white font-medium text-lg">{img.caption}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.section>
              );
            })}
          </div>

          {/* Footer CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">¿Listos para iluminar el mercado?</h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto relative z-10">
              Esta propuesta es el primer paso para convertir el sitio web de Rimmer Lighting en el activo de ventas más poderoso de la empresa.
            </p>
            <a 
              href="https://wa.me/523322223518?text=Hola,%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20kick-off%20para%20el%20proyecto%20de%20Rimmer%20Lighting."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full font-semibold hover:bg-brand-50 transition-colors duration-200"
            >
              Agendar Reunión de Kick-off
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
