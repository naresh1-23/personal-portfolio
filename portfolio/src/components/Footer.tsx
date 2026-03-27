const Footer = () => (
  <footer style={{
    borderTop: "1px solid rgba(255,255,255,.06)",
    padding: "26px 80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
    width: "100%",
    boxSizing: "border-box",
  }}>
    <span style={{ fontSize: ".72rem", color: "rgba(226,223,245,.2)", letterSpacing: ".04em" }}>
      © 2026 Naresh Tamang
    </span>
    <span style={{ fontSize: ".72rem", color: "rgba(226,223,245,.15)", letterSpacing: ".04em" }}>
      Baniyatar, Kathmandu, Nepal
    </span>
  </footer>
);

export default Footer;