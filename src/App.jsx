import "./App.css";

const CONTACT = {
  name: "DANSON HAR",
  title: "Frontend Developer · AI Solution Developer · UI/UX Designer",
  phone: "+60 19 473 2520",
  email: "Dansonhar8@gmail.com",
  portfolio: "https://dansonhar.github.io/danson_portfolio/",
};

const EXPERIENCE = [
  {
    role: "Creative & Technical Support",
    company: "Crave Asia",
    period: "October 2025 – July 2026",
    points: [
      "Assisted in designing digital assets using Adobe Photoshop and AI-powered creative tools.",
      "Developed and optimized AI prompts for image generation, content creation, and workflow automation.",
      "Contributed to AI-powered website development, including frontend implementation, content integration, and digital project setup.",
      "Collaborated with cross-functional teams on creative, technical, and digital projects while adapting to changing priorities.",
      "Demonstrated strong problem-solving skills, initiative, and the ability to work independently in a fast-paced environment.",
      "Utilized modern AI tools to improve productivity, streamline creative workflows, and support business operations.",
      "Developed and maintained responsive websites using modern frontend technologies.",
      "Integrated AI-powered features and tools to enhance website functionality and user experience.",
    ],
  },
  {
    role: "Cashier & Customer Service",
    company: "Mix & Fuse Restaurant",
    period: "December 2024 – September 2025",
    points: [
      "Managed cashier operations and customer orders.",
      "Assisted customers and handled food-related issues.",
      "Maintained cleanliness and organization of dining area.",
    ],
  },
  {
    role: "Intern — 3D, Graphic & Multimedia Designer",
    company: "Crave Asia",
    period: "September 2024 – November 2024",
    points: [
      "Designed 3D assets for product visualization.",
      "Collaborated with teams to ensure brand consistency and creative alignment.",
    ],
  },
  {
    role: "Sales Assistant",
    company: "HiveTec",
    period: "January 2023 – June 2023",
    points: [
      "Explained technical IT products to customers in easy-to-understand terms.",
      "Provided tailored solutions based on customer budgets and needs.",
    ],
  },
  {
    role: "Admin Data Entry",
    company: "PC Ultimate Legacy",
    period: "November 2022 – December 2022",
    points: [
      "Performed fast and accurate data entry.",
      "Maintained attention to detail while multitasking.",
    ],
  },
  {
    role: "Cashier",
    company: "VGMart",
    period: "July 2022 – August 2022",
    points: [
      "Managed transactions and assisted customers in locating products.",
      "Maintained store cleanliness and organization.",
    ],
  },
  {
    role: "Customer Service Assistant",
    company: "Tufting Studio, Petaling Jaya",
    period: "April 2022 – June 2022",
    points: [
      "Guided customers in using tufting equipment.",
      "Provided material safety info and excellent service during sessions.",
    ],
  },
  {
    role: "Event Crew",
    company: "Setia Alam Sales Gallery · Riveria Sales Gallery",
    period: "",
    points: [
      "Setup and dismantle.",
      "Guest services.",
      "Safety & crowd management.",
      "Cleanup & inventory.",
    ],
  },
  {
    role: "Receptionist",
    company: "Le Quadri Hotel, Cheras",
    period: "December 2021 – January 2022",
    points: [
      "Welcomed guests and managed check-ins/outs.",
      "Solved room issues and coordinated with housekeeping.",
      "Handled front desk calls professionally.",
    ],
  },
];

const SOFT_SKILLS = [
  "Adapts to new working environments easily",
  "Able to socialize with new people",
  "Fast learner",
  "Effective communication skills",
  "Teamwork efficiency",
];

const LANGUAGES = ["English", "Malay", "Chinese", "Cantonese"];

const SOFTWARE_SKILLS = [
  "Autodesk Maya",
  "Substance Painter",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Visual Studio Code",
  "Antigravity",
  "GitHub",
  "Docker",
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="panel">
        <h2 className="panel-title">Soft Skills</h2>
        <ul className="dot-list">
          {SOFT_SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2 className="panel-title">Languages</h2>
        <div className="chips">
          {LANGUAGES.map((l) => (
            <span className="chip" key={l}>
              {l}
            </span>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2 className="panel-title">Software Skills</h2>
        <ul className="dot-list">
          {SOFTWARE_SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default function App() {
  const initials = CONTACT.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow">My Resume</p>
            <h1 className="hero-name">{CONTACT.name}</h1>
            <p className="hero-title">{CONTACT.title}</p>

            <div className="contact">
              <a
                className="contact-item"
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              >
                <span className="contact-ico" aria-hidden>
                  📞
                </span>
                {CONTACT.phone}
              </a>
              <a className="contact-item" href={`mailto:${CONTACT.email}`}>
                <span className="contact-ico" aria-hidden>
                  ✉️
                </span>
                {CONTACT.email}
              </a>
              <a
                className="contact-item"
                href={CONTACT.portfolio}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-ico" aria-hidden>
                  🔗
                </span>
                Portfolio
              </a>
            </div>
          </div>

          <div className="avatar" aria-label={CONTACT.name}>
            {initials}
          </div>
        </div>
      </header>

      <main className="layout">
        <section className="main-col">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((job, i) => (
              <article className="job" key={`${job.company}-${i}`}>
                <div className="job-marker" aria-hidden />
                <div className="job-head">
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-company">{job.company}</p>
                  {job.period && <p className="job-period">{job.period}</p>}
                </div>
                <ul className="job-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Sidebar />
      </main>

      <footer className="footer">
        <p>
          © 2026 {CONTACT.name} · Built with React + Vite
        </p>
      </footer>
    </div>
  );
}
