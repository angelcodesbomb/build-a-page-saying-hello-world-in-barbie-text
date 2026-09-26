import React from "react";

export default function App() {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #ffe6f2 0%, #ffc2e0 50%, #ff9ecf 100%)",
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive",
    padding: "24px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "clamp(3rem, 12vw, 8rem)",
    fontWeight: 900,
    margin: 0,
    letterSpacing: "0.05em",
    background: "linear-gradient(90deg, #ff4fa3 0%, #ff7ac2 40%, #ff9ed6 70%, #ffd1ec 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextStroke: "2px #ff2e93",
    textShadow: "0 4px 0 rgba(255, 46, 147, 0.25), 0 8px 24px rgba(255, 46, 147, 0.35)",
    lineHeight: 1.1,
  };

  const subStyle = {
    marginTop: "16px",
    fontSize: "clamp(1rem, 3vw, 1.5rem)",
    color: "#c2185b",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  };

  const sparkleStyle = {
    position: "absolute",
    color: "#ffffff",
    fontSize: "2rem",
    userSelect: "none",
    pointerEvents: "none",
    textShadow: "0 0 12px #ff9ecf",
  };

  return (
    <main style={containerStyle} aria-label="Barbie Hello World page">
      <span style={{ ...sparkleStyle, top: "15%", left: "12%" }} aria-hidden="true">✦</span>
      <span style={{ ...sparkleStyle, top: "22%", right: "15%", fontSize: "1.4rem" }} aria-hidden="true">✧</span>
      <span style={{ ...sparkleStyle, bottom: "18%", left: "18%", fontSize: "1.6rem" }} aria-hidden="true">✦</span>
      <span style={{ ...sparkleStyle, bottom: "25%", right: "10%" }} aria-hidden="true">✧</span>

      <section style={{ position: "relative" }}>
        <h1 style={headingStyle} lang="en">Hello World</h1>
        <p style={subStyle} aria-label="Barbie edition">Barbie Edition</p>
      </section>
    </main>
  );
}
