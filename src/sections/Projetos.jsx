import { motion } from "framer-motion";
import "./Projetos.css";

export function Projetos() {
  const listaDeProjetos = [
    {
      id: "verzel",
      titulo: "Event Platform",
      categoria: "Full Stack • Desafio Técnico",
      subtitulo: "Verzel Elite Dev 2026",
      descricao:
        "Sistema robusto para criação, venda, gestão e validação de ingressos de eventos físicos. Inclui reserva de assentos com prevenção de concorrência e portaria com scanner seguro de QR Code.",
      destaques: [
        "Validação de QR Code com assinatura HMAC contra fraudes",
        "Controle de concorrência atômico para assentos numerados",
        "Integração TMDb via Backend (BFF) com isolamento de credenciais",
      ],
      tags: [
        "React 19",
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma ORM",
        "SQLite",
        "Zod",
        "QR Code / HMAC",
      ],
      imagem:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/leafrrs/elite-dev-verzel-2026",
    },
    {
      id: "reconecta",
      titulo: "Reconecta",
      categoria: "Full Stack • Impacto Social (ODS 4)",
      subtitulo: "Doação e Circulação de Livros",
      descricao:
        "Plataforma comunitária desenvolvida no programa da Recode para incentivar o hábito da leitura. Conecta doadores e leitores, controlando o ciclo de vida e a circulação contínua das obras.",
      destaques: [
        "Integração com Open Library API para metadados e capas automáticas",
        "Autenticação JWT, perfis RBAC (User/Admin) e senhas com bcrypt",
        "Notificações transacionais por e-mail com Nodemailer",
      ],
      tags: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "Prisma ORM",
        "SQLite",
        "JWT",
        "Nodemailer",
      ],
      imagem:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/leafrrs/reconecta",
    },
  ];

  return (
    <section id="projetos" className="projetos-section">
      <div className="projetos-header">
        <motion.span
          className="projetos-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Portfólio em Destaque
        </motion.span>

        <motion.h2
          className="projetos-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projetos Full Stack
        </motion.h2>

        <motion.p
          className="projetos-subtitulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aplicações completas com arquitetura moderna, autenticação segura,
          integrações com APIs externas e bancos de dados relacionais.
        </motion.p>
      </div>

      <div className="projetos-grid">
        {listaDeProjetos.map((projeto, index) => (
          <motion.article
            key={projeto.id}
            className="projeto-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="projeto-banner">
              <img src={projeto.imagem} alt={`Banner do projeto ${projeto.titulo}`} />
              <span className="projeto-badge-categoria">{projeto.categoria}</span>
            </div>

            <div className="projeto-content">
              <h3 className="projeto-nome">{projeto.titulo}</h3>
              <p className="projeto-descricao">{projeto.descricao}</p>

              <ul className="projeto-destaques">
                {projeto.destaques.map((item, idx) => (
                  <li key={idx} className="projeto-destaque-item">
                    <span className="projeto-destaque-icone">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="projeto-tags">
                {projeto.tags.map((tag, idx) => (
                  <span key={idx} className="projeto-tag-item">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="projeto-footer">
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projeto-btn projeto-btn-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Ver no GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
