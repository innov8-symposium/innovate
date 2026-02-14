import React from "react";
import { useWorld } from "@/contexts/WorldContext";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  const coordinators = [
    {
      type: "Faculty Coordinator",
      name: "Dr.K.Muthukannan",
      phone: "+91 99441 79701",
      email: "ourinnov82k26@gmail.com",
    },
    {
      type: "Faculty Coordinator",
      name: "Ms.P.Selva Rathinam",
      phone: "+91 96292 52119",
      email: "ourinnov82k26@gmail.com",
    },
    {
      type: "Student Coordinator",
      name: "P. Thilakavathy",
      phone: "+91 8925383660",
      email: "ourinnov82k26@gmail.com",
    },
    {
      type: "Student Coordinator",
      name: "S. Gokul",
      phone: "+91 78452 64394",
      email: "ourinnov82k26@gmail.com",
    },
  ];

  const commonTextStyle: React.CSSProperties = {
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: 500,
    letterSpacing: "0.06em",
    lineHeight: "1.6",
  };

  const mapLink =
    "https://maps.app.goo.gl/P7Dn68Gd4HvgutNB9";

  return (
    <section
      id="contact"
      style={{
        padding: "70px 20px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              ...commonTextStyle,
              fontSize: "clamp(32px, 5vw, 48px)",
              marginBottom: "12px",
              color: isStrangerWorld ? "#ef4444" : "#e5e7eb",
              textShadow: "0 0 12px rgba(255,0,0,0.6)",
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              ...commonTextStyle,
              fontSize: "18px",
              color: isStrangerWorld
                ? "rgba(255,150,150,0.6)"
                : "rgba(200,200,200,0.7)",
            }}
          >
            Connect with the coordinators
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Coordinators */}
          {coordinators.map((coord, index) => (
            <div
              key={index}
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: `2px solid ${
                  isStrangerWorld
                    ? "rgba(239,68,68,0.4)"
                    : "rgba(59,130,246,0.3)"
                }`,
                background: isStrangerWorld
                  ? "rgba(0,0,0,0.6)"
                  : "rgba(30,41,59,0.6)",
                backdropFilter: "blur(8px)",
              }}
            >
              <h3
                style={{
                  ...commonTextStyle,
                  fontSize: "18px",
                  marginBottom: "16px",
                  color: isStrangerWorld ? "#f87171" : "#60a5fa",
                }}
              >
                {coord.type}
              </h3>

              <p
                style={{
                  ...commonTextStyle,
                  fontSize: "18px",
                  marginBottom: "12px",
                  color: isStrangerWorld ? "#fee2e2" : "#e5e7eb",
                }}
              >
                {coord.name}
              </p>

              <a
                href={`tel:${coord.phone}`}
                style={{
                  ...commonTextStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  marginBottom: "8px",
                  textDecoration: "none",
                  color: isStrangerWorld
                    ? "rgba(252,165,165,0.8)"
                    : "rgba(203,213,225,0.9)",
                }}
              >
                <Phone size={16} />
                {coord.phone}
              </a>

              <a
                href={`mailto:${coord.email}`}
                style={{
                  ...commonTextStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: isStrangerWorld
                    ? "rgba(252,165,165,0.8)"
                    : "rgba(203,213,225,0.9)",
                }}
              >
                <Mail size={16} />
                {coord.email}
              </a>
            </div>
          ))}

          {/* Follow Us */}
          <div
            style={{
              padding: "24px",
              borderRadius: "16px",
              border: `2px solid ${
                isStrangerWorld
                  ? "rgba(239,68,68,0.4)"
                  : "rgba(59,130,246,0.3)"
              }`,
              background: isStrangerWorld
                ? "rgba(0,0,0,0.6)"
                : "rgba(30,41,59,0.6)",
            }}
          >
            <h3
              style={{
                ...commonTextStyle,
                fontSize: "18px",
                marginBottom: "16px",
                color: isStrangerWorld ? "#f87171" : "#60a5fa",
              }}
            >
              Follow Us
            </h3>

            <a
              href="https://www.instagram.com/innov82k26?igsh=cGVoemJ0M3gwZ3hk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...commonTextStyle,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "14px",
                textDecoration: "none",
                color: isStrangerWorld ? "#fecaca" : "#e5e7eb",
              }}
            >
              <Instagram size={24} />
              @innov82k26
            </a>
          </div>

          {/* Find Us - FULL CARD CLICKABLE */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "24px",
              borderRadius: "16px",
              border: `2px solid ${
                isStrangerWorld
                  ? "rgba(239,68,68,0.4)"
                  : "rgba(59,130,246,0.3)"
              }`,
              background: isStrangerWorld
                ? "rgba(0,0,0,0.6)"
                : "rgba(30,41,59,0.6)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <h3
              style={{
                ...commonTextStyle,
                fontSize: "18px",
                marginBottom: "16px",
                color: isStrangerWorld ? "#f87171" : "#60a5fa",
              }}
            >
              Find Us
            </h3>

            <div
              style={{
                display: "flex",
                gap: "12px",
                fontSize: "14px",
                color: isStrangerWorld
                  ? "rgba(254,202,202,0.8)"
                  : "rgba(203,213,225,0.8)",
              }}
            >
              <MapPin size={20} />
              <span style={commonTextStyle}>
                Department of CSE VTMT Engineering College
                <br />
                Click to open in Google Maps
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
