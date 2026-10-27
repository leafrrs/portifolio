import { motion } from "framer-motion";
import "./Header.css";

export function Header() {
  return (
    <motion.header
      className="header-container"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#apresentacao" className="header-logo">
        Rafael<span>.dev</span>
      </a>

      <nav className="header-nav">
        <a href="#apresentacao" className="header-link">
          Início
        </a>
        <a href="#sobre" className="header-link">
          Sobre
        </a>
        <a href="#projetos" className="header-btn-projetos">
          Projetos
        </a>
      </nav>
    </motion.header>
  );
}
