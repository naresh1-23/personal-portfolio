import { useState } from "react";
import { EXPERIENCES } from "../Data/data";

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);
  const exp = EXPERIENCES[activeExp];

  return (
    <section id="experience">
      <div className="cont">
        <div className="eyebrow">Experience</div>
        <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 52 }}>
          Where I've worked
        </h2>

        <div className="elayout" style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          {/* Tab list */}
          <div style={{ minWidth: 200, display: "flex", flexDirection: "column", flexShrink: 0 }}>
            {EXPERIENCES.map((e, i) => (
              <button
                key={i}
                className={`etab hov ${activeExp === i ? "on" : ""}`}
                onClick={() => setActiveExp(i)}
              >
                <div style={{ fontSize: ".85rem", fontWeight: 500, marginBottom: 2 }}>{e.company}</div>
                <div style={{ fontSize: ".72rem", opacity: 0.5, letterSpacing: ".04em" }}>{e.period}</div>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="gcard" style={{ flex: 1, padding: "28px 32px" }} key={activeExp}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
              <div>
                <h3 className="display" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#e2dff5", marginBottom: 4 }}>
                  {exp.role}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <a href={exp.url} target="_blank" rel="noreferrer" className="hov" style={{ fontSize: ".85rem", color: "#a07ef5", textDecoration: "none", fontWeight: 500 }}>
                    {exp.company} ↗
                  </a>
                  <span style={{ color: "rgba(226,223,245,.2)", fontSize: ".7rem" }}>·</span>
                  <span style={{ fontSize: ".75rem", color: "rgba(226,223,245,.38)" }}>{exp.location}</span>
                </div>
              </div>
              <span className="chip" style={{ fontSize: ".7rem" }}>{exp.type}</span>
            </div>

            <p style={{ fontSize: ".88rem", color: "rgba(226,223,245,.5)", lineHeight: 1.85, margin: "20px 0", fontWeight: 300 }}>
              {exp.description}
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ display: "flex", gap: 12, fontSize: ".875rem", color: "rgba(226,223,245,.68)", lineHeight: 1.8 }}>
                  <span style={{ color: "#7c58d2", marginTop: 4, flexShrink: 0, fontSize: ".6rem" }}>◆</span>
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {exp.tech.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;