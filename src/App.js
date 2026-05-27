import { useState, useEffect } from "react";

// ── Navigation ────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Home", "About Me", "Projects", "Contact"];

// ── Color palette ─────────────────────────────────────────────────────────────
const Purple = {
  dark: "#3e2752",
  mid: "#c9a4e3",
  soft: "#eadbf3",
};

// ── Section backgrounds ───────────────────────────────────────────────────────
const SECTION_THEMES = {
  home: {
    bg: "radial-gradient(ellipse at center, #fee7e7 0%, #fee7e7 30%, #c9a9e0 70%, #b088cc 100%)",
  },
};

// ── Projects data ─────────────────────────────────────────────────────────────
const projectsItems = [
  {
    id: "doodle",
    title: "Doodle for Google 2024",
    desc: "2023-2024",
    full: "Submitted to the Doodle for Google 2024 competition. The prompt was 'My wish for the next 25 years...' which inspired me to explore a futuristic theme. Drawing inspration from classic cartoons like The Jetsons, I wanted to capture that retro vision of tomorrow where the futire feels both exciting and nostalgic. I imagined a world full of color, technology, and wonder and tried to bring that feeling into my work.",
    tag: "Clip Studio Paint",
    image: "/Doodle for Google 2024.gif",
  },
  {
    id: "cottage",
    title: "Mushroom Cottage",
    desc: "2023",
    full: "A personal piece exploring whimsical art style. I wanted to create something warm and cozy like a scene pulled straight from a children's book. Every detail was carefully thought out, from the soft colors to the tiny mushrooms, to give it that storybook charm.",
    tag: "Clip Studio Paint",
    image: "/Cottage House.png",
    modalFit: "contain",
  },
  {
    id: "Four seasons",
    title: "Four Seasons",
    desc: "2024",
    full: "The moments I chose to capture are the ones that live rent free in my head: the little things, the quiet things, the things that remind me why the people I love mean so much. I was proud to have this piece submitted and showcased at the 2024 Atlantic County Teen Arts Festival.",
    tag: "illustrator",
    image: "/Four seasons.png",
  },
  {
    id: "logo",
    title: "Personal Logo",
    desc: "2026",
    full: "An original logo designed using my initials and elements that represent who I am. Built as a personal branding mark, it was made to serve as a signature across my projects to make my work recognizable. The intended audience includes anyone who comes across my art, whether on social media or in a portfolio setting. Over time I revisited the design, shifting toward a more whimsical aesthetic to give it more personality and life.",
    tag: "Figma",
    image: "/final logo design.png",
    docs: "https://drive.google.com/file/d/12PYC9Oi-W3UzF4Xwqk3tf0Xq8j8Y_ef-/view?usp=sharing",
  },
  {
    id: "penguin",
    title: "Hungry Penguin",
    desc: "2026",
    full: "Hungry Penguin is a puzzle-platformer game where players control Mr. Penguin as he races to collect as many fishes as possible. Along the way, snowmen (obstacle/enemy) launch snowballs to block his progress. As well as the pits, once player falls in they must redo that level. The player is given the ability to launch snowballs as well to defeat the snowmen and allowing Mr. Penguin to continue his hunt for fishes.",
    tag: "GameBoy Studio (GB studio)",
    image: "/Title.png",
    modalFit: "contain",
    docs: "https://canva.link/ih09rcjp4rbyfqu",
    playLink: "https://elianaozoria.itch.io/hungry-penguin",
  },
];

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (label) => {
    const id = label.toLowerCase().replace(" ", "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: Purple.dark,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "all 0.4s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <div
          onClick={() => scrollTo("Home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              color: "white",
              fontFamily: "Edwardian Script ITC, 'Dancing Script', cursive",
              fontSize: "2.3rem",
              fontStyle: "italic",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Eliana Ozoria
          </span>
        </div>

        <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === link ? "white" : "rgba(255,255,255,0.7)",
                fontSize: "0.95rem",
                fontWeight: active === link ? 700 : 400,
                letterSpacing: "0.04em",
                padding: "4px 0",
                borderBottom:
                  active === link
                    ? "2px solid #e0b3ff"
                    : "2px solid transparent",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "1.6rem",
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "rgba(40,10,90,0.97)",
            padding: "1rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.9)",
                fontSize: "1rem",
                textAlign: "left",
                padding: "4px 0",
                fontFamily: "inherit",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @keyframes fadeDown { from { opacity:0; transform:translateY(-30px); } to { opacity:1; transform:none; } }
        @keyframes fadeUp   { from { opacity:0; transform:translateY(30px);  } to { opacity:1; transform:none; } }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%     { transform: translateX(-50%) translateY(10px); }
        }
      `}</style>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  const theme = SECTION_THEMES["home"];
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: theme.bg,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "6rem 2rem 4rem",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          animation: "fadeDown 0.9s ease both",
        }}
      >
        <img
          src="/Logo gif.gif"
          alt="Eliana Ozoria"
          style={{ width: 300, height: 400 }}
        />
      </div>
      <h1
        style={{
          color: Purple.dark,
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          fontWeight: 700,
          margin: "0.2rem 0 0.5rem",
          animation: "fadeUp 1s 0.3s ease both",
          fontFamily: "'Georgia', serif",
          position: "relative",
          zIndex: 1,
        }}
      >
        Welcome to my Portfolio
      </h1>

      <div
        onClick={() =>
          document
            .getElementById("about-me")
            .scrollIntoView({ behavior: "smooth" })
        }
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          color: Purple.dark,
          zIndex: 1,
          animation: "bounce 2s infinite",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>↓</span>
      </div>
    </section>
  );
}

// ── Skill progress bar ────────────────────────────────────────────────────────
function SkillBar({ label, percent }) {
  return (
    <div style={{ marginBottom: "0.9rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.3rem",
        }}
      >
        <span
          style={{ fontSize: "0.82rem", color: Purple.dark, fontWeight: 600 }}
        >
          {label}
        </span>
        <span style={{ fontSize: "0.75rem", color: Purple.mid }}>
          {percent}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 8,
          background: Purple.soft,
          borderRadius: 50,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${Purple.dark}, ${Purple.mid})`,
            borderRadius: 50,
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function AboutSection() {
  const skills = [
    { label: "Clip Studio Paint", percent: 84 },
    { label: "Figma", percent: 45 },
    { label: "Photoshop", percent: 85 },
    { label: "Illustrator", percent: 85 },
    { label: "Dreamweaver", percent: 56 },
    { label: "Microsoft Word", percent: 85 },
    { label: "PowerPoint", percent: 85 },
  ];

  return (
    <section
      id="about-me"
      style={{
        minHeight: "100vh",
        background: "#faf5ff",
        padding: "5rem 2rem 4rem",
      }}
    >
      <style>{`
        .about-card {
          max-width: 750px;
          margin: 0 auto;
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid #eadbf3;
          box-shadow: 0 8px 32px rgba(62,39,82,0.1);
          overflow: visible;
          position: relative;
        }
        .about-banner {
          width: 100%;
          border-radius: 14px 14px 0 0;
          display: block;
          height: 180px;
          object-fit: cover;
        }
        .photo-box {
          position: absolute;
          top: 210px;
          left: 2rem;
          width: 150px;
          height: 150px;
          border: 4px solid white;
          overflow: hidden;
          z-index: 2;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
          background: #eadbf3;
        }
        .photo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .name-block {
          padding-left: 11rem;
          margin-bottom: 1.2rem;
        }
        @media (min-width: 768px) {
          .about-banner { height: 280px; }
          .photo-box { top: 200px; width: 160px; height: 160px; }
          .name-block { padding-left: 12rem; }
        }
        @media (min-width: 1200px) {
          .about-banner { height: 320px; }
          .photo-box { top: 240px; width: 170px; height: 170px; }
          .name-block { padding-left: 13rem; }
        }
        @media (min-width: 480px) {
          .about-banner { height: 230px; }
          .photo-box { top: 170px; width: 155px; height: 155px; }
          .name-block { padding-left: 11.5rem; }
        }
      `}</style>

      <div className="about-card">
        {/* Banner */}
        <img src="/Banner.jpg" alt="banner" className="about-banner" />

        {/* Profile photo */}
        <div className="photo-box">
          <img src="/Eliana_Ozoria.jpg" alt="Eliana Ozoria" />
        </div>

        {/* Card body */}
        <div style={{ padding: "4rem 2rem 2.5rem" }}>
          <div className="name-block">
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "#3e2752",
                margin: "0 0 0.2rem",
              }}
            >
              Eliana Ozoria
            </h2>
            <p
              style={{
                color: "#c9a4e3",
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Game Designer & Digital Artist
            </p>
          </div>

          <div
            style={{
              width: "100%",
              height: 1,
              background: "#eadbf3",
              marginBottom: "1.5rem",
            }}
          />

          <p
            style={{
              color: "#5a3a7a",
              lineHeight: 1.8,
              fontSize: "0.95rem",
              marginBottom: "2rem",
            }}
          >
            I'm a Computer Science major with a Digital Studies minor at
            Stockton University, with a passion for coding and design. It all
            started my junior year of high school when I took my first CS class
            and fell in love with building projects. All of my work is inspired
            by the people around me.
          </p>

          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <a
              href="https://drive.google.com/file/d/1-ujbmizVSb-jZz8lk_HSYdpCOSJrQz-0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#3e2752",
                color: "white",
                borderRadius: 50,
                padding: "0.65rem 1.75rem",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(62,39,82,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(62,39,82,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(62,39,82,0.2)";
              }}
            >
              View Resume
            </a>
          </div>

          <div
            style={{
              width: "100%",
              height: 1,
              background: "#eadbf3",
              marginBottom: "1.5rem",
            }}
          />

          <h3
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1rem",
              color: "#3e2752",
              fontWeight: 700,
              marginBottom: "1.2rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Skills
          </h3>
          {skills.map((s) => (
            <SkillBar key={s.label} label={s.label} percent={s.percent} />
          ))}
        </div>
      </div>
    </section>
  );
}
// ── Projects ──────────────────────────────────────────────────────
function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "#faf5ff",
        padding: "100px 2rem 60px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: Purple.dark,
              margin: 0,
            }}
          >
            Projects
          </h2>
          <div
            style={{
              width: 60,
              height: 2,
              background: Purple.mid,
              margin: "1rem auto 0.5rem",
              borderRadius: 2,
            }}
          />
          <p
            style={{
              color: "#9b6fc4",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            Click to view the full artwork
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="projects-grid"
        >
          {projectsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              style={{
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                border: `1.5px solid ${Purple.mid}`,
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(107,63,160,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: Purple.soft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  overflow: "hidden",
                }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  item.emoji
                )}
              </div>
              <div style={{ padding: "1rem", background: Purple.dark }}>
                <div
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: "0.78rem", color: Purple.mid }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              background: Purple.dark,
              borderRadius: 12,
              overflow: "hidden",
              border: `1.5px solid ${Purple.mid}`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                minHeight: 160,
              }}
            >
              <span
                style={{
                  color: Purple.mid,
                  fontSize: "1.2rem",
                  opacity: 0.6,
                }}
              >
                More Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(30,10,51,0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 700,
              width: "100%",
              background: Purple.dark,
              borderRadius: 16,
              border: `1.5px solid ${Purple.mid}`,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: 36,
                height: 36,
                background: Purple.mid,
                border: "none",
                borderRadius: "50%",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                background: Purple.soft,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                overflow: "hidden",
              }}
            >
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: selected.modalFit || "cover",
                  }}
                />
              ) : (
                selected.emoji
              )}
            </div>
            <div style={{ padding: "1.5rem 2rem" }}>
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.4rem",
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                {selected.title}
              </div>
              <span
                style={{
                  fontSize: "0.72rem",
                  background: Purple.mid,
                  color: Purple.dark,
                  padding: "0.25rem 0.75rem",
                  borderRadius: 50,
                  marginBottom: "1rem",
                  display: "inline-block",
                  fontWeight: 700,
                }}
              >
                {selected.tag}
              </span>
              <p
                style={{
                  color: Purple.soft,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginTop: "0.75rem",
                }}
              >
                {selected.full}
              </p>
              {selected.docs && (
                <a
                  href={selected.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.25rem",
                    background: Purple.mid,
                    color: Purple.dark,
                    borderRadius: 50,
                    padding: "0.6rem 1.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                >
                  View Documentation
                </a>
              )}
              {selected.playLink && (
                <a
                  href={selected.playLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.25rem",
                    marginLeft: "1rem",
                    background: Purple.mid,
                    color: Purple.dark,
                    borderRadius: 50,
                    padding: "0.6rem 1.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                >
                  Play Game
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────
function ContactSection() {
  const contactLinks = [
    {
      label: "Ozoriaeliana@gmail.com",
      href: "mailto:Ozoriaeliana@gmail.com",
    },
    { label: "(609) 432-0662" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eliana-ozoria-6119b9384/?skipRedirect=true",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        background: Purple.dark,
        padding: "100px 2rem 60px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
          }}
        >
          Get In Touch
        </h2>
        <div
          style={{
            width: 60,
            height: 2,
            background: Purple.soft,
            margin: "1rem auto 2rem",
            borderRadius: 2,
          }}
        />
        <p
          style={{
            color: Purple.mid,
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          Whether you want to collaborate, have a question, or just want to say
          hi — I'd love to hear from you!
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {contactLinks.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: Purple.mid,
                textDecoration: "none",
                fontSize: "0.95rem",
                padding: "0.85rem 2rem",
                border: "1px solid rgba(201,164,227,0.25)",
                borderRadius: 50,
                width: "100%",
                maxWidth: 360,
                justifyContent: "center",
                background: "rgba(255,255,255,0.04)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,164,227,0.12)";
                e.currentTarget.style.borderColor = Purple.mid;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(201,164,227,0.25)";
                e.currentTarget.style.color = Purple.mid;
              }}
            >
              <span style={{ fontSize: "1rem" }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap";
    document.head.appendChild(link);

    const sections = NAV_LINKS.map((l) => ({
      id: l.toLowerCase().replace(" ", "-"),
      label: l,
    }));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const found = sections.find((s) => s.id === e.target.id);
            if (found) setActive(found.label);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; overflow-x: hidden; }
        body { margin: 0 !important; padding: 0 !important; }
      `}</style>
      <Navbar active={active} setActive={setActive} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
