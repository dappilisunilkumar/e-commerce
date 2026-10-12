
import { Heart, Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Create an enjoyable and welcoming shopping experience.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description: "Make every collection easy to discover and explore.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Design an experience for desktop, tablet, and mobile.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Bring thoughtful design and fresh ideas together.",
  },
];

function About() {
  return (
    <div className="inner-page">
      <section className="about-hero">
        <span className="eyebrow">THE STORY BEHIND SHOPSPHERE</span>
        <h1>
          Shopping meets
          <br />
          <span>imagination.</span>
        </h1>
        <p>
          A modern shopping experience built around discovery,
          simplicity, and a little everyday inspiration.
        </p>
      </section>

      <section className="container about-content section">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Modern shopping boutique"
          />
        </div>

        <div className="about-copy">
          <span className="eyebrow">OUR STORY</span>
          <h2>More than a place to browse.</h2>
          <p>
            ShopSphere is a React-based e-commerce demonstration
            designed to bring multiple shopping categories together
            in one elegant digital space.
          </p>
          <p>
            Explore electronics, fashion, and home essentials through
            a consistent interface with smooth navigation and
            translucent glass-inspired design.
          </p>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading centered">
          <div>
            <span className="eyebrow">WHAT WE BELIEVE</span>
            <h2>Designed with purpose</h2>
          </div>
        </div>

        <div className="value-grid">
          {values.map(({ icon: Icon, title, description }) => (
            <article className="value-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
