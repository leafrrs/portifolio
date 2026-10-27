import { motion } from "framer-motion";
import "./Sobre.css";

export function Sobre() {
  const destaques = [
    {
      icone: "🚀",
      titulo: "Desenvolvimento Full Stack",
      descricao:
        "Criação de ponta a ponta: interfaces dinâmicas no front-end e APIs REST robustas no back-end.",
    },
    {
      icone: "🎓",
      titulo: "Formação DIO & Recode",
      descricao:
        "Constante aprendizado prático em bootcamps da DIO e formação voltada para inovação e ODS na Recode.",
    },
    {
      icone: "💡",
      titulo: "Boas Práticas & Segurança",
      descricao:
        "Foco em código limpo, arquitetura desacoplada (BFF/MVC), validações com Zod e autenticação segura com JWT/HMAC.",
    },
  ];

  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-container">
        <div className="sobre-header">
          <motion.span
            className="sobre-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sobre Mim
          </motion.span>
          <motion.h2
            className="sobre-titulo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Conectando lógica, design e impacto real
          </motion.h2>
        </div>

        <div className="sobre-grid">
          <motion.div
            className="sobre-texto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Olá! Sou o <strong>Rafael Rodrigues</strong>, desenvolvedor focado em criar
              soluções digitais sólidas, acessíveis e centradas na experiência do usuário.
            </p>
            <p>
              Minha jornada na tecnologia é impulsionada pela prática contínua através dos
              bootcamps da <strong>DIO (Digital Innovation One)</strong> e da formação na{" "}
              <strong>ONG Recode</strong>, onde tive a oportunidade de criar projetos de impacto
              social — como a plataforma <em>Reconecta</em> (alinhada às metas da ONU para educação).
            </p>
            <p>
              No dia a dia, gosto de resolver problemas complexos com ferramentas modernas do ecossistema
              JavaScript/TypeScript: construo interfaces responsivas com <strong>React</strong> e <strong>Vite</strong>,
              e estruturo APIs REST seguras com <strong>Node.js</strong>, <strong>Express</strong> e{" "}
              <strong>Prisma ORM</strong>.
            </p>
          </motion.div>

          <motion.div
            className="sobre-cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {destaques.map((item, index) => (
              <motion.div
                key={index}
                className="sobre-card-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <span className="sobre-card-icon">{item.icone}</span>
                <div className="sobre-card-info">
                  <h4>{item.titulo}</h4>
                  <p>{item.descricao}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
