import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setActive(!!target?.closest("a,button,.hov"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div className="cur-dot" style={{ left: cursor.x, top: cursor.y }} />
      <div className={`cur-ring ${active ? "on" : ""}`} style={{ left: cursor.x, top: cursor.y }} />
    </>
  );
};

export default CustomCursor;