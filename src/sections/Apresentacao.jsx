import { motion } from "framer-motion";
import "./Apresentacao.css";

export function Apresentacao() {
  return (
    <section id="apresentacao" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>👋</span>
          <span>Olá! Bem-vindo ao meu espaço</span>
        </motion.div>

        <motion.h1
          className="hero-titulo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Eu sou Rafael Rodrigues, <br />
          <span className="hero-titulo-destaque">Desenvolvedor Full Stack</span>
        </motion.h1>

        <motion.p
          className="hero-subtitulo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Transformo ideias em aplicações web completas, modernas e eficientes.
          Focado no ecossistema JavaScript com <strong>React</strong> no front-end
          e <strong>Node.js, Express & Prisma</strong> no back-end.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projetos" className="hero-btn hero-btn-primary">
            Explorar Projetos ↓
          </a>
          <a href="#sobre" className="hero-btn hero-btn-secondary">
            Conhecer Minha Trajetória
          </a>
        </motion.div>
      </div>
    </section>
  );
}
