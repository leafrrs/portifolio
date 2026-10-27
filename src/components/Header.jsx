import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "2px solid #38bdf8",
        color: "#f8fafc",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        boxSizing: "border-box",
      }}
    >
      <a
        href="#apresentacao"
        style={{
          fontWeight: "800",
          fontSize: "1.3rem",
          color: "#f8fafc",
          textDecoration: "none",
        }}
      >
        Rafael<span style={{ color: "#38bdf8" }}>.dev</span>
      </a>

      <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <a
          href="#apresentacao"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "color 0.2s ease",
          }}
        >
          Início
        </a>
        <a
          href="#sobre"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "color 0.2s ease",
          }}
        >
          Sobre
        </a>
        <a
          href="#projetos"
          style={{
            backgroundColor: "rgba(56, 189, 248, 0.15)",
            color: "#38bdf8",
            padding: "8px 18px",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.9rem",
            border: "1px solid #38bdf8",
            transition: "all 0.2s ease",
          }}
        >
          Projetos
        </a>
      </nav>
    </motion.header>
  );
}
