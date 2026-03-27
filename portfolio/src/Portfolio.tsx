import { useState, useEffect } from "react";

const EXPERIENCES = [
  {
    company: "Basiyo",
    location: "Lalitpur, Nepal",
    role: "Software Developer",
    period: "Dec 2024 — Present",
    type: "Full-time",
    url: "https://basiyo.com",
    description:
      "Designed and developed a comprehensive restaurant management platform from the ground up, integrating payment processing, real-time calendar synchronisation, and external review aggregation.",
    bullets: [
      "Architected scalable RESTful APIs using Django and Django REST Framework to support the platform's core business logic.",
      "Authored complex SQL queries for efficient data retrieval, transformation, and performance optimisation.",
      "Integrated third-party payment gateways and calendar APIs to enable real-time availability tracking across online platforms.",
    ],
    tech: ["Python", "Django", "DRF", "PostgreSQL", "REST APIs", "Elastic Search"],
  },
  {
    company: "Ramailo Tech",
    location: "Lalitpur, Nepal",
    role: "Junior Python Developer",
    period: "Mar 2024 — Nov 2024",
    type: "Full-time",
    url: "https://ramailo.tech",
    description:
      "Contributed to the development of client-facing web applications and internal automation tooling, while actively participating in client engagements to align technical deliverables with business requirements.",
    bullets: [
      "Developed backend APIs and responsive frontend templates using Django, HTML, CSS, and JavaScript.",
      "Automated repetitive manual workflows using Python and Selenium, significantly reducing operational overhead.",
      "Integrated OpenAI and Stable Diffusion APIs to deliver AI-generated story, image, and audio content features.",
    ],
    tech: ["Python", "Django", "Selenium", "OpenAI API", "Stable Diffusion"],
  },
  {
    company: "Ramailo Tech",
    location: "Lalitpur, Nepal",
    role: "Python Developer Intern",
    period: "Jan 2024 — Mar 2024",
    type: "Internship",
    url: "https://ramailo.tech",
    description:
      "Built the backend infrastructure for an internal storybook application, gaining hands-on experience in full-stack development within an agile team environment.",
    bullets: [
      "Designed and implemented backend services and client-specified templates for a storybook application.",
      "Maintained version control discipline using Git and managed tasks through Jira in an agile workflow.",
    ],
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Git"],
  },
];

const PROJECTS = [
  {
    title: "Basiyo Platform",
    subtitle: "Basiyo.com · 2024–Present",
    desc: "A scalable platform designed for modern business operations, integrating real-time systems, APIs, and performance-driven backend architecture.",
    tags: ["Django", "DRF", "PostgreSQL", "REST APIs", "MFA", "Elastic Search", "Payment Integration"],
    link: "https://basiyo.com",
    accent: "#b89cf5",
  },
  {
    title: "Restaurant Management System",
    subtitle: "Basiyo · 2024–Present",
    desc: "A full-scale restaurant management system handling reservations, order management, staff workflows, payments, and real-time availability synchronisation.",
    tags: ["Django", "DRF", "PostgreSQL", "Payments API", "Realtime", "Reporting", "Billing"],
    link: "https://host.basiyo.com",
    accent: "#c8a96e",
  },
  {
    title: "Bedtime Tales",
    subtitle: "Ramailo Tech · 2024",
    desc: "An AI-powered storytelling platform that generates 3 unique random stories daily, ensuring continuous fresh and engaging content.",
    tags: ["Python", "Django", "AI", "Gemini"],
    link: "https://ramailo.tech",
    accent: "#7eb8c8",
  },
  {
    title: "Story Genius",
    subtitle: "Ramailo Tech · 2024",
    desc: "A subscription-based storytelling platform where users upload images to create characters and generate personalised stories based on prompts or structured book formats.",
    tags: ["Python", "Django", "AI", "Image Processing", "OpenAI"],
    link: "https://storygenius.me",
    accent: "#9ec87e",
  },
  {
    title: "Fraud Detection in Auction Systems",
    subtitle: "Academic Project · 2024",
    desc: "A machine learning system designed to detect anomalous bidding behaviour using statistical analysis and data-driven insights.",
    tags: ["Python", "Machine Learning", "PostgreSQL", "Data Analysis", "Logistic Regression"],
    link: "https://github.com/naresh1-23",
    accent: "#d28f58",
  },
];

