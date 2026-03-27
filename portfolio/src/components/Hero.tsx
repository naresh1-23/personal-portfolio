interface HeroProps {
  onScrollTo: (id: string) => void;
}

const Hero = ({ onScrollTo }: HeroProps) => (
  <section
    id="about"
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "80px 0 60px",
      width: "100%",
    }}
  >
    <div className="hbg" />
    <div className="hgrid" />
    <div className="orb" style={{ width: 420, height: 420, right: -90, top: "8%", animationDelay: "0s" }} />
    <div className="orb" style={{ width: 240, height: 240, right: 70, top: "22%", animationDelay: "2s", animationDuration: "6s" }} />
    <div className="orb" style={{ width: 100, height: 100, right: 175, top: "34%", animationDelay: "1s", animationDuration: "11s", background: "rgba(124,88,210,.05)" }} />

    <div className="cont" style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <div style={{ maxWidth: 680 }}>
        <div className="fu d1" style={{ marginBottom: 28 }}>
          <span className="abadge"><span className="adot" />Open to new opportunities</span>
        </div>

        <h1 className="fu d2 display gtext htitle" style={{ fontSize: "clamp(3.2rem,6vw,5.6rem)", lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: 22 }}>
          Naresh<br />Tamang
        </h1>

        <p className="fu d2" style={{ fontSize: "1rem", fontWeight: 500, color: "rgba(196,180,255,.65)", letterSpacing: ".01em", marginBottom: 20 }}>
          Python Developer · Backend Engineer
        </p>

        <p className="fu d3" style={{ fontSize: ".98rem", color: "rgba(226,223,245,.5)", lineHeight: 1.9, maxWidth: 510, margin: "0 auto 40px", fontWeight: 300 }}>
          A results-oriented backend engineer with over a year of professional experience designing and
          delivering scalable APIs and full-stack web applications. Passionate about clean system
          architecture, data-driven solutions, and AI integration.
        </p>

        <div className="fu d4" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <button className="btnp hov" onClick={() => onScrollTo("Contact")}>Get in touch →</button>
          <a href="https://github.com/naresh1-23" target="_blank" rel="noreferrer" className="btng hov">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/naresh-tamang/" target="_blank" rel="noreferrer" className="btng hov">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="fu d4" style={{ display: "flex", gap: 40, marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.07)", justifyContent: "center" }}>
          {[["3+", "Year of experience"], ["3", "Companies"], ["4+", "Production projects"]].map(([n, l], i) => (
            <div key={i}>
              <div className="display" style={{ fontSize: "1.9rem", fontWeight: 700, color: "#e2dff5", lineHeight: 1, marginBottom: 4 }}>{n}</div>
              <div style={{ fontSize: ".75rem", color: "rgba(226,223,245,.38)", letterSpacing: ".04em" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;