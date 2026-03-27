import { PROJECTS } from "../Data/data";

const Projects = () => (
  <section id="projects">
    <div className="cont">
      <div className="eyebrow">Projects</div>
      <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 14 }}>
        Selected work
      </h2>
      <p style={{ fontSize: ".9rem", color: "rgba(226,223,245,.38)", marginBottom: 48,}}>
        A selection of production systems and projects delivered across professional and academic contexts.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px,1fr))", gap: 20 }}>
        {PROJECTS.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="pcard hov"
            style={{ "--ac": p.accent } as React.CSSProperties}
          >
            <div>
              <div style={{ fontSize: ".7rem", color: "rgba(226,223,245,.3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>
                {p.subtitle}
              </div>
              <h3 className="display" style={{ fontSize: "1.12rem", fontWeight: 700, color: "#e2dff5", lineHeight: 1.3, marginBottom: 14 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: ".84rem", color: "rgba(226,223,245,.48)", lineHeight: 1.8, fontWeight: 300 }}>
                {p.desc}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
              {p.tags.map(t => <span key={t} className="chip" style={{ fontSize: ".67rem" }}>{t}</span>)}
            </div>
            <div style={{ fontSize: ".77rem", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 500 }}>
              View project →
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;