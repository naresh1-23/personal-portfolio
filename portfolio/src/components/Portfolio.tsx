import { useState, useEffect } from "react";
import { NAV } from "../Data/data";
import GlobalStyles from "../Style/globalStyle";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Divider from "./Divider";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = NAV.map(n =>
        document.getElementById(n.toLowerCase())
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

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      fontFamily: "'DM Sans',sans-serif",
      background: "#070710",
      color: "#e2dff5",
      minHeight: "100vh",
      overflowX: "hidden",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <GlobalStyles />
      <CustomCursor />
      <Navbar activeNav={activeNav} scrolled={scrolled} onNavClick={scrollTo} />
      <Hero onScrollTo={scrollTo} />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}