const SKILLS_GROUPS = [
  { label: "Backend", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "SQL"] },
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { label: "Tools & Platforms", items: ["Git", "Linux", "Selenium", "Jira", "OpenAI API", "Stable Diffusion"] },
  { label: "Languages", items: ["Python", "JavaScript", "C", "C++"] },
];

const AWARDS = [
  { title: "Outstanding Performer", org: "Ramailo Tech", date: "Jun 2024" },
  { title: "ReactJS for Beginners", org: "DynoAcademy", date: "2023" },
  { title: "NodeJS Backend Development", org: "DynoAcademy", date: "2023" },
  { title: "Internship Certificate", org: "Ramailo Tech", date: "May 2023" },
];

const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [activeExp, setActiveExp] = useState(0);
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = NAV.map(n =>
        document.getElementById(n.toLowerCase()!)
      ).filter((el): el is HTMLElement => el !== null);

      const active = [...sections]
        .reverse()
        .find(s => s.getBoundingClientRect().top < 180);

      if (active) {
        const id = active.id;
        setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setCursorActive(!!target?.closest("a,button,.hov"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: "#070710", color: "#e2dff5", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Playfair+Display:wght@700;900&family=DM+Mono:wght@400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-thumb{background:#3a2e6e;}
        ::selection{background:rgba(124,88,210,.35);color:#fff;}

        .cur-dot{position:fixed;width:8px;height:8px;border-radius:50%;background:#7c58d2;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .08s;}
        .cur-ring{position:fixed;width:36px;height:36px;border-radius:50%;border:1px solid rgba(124,88,210,.4);pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .25s;}
        .cur-ring.on{width:54px;height:54px;border-color:rgba(124,88,210,.7);}

        .display{font-family:'Playfair Display',serif;}
        .mono{font-family:'DM Mono',monospace;}

        .npill{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:500;letter-spacing:.06em;color:rgba(226,223,245,.4);padding:7px 16px;border-radius:40px;transition:all .2s;text-transform:uppercase;}
        .npill:hover{color:#e2dff5;background:rgba(255,255,255,.05);}
        .npill.on{color:#e2dff5;background:rgba(124,88,210,.2);}

        .eyebrow{font-size:.72rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#7c58d2;margin-bottom:14px;display:flex;align-items:center;gap:10px;}
        .eyebrow::after{content:'';flex:1;max-width:48px;height:1px;background:#7c58d2;opacity:.5;}

        .gcard{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;transition:border-color .3s,background .3s;position:relative;overflow:hidden;}
        .gcard::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 20%,rgba(124,88,210,.07) 0%,transparent 70%);pointer-events:none;opacity:0;transition:opacity .4s;}
        .gcard:hover{border-color:rgba(124,88,210,.3);background:rgba(255,255,255,.05);}
        .gcard:hover::before{opacity:1;}

        .chip{display:inline-flex;align-items:center;font-size:.71rem;font-weight:500;letter-spacing:.04em;padding:4px 11px;border-radius:40px;background:rgba(124,88,210,.12);border:1px solid rgba(124,88,210,.25);color:rgba(196,180,255,.85);white-space:nowrap;}

        .etab{background:none;border:none;cursor:pointer;width:100%;text-align:left;padding:16px 20px;border-left:2px solid rgba(255,255,255,.06);transition:all .2s;font-family:'DM Sans',sans-serif;color:rgba(226,223,245,.45);}
        .etab:hover{color:#e2dff5;border-left-color:rgba(124,88,210,.5);background:rgba(255,255,255,.02);}
        .etab.on{color:#e2dff5;border-left-color:#7c58d2;background:rgba(124,88,210,.08);}

        .pcard{display:flex;flex-direction:column;gap:14px;padding:28px;border-radius:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);transition:all .35s;text-decoration:none;color:inherit;position:relative;overflow:hidden;}
        .pcard::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--ac);transform:scaleX(0);transform-origin:left;transition:transform .4s;}
        .pcard:hover{border-color:rgba(255,255,255,.14);background:rgba(255,255,255,.055);transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,.45);}
        .pcard:hover::after{transform:scaleX(1);}

        .btnp{display:inline-flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-size:.82rem;font-weight:500;letter-spacing:.05em;padding:13px 26px;border-radius:8px;background:#7c58d2;color:#fff;border:none;cursor:pointer;text-decoration:none;transition:all .25s;}
        .btnp:hover{background:#9272e0;box-shadow:0 8px 28px rgba(124,88,210,.45);transform:translateY(-1px);}

        .btng{display:inline-flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-size:.82rem;font-weight:500;letter-spacing:.05em;padding:12px 24px;border-radius:8px;background:transparent;color:rgba(226,223,245,.7);border:1px solid rgba(255,255,255,.12);cursor:pointer;text-decoration:none;transition:all .25s;}
        .btng:hover{border-color:rgba(255,255,255,.28);color:#e2dff5;background:rgba(255,255,255,.04);}

        .crow{display:flex;align-items:center;gap:16px;padding:18px 0;border-bottom:1px solid rgba(255,255,255,.06);}
        .crow:last-child{border-bottom:none;}
        .cicon{width:40px;height:40px;border-radius:10px;background:rgba(124,88,210,.12);border:1px solid rgba(124,88,210,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .clink{color:rgba(226,223,245,.65);text-decoration:none;font-size:.875rem;transition:color .2s;}
        .clink:hover{color:#c4b4ff;}

        .skchip{display:inline-flex;align-items:center;font-size:.82rem;padding:6px 14px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:rgba(226,223,245,.75);margin:4px;transition:all .2s;}
        .skchip:hover{background:rgba(124,88,210,.15);border-color:rgba(124,88,210,.35);color:#e2dff5;}

        .arow{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-radius:10px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);margin-bottom:8px;transition:background .2s;}
        .arow:hover{background:rgba(255,255,255,.04);}

        @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
        @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
        @keyframes pulse-ring{0%{transform:scale(1);opacity:.4;}100%{transform:scale(2.4);opacity:0;}}

        .fu{animation:fadeUp .7s ease both;}
        .d1{animation-delay:.1s;}.d2{animation-delay:.2s;}.d3{animation-delay:.35s;}.d4{animation-delay:.5s;}

        .hbg{position:absolute;inset:0;background:radial-gradient(ellipse 90% 65% at 65% 40%,rgba(80,40,180,.2) 0%,transparent 68%),radial-gradient(ellipse 50% 40% at 15% 85%,rgba(40,80,200,.1) 0%,transparent 65%);pointer-events:none;}
        .hgrid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;mask-image:radial-gradient(ellipse 65% 60% at 60% 35%,black 0%,transparent 80%);}

        .gtext{background:linear-gradient(135deg,#e2dff5 0%,#b89cf5 40%,#7c58d2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

        .abadge{display:inline-flex;align-items:center;gap:8px;font-size:.75rem;font-weight:500;letter-spacing:.05em;padding:6px 14px;border-radius:40px;background:rgba(58,200,120,.1);border:1px solid rgba(58,200,120,.25);color:rgba(100,220,150,.9);}
        .adot{width:7px;height:7px;border-radius:50%;background:#3ac878;position:relative;flex-shrink:0;}
        .adot::after{content:'';position:absolute;inset:-3px;border-radius:50%;border:1px solid rgba(58,200,120,.5);animation:pulse-ring 2s ease-out infinite;}

        .orb{position:absolute;border-radius:50%;border:1px solid rgba(124,88,210,.1);animation:float 8s ease-in-out infinite;pointer-events:none;}

        .cont {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0 80px;
}
        .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(124,88,210,.22),transparent);}

        .g2{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
        @media(max-width:768px){
          .g2{grid-template-columns:1fr;}
          .elayout{flex-direction:column!important;}
          .dnone{display:none!important;}
          section{padding:72px 0;}
          .htitle{font-size:clamp(2.8rem,10vw,4rem)!important;}
        }
      `}</style>

      {/* Custom cursor */}
      <div className="cur-dot" style={{ left: cursor.x, top: cursor.y }} />
      <div className={`cur-ring ${cursorActive ? "on" : ""}`} style={{ left: cursor.x, top: cursor.y }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(7,7,16,.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "none",
        transition: "all .4s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7c58d2,#4a30a0)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="display" style={{ fontWeight: 700, fontSize: ".95rem", color: "#fff" }}>N</span>
          </div>
          <span style={{ fontWeight: 500, fontSize: ".88rem", color: "rgba(226,223,245,.65)", letterSpacing: ".03em" }}>Naresh Tamang</span>
        </div>
        <div className="dnone" style={{ display: "flex", gap: 4 }}>
          {NAV.map(n => (
            <button key={n} className={`npill ${activeNav === n ? "on" : ""} hov`} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
        <a href="mailto:nareshtamang20000@gmail.com" className="btnp hov" style={{ padding: "8px 18px", fontSize: ".76rem" }}>Hire me</a>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
        <div className="hbg" />
        <div className="hgrid" />
        <div className="orb" style={{ width: 420, height: 420, right: -90, top: "8%", animationDelay: "0s" }} />
        <div className="orb" style={{ width: 240, height: 240, right: 70, top: "22%", animationDelay: "2s", animationDuration: "6s" }} />
        <div className="orb" style={{ width: 100, height: 100, right: 175, top: "34%", animationDelay: "1s", animationDuration: "11s", background: "rgba(124,88,210,.05)" }} />

        <div className="cont" style={{
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",   // horizontal center
    alignItems: "center",       // vertical center (extra safety)
    textAlign: "center",        // center text inside
    width: "100%",
  }}>
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

            <p className="fu d3" style={{ fontSize: ".98rem", color: "rgba(226,223,245,.5)", lineHeight: 1.9, maxWidth: 510, marginBottom: 40, fontWeight: 300 }}>
              A results-oriented backend engineer with over a year of professional experience designing and delivering scalable APIs and full-stack web applications. Passionate about clean system architecture, data-driven solutions, and AI integration.
            </p>

            <div className="fu d4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btnp hov" onClick={() => scrollTo("Contact")}>Get in touch →</button>
              <a href="https://github.com/naresh1-23" target="_blank" rel="noreferrer" className="btng hov">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/naresh-tamang/" target="_blank" rel="noreferrer" className="btng hov">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>

            <div className="fu d4" style={{ display: "flex", gap: 40, marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.07)" }}>
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

      <div
  className="divider"
  style={{
    height: "1px",
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    marginTop: "20px",
    marginBottom: "20px"
  }}
/>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="cont">
          <div className="eyebrow">Experience</div>
          <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 52 }}>Where I've worked</h2>

          <div className="elayout" style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
            <div style={{ minWidth: 200, display: "flex", flexDirection: "column", flexShrink: 0 }}>
              {EXPERIENCES.map((e, i) => (
                <button key={i} className={`etab hov ${activeExp === i ? "on" : ""}`} onClick={() => setActiveExp(i)}>
                  <div style={{ fontSize: ".85rem", fontWeight: 500, marginBottom: 2 }}>{e.company}</div>
                  <div style={{ fontSize: ".72rem", opacity: .5, letterSpacing: ".04em" }}>{e.period}</div>
                </button>
              ))}
            </div>

            <div className="gcard" style={{ flex: 1, padding: "28px 32px" }} key={activeExp}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                <div>
                  <h3 className="display" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#e2dff5", marginBottom: 4 }}>{EXPERIENCES[activeExp].role}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <a href={EXPERIENCES[activeExp].url} target="_blank" rel="noreferrer" className="hov" style={{ fontSize: ".85rem", color: "#a07ef5", textDecoration: "none", fontWeight: 500 }}>
                      {EXPERIENCES[activeExp].company} ↗
                    </a>
                    <span style={{ color: "rgba(226,223,245,.2)", fontSize: ".7rem" }}>·</span>
                    <span style={{ fontSize: ".75rem", color: "rgba(226,223,245,.38)" }}>{EXPERIENCES[activeExp].location}</span>
                  </div>
                </div>
                <span className="chip" style={{ fontSize: ".7rem" }}>{EXPERIENCES[activeExp].type}</span>
              </div>

              <p style={{ fontSize: ".88rem", color: "rgba(226,223,245,.5)", lineHeight: 1.85, margin: "20px 0", fontWeight: 300 }}>
                {EXPERIENCES[activeExp].description}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {EXPERIENCES[activeExp].bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 12, fontSize: ".875rem", color: "rgba(226,223,245,.68)", lineHeight: 1.8 }}>
                    <span style={{ color: "#7c58d2", marginTop: 4, flexShrink: 0, fontSize: ".6rem" }}>◆</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {EXPERIENCES[activeExp].tech.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
  className="divider"
  style={{
    height: "1px",
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    marginTop: "20px",
    marginBottom: "20px"
  }}
/>

      {/* PROJECTS */}
      <section id="projects">
        <div className="cont">
          <div className="eyebrow">Projects</div>
          <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 14 }}>Selected work</h2>
          <p style={{
            fontSize: ".9rem",
            color: "rgba(226,223,245,.38)",
            marginBottom: 48,
            maxWidth: 480,
            lineHeight: 1.75,
            fontWeight: 300,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
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
                style={{ "--ac": p.accent } as React.CSSProperties as any}
              >
                <div>
                  <div style={{ fontSize: ".7rem", color: "rgba(226,223,245,.3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>{p.subtitle}</div>
                  <h3 className="display" style={{ fontSize: "1.12rem", fontWeight: 700, color: "#e2dff5", lineHeight: 1.3, marginBottom: 14 }}>{p.title}</h3>
                  <p style={{ fontSize: ".84rem", color: "rgba(226,223,245,.48)", lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {p.tags.map(t => <span key={t} className="chip" style={{ fontSize: ".67rem" }}>{t}</span>)}
                </div>
                <div style={{ fontSize: ".77rem", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 500 }}>View project →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div
  className="divider"
  style={{
    height: "1px",
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    marginTop: "20px",
    marginBottom: "20px"
  }}
/>

      {/* SKILLS */}
      <section id="skills">
        <div className="cont">
          <div className="eyebrow">Skills</div>
          <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 52 }}>Technologies & tools</h2>

          <div className="g2" style={{ gap: 36, marginBottom: 56 }}>
            {SKILLS_GROUPS.map((g, i) => (
              <div key={i}>
                <div style={{ fontSize: ".7rem", fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(226,223,245,.28)", marginBottom: 14 }}>{g.label}</div>
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
                  <span style={{ fontSize: ".72rem", color: "rgba(196,180,255,.55)", letterSpacing: ".06em", whiteSpace: "nowrap" }}>{a.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
  className="divider"
  style={{
    height: "1px",
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    marginTop: "20px",
    marginBottom: "20px"
  }}
/>

      {/* CONTACT */}
      <section id="contact">
        <div className="cont">
          <div className="g2" style={{ gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-.02em", color: "#e2dff5", marginBottom: 20, lineHeight: 1.1 }}>
                Let's build something together
              </h2>
              <p style={{ fontSize: ".9rem", color: "rgba(226,223,245,.42)", lineHeight: 1.9, fontWeight: 300, marginBottom: 36 }}>
                I am currently open to backend and full-stack Python engineering roles. Whether you have a specific opportunity or simply wish to connect, I would be pleased to hear from you.
              </p>
              <a href="mailto:nareshtamang20000@gmail.com" className="btnp hov">Send an email →</a>
            </div>

            <div>
              {[
                { icon: "✉", label: "Email", value: "nareshtamang20000@gmail.com", href: "mailto:nareshtamang20000@gmail.com" },
                { icon: "☏", label: "Phone", value: "+977 9861188817", href: "tel:+9779861188817" },
                { icon: "in", label: "LinkedIn", value: "linkedin.com/in/naresh-tamang", href: "https://www.linkedin.com/in/naresh-tamang/", mono: true },
                { icon: "{}", label: "GitHub", value: "github.com/naresh1-23", href: "https://github.com/naresh1-23", mono: true },
                { icon: "⌖", label: "Location", value: "Baniyatar, Kathmandu, Nepal", href: null },
              ].map((c, i) => (
                <div key={i} className="crow">
                  <div className="cicon">
                    <span style={{ fontSize: c.mono ? ".72rem" : ".9rem", fontWeight: 500, color: "#a07ef5", fontFamily: c.mono ? "'DM Mono',monospace" : "inherit" }}>{c.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: ".67rem", color: "rgba(226,223,245,.28)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="clink hov">{c.value}</a>
                      : <span style={{ fontSize: ".875rem", color: "rgba(226,223,245,.5)" }}>{c.value}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,.06)", padding: "26px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: ".72rem", color: "rgba(226,223,245,.2)", letterSpacing: ".04em" }}>© 2025 Naresh Tamang</span>
        <span style={{ fontSize: ".72rem", color: "rgba(226,223,245,.15)", letterSpacing: ".04em" }}>Baniyatar, Kathmandu, Nepal</span>
      </footer>
    </div>
  );
}