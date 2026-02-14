import React from "react";
import { useWorld } from "@/contexts/WorldContext";
import CountdownTimer from "./CountdownTimer";

import titleNormal1 from "@/assets/normalworld.png";
import titleNormal2 from "@/assets/normalworld1.png";

const HeroSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  const handleRegisterClick = () => {
    const section = document.getElementById("technical-events");

    if (section) {
      const navbarOffset = 80; // Adjust if needed
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "120px 16px 80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "'Irish Grover', cursive",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');

          @keyframes fadeIn {
            to { opacity: 1; }
          }

          @keyframes fall {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(600px); opacity: 0; }
          }
        `}
      </style>

      <div
        style={{
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
          zIndex: 5, // 🔥 Ensure content stays above effects
          position: "relative",
        }}
      >
        {/* Department */}
        <p
          style={{
            fontSize: "clamp(12px, 3vw, 20px)",
            letterSpacing: "clamp(0.08em, 0.22vw, 0.22em)",
            textTransform: "uppercase",
            marginBottom: "8px",
            color: isStrangerWorld
              ? "rgba(255,120,120,0.9)"
              : "rgba(120,170,255,0.9)",
            whiteSpace: "nowrap",
            paddingInline: "14px",
            opacity: 0,
            animation: "fadeIn 1s forwards",
          }}
        >
          Department of Computer Science and Engineering
        </p>

        {/* Proudly Presents */}
        <p
          style={{
            fontSize: "clamp(10px, 2.4vw, 14px)",
            letterSpacing: "clamp(0.14em, 0.28vw, 0.32em)",
            textTransform: "uppercase",
            marginBottom: "28px",
            color: isStrangerWorld
              ? "rgba(255,150,150,0.75)"
              : "rgba(150,190,255,0.75)",
            whiteSpace: "nowrap",
            paddingInline: "14px",
            opacity: 0,
            animation: "fadeIn 1s forwards 0.2s",
          }}
        >
          Proudly Presents
        </p>

        {/* Title Images */}
        <div
          style={{
            position: "relative",
            marginBottom: "24px",
            width: "100%",
            maxWidth: "720px",
            marginInline: "auto",
          }}
        >
          <img
            src={titleNormal1}
            alt="Normal World"
            style={{
              width: "100%",
              height: "auto",
              transition: "opacity 0.7s ease",
              opacity: isStrangerWorld ? 0 : 1,
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none", // 🔥 Prevent image blocking button
            }}
          />

          <img
            src={titleNormal2}
            alt="Stranger World"
            style={{
              width: "100%",
              height: "auto",
              transition: "opacity 0.7s ease",
              opacity: isStrangerWorld ? 1 : 0,
              pointerEvents: "none", // 🔥 Prevent image blocking button
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(15px, 4vw, 26px)",
            letterSpacing: "0.2em",
            marginBottom: "48px",
            color: isStrangerWorld
              ? "rgba(255,80,80,0.9)"
              : "rgba(120,170,255,0.9)",
            paddingInline: "16px",
            opacity: 0,
            animation: "fadeIn 1s forwards 0.4s",
          }}
        >
          Upside Down of Innovation
        </p>

        {/* CTA Button */}
        <button
          onClick={handleRegisterClick}
          style={{
            padding: "16px 40px",
            fontSize: "clamp(14px, 3.5vw, 18px)",
            letterSpacing: "0.2em",
            borderRadius: "10px",
            cursor: "pointer",
            border: `2px solid ${
              isStrangerWorld ? "#f87171" : "#60a5fa"
            }`,
            background: isStrangerWorld ? "#b91c1c" : "#1e40af",
            color: "#fff",
            transition: "all 0.4s ease",
            position: "relative",
            zIndex: 10, // 🔥 Always clickable
          }}
        >
          Register Now
        </button>

        <div style={{ marginTop: "50px" }}>
          <CountdownTimer />
        </div>
      </div>

      {/* Falling Stars */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: isStrangerWorld ? "red" : "#60a5fa",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `fall ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
