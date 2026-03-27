import { NAV } from "../Data/data";

interface NavbarProps {
  activeNav: string;
  scrolled: boolean;
  onNavClick: (id: string) => void;
}

const Navbar = ({ activeNav, scrolled, onNavClick }: NavbarProps) => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
    padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
    background: scrolled ? "rgba(7,7,16,.88)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "none",
    transition: "all .4s",
    width: "100%",
    boxSizing: "border-box",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7c58d2,#4a30a0)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="display" style={{ fontWeight: 700, fontSize: ".95rem", color: "#fff" }}>N</span>
      </div>
      <span style={{ fontWeight: 500, fontSize: ".88rem", color: "rgba(226,223,245,.65)", letterSpacing: ".03em" }}>
        Naresh Tamang
      </span>
    </div>

    <div className="dnone" style={{ display: "flex", gap: 4 }}>
      {NAV.map(n => (
        <button
          key={n}
          className={`npill ${activeNav === n ? "on" : ""} hov`}
          onClick={() => onNavClick(n)}
        >
          {n}
        </button>
      ))}
    </div>

    <a href="mailto:nareshtamang20000@gmail.com" className="btnp hov" style={{ padding: "8px 18px", fontSize: ".76rem" }}>
      Hire me
    </a>
  </nav>
);

export default Navbar;