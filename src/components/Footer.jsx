export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        textAlign: "center",
        padding: "48px 20px",
        marginTop: "auto",
        borderTop: "3px solid #38bdf8",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "28px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/leafrrs"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "color 0.2s ease",
          }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-rodrigues-dos-santos-rrs"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "color 0.2s ease",
          }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:rafael.r_rs@hotmail.com"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "color 0.2s ease",
          }}
        >
          E-mail
        </a>
      </div>
      <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
        © {new Date().getFullYear()} Rafael Rodrigues. Desenvolvido com dedicação, React e Vite.
      </p>
    </footer>
  );
}
