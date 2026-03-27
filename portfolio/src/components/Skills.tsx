import { SKILLS_GROUPS, AWARDS } from "../Data/data";

const Skills = () => (
  <section id="skills">
    <div className="cont">
      <div className="eyebrow">Skills</div>
      <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 52 }}>
        Technologies & tools
      </h2>

      <div className="g2" style={{ gap: 36, marginBottom: 56 }}>
        {SKILLS_GROUPS.map((g, i) => (
          <div key={i}>
            <div style={{ fontSize: ".7rem", fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(226,223,245,.28)", marginBottom: 14 }}>
              {g.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {g.items.map(s => <span key={s} className="skchip hov">{s}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="eyebrow" style={{ marginBottom: 24 }}>Awards & Certifications</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 10 }}>
          {AWARDS.map((a, i) => (
            <div key={i} className="arow hov">
              <div>
                <div style={{ fontSize: ".875rem", fontWeight: 500, color: "#e2dff5", marginBottom: 2 }}>{a.title}</div>
                <div style={{ fontSize: ".73rem", color: "rgba(226,223,245,.38)" }}>{a.org}</div>
              </div>
              <span style={{ fontSize: ".72rem", color: "rgba(196,180,255,.55)", letterSpacing: ".06em", whiteSpace: "nowrap" }}>
                {a.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;