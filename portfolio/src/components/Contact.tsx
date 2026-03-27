import { CONTACT_ITEMS } from "../Data/data";

const Contact = () => (
  <section id="contact">
    <div className="cont">
      <div className="g2" style={{ gap: 64, alignItems: "start" }}>
        <div>
          <div className="eyebrow">Contact</div>
          <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 20, lineHeight: 1.1 }}>
            Let's build something together
          </h2>
          <p style={{ fontSize: ".9rem", color: "rgba(226,223,245,.42)", lineHeight: 1.9, fontWeight: 300, marginBottom: 36 }}>
            I am currently open to backend and full-stack Python engineering roles. Whether you have a
            specific opportunity or simply wish to connect, I would be pleased to hear from you.
          </p>
          <a href="mailto:nareshtamang20000@gmail.com" className="btnp hov">Send an email →</a>
        </div>

        <div>
          {CONTACT_ITEMS.map((c, i) => (
            <div key={i} className="crow">
              <div className="cicon">
                <span style={{
                  fontSize: c.mono ? ".72rem" : ".9rem",
                  fontWeight: 500,
                  color: "#a07ef5",
                  fontFamily: c.mono ? "'DM Mono',monospace" : "inherit",
                }}>
                  {c.icon}
                </span>
              </div>
              <div>
                <div style={{ fontSize: ".67rem", color: "rgba(226,223,245,.28)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="clink hov"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span style={{ fontSize: ".875rem", color: "rgba(226,223,245,.5)" }}>{c.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;