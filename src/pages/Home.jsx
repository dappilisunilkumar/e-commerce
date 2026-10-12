
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
  Sparkles,
  Heart,
  ShoppingBag,
  Gift,
  RotateCcw,
  Quote,
  ChevronDown,
  Send,
  Zap,
} from "lucide-react";

const categories = [
  {
    title: "Electronics",
    icon: "🎧",
    path: "/services/service1",
    description: "Smart gadgets and everyday technology.",
  },
  {
    title: "Fashion",
    icon: "👟",
    path: "/services/service2",
    description: "Refresh your style with modern essentials.",
  },
  {
    title: "Home & Living",
    icon: "🛋️",
    path: "/services/service3",
    description: "Thoughtful touches for your space.",
  },
];

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3299,
    rating: 4.8,
    path: "/services/service1",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    category: "Fashion",
    price: 1999,
    oldPrice: 2599,
    rating: 4.7,
    path: "/services/service2",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    id: 3,
    name: "Modern Table Lamp",
    category: "Home & Living",
    price: 1499,
    oldPrice: 1999,
    rating: 4.6,
    path: "/services/service3",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fashion enthusiast",
    text: "I love how easy it is to explore different collections. The design feels clean and modern.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Technology lover",
    text: "The electronics collection is easy to browse, and the product layout is really attractive.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Home decor enthusiast",
    text: "A beautiful shopping experience. I especially like the calming colors and simple navigation.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What can I find at ShopSphere?",
    answer:
      "Explore electronics, fashion accessories, and home and living products in our demo shopping catalog.",
  },
  {
    question: "Can I place an order on this website?",
    answer:
      "This version is a frontend demonstration. A working cart, checkout, and order processing flow can be added as the next development step.",
  },
  {
    question: "Is my profile information saved?",
    answer:
      "The demo profile can be saved in your browser using localStorage. It is not a secure account system and does not sync across devices.",
  },
  {
    question: "Does ShopSphere support mobile devices?",
    answer:
      "Yes. The website layout is designed to adapt to desktop, tablet, and mobile screens.",
  },
];

function Home() {
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function handleNewsletter(event) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterMessage(
      "Thanks for your interest! Newsletter registration is a demo."
    );
    setEmail("");
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={14} /> YOUR WORLD, YOUR STYLE
          </span>

          <h1>
            Shopping that
            <br />
            feels <span>different.</span>
          </h1>

          <p>
            Explore handpicked collections, discover new favorites,
            and bring a little inspiration into every day.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Collections <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="btn btn-outline">
              Our Story
            </Link>
          </div>

          <div className="hero-rating">
            <span className="stars">★★★★★</span>
            <span>Designed for a better shopping experience</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1100"
            alt="Contemporary shopping boutique"
          />

          <div className="floating-card">
            <span className="floating-icon">✦</span>
            <div>
              <strong>Discover something new</strong>
              <p>Collections for everyday life</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOPPING BENEFITS */}
      <section className="container benefits">
        <div className="benefit">
          <Truck size={26} />
          <div>
            <h3>Easy Shopping</h3>
            <p>A smooth browsing experience</p>
          </div>
        </div>

        <div className="benefit">
          <ShieldCheck size={26} />
          <div>
            <h3>Thoughtful Choices</h3>
            <p>Collections worth exploring</p>
          </div>
        </div>

        <div className="benefit">
          <Headphones size={26} />
          <div>
            <h3>Customer Support</h3>
            <p>We're here to help</p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES */}
      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE OUR WORLD</span>
            <h2>Find your collection</h2>
            <p>Three collections, plenty of inspiration.</p>
          </div>

          <Link to="/services" className="text-link">
            View all <ArrowRight size={17} />
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={category.path}
              className="category-card"
              key={category.title}
            >
              <span className="category-emoji">{category.icon}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="category-arrow">
                Explore <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CURATED FOR YOU</span>
              <h2>Featured products</h2>
              <p>Discover a few favorites from our collections.</p>
            </div>

            <Link to="/services" className="text-link">
              Browse collections <ArrowRight size={17} />
            </Link>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <Link to={product.path} className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">Featured</span>
                </Link>

                <button
                  type="button"
                  className={`favorite-button ${
                    favorites.includes(product.id) ? "favorited" : ""
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={
                    favorites.includes(product.id)
                      ? `Remove ${product.name} from favorites`
                      : `Add ${product.name} to favorites`
                  }
                >
                  <Heart
                    size={19}
                    fill={
                      favorites.includes(product.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <div>
                      <strong>
                        ₹{product.price.toLocaleString("en-IN")}
                      </strong>
                      <del className="old-price">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </del>
                    </div>

                    <span className="rating">
                      <Star size={14} fill="currentColor" />
                      {product.rating}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONAL BANNER */}
      <section className="container section">
        <div className="promo-banner">
          <div className="promo-content">
            <span className="eyebrow">
              <Zap size={14} /> DISCOVER YOUR NEXT FAVORITE
            </span>

            <h2>A little inspiration goes a long way.</h2>

            <p>
              Explore our collections and find products that fit your
              lifestyle.
            </p>

            <Link to="/services" className="btn btn-primary">
              Explore Now <ArrowRight size={18} />
            </Link>
          </div>

          <div className="promo-art">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
              alt="Fashion collection inspiration"
            />
            <div className="promo-glass-badge">
              <Sparkles size={18} />
              Fresh discoveries
            </div>
          </div>
        </div>
      </section>

      {/* 6. SHOP BY LIFESTYLE */}
      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MADE FOR YOUR EVERYDAY</span>
            <h2>Shop by lifestyle</h2>
            <p>Find something that matches your interests.</p>
          </div>
        </div>

        <div className="lifestyle-grid">
          <Link to="/services/service1" className="lifestyle-card">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800"
              alt="Technology products"
            />
            <div className="lifestyle-overlay">
              <span>01 / TECHNOLOGY</span>
              <h3>Smart Living</h3>
              <span className="text-link">
                Explore gadgets <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          <Link to="/services/service2" className="lifestyle-card">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
              alt="Modern fashion"
            />
            <div className="lifestyle-overlay">
              <span>02 / FASHION</span>
              <h3>Everyday Style</h3>
              <span className="text-link">
                Find your style <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          <Link to="/services/service3" className="lifestyle-card">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
              alt="Interior design and home decor"
            />
            <div className="lifestyle-overlay">
              <span>03 / INTERIORS</span>
              <h3>Beautiful Spaces</h3>
              <span className="text-link">
                Explore interiors <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE SHOPSPHERE DIFFERENCE</span>
              <h2>Simple by design.</h2>
              <p>A thoughtful shopping experience from the first click.</p>
            </div>
          </div>

          <div className="why-grid">
            <article className="why-card">
              <div className="why-icon">
                <ShoppingBag size={25} />
              </div>
              <h3>Easy Discovery</h3>
              <p>
                Browse collections with clear navigation and a
                straightforward interface.
              </p>
            </article>

            <article className="why-card">
              <div className="why-icon">
                <Heart size={25} />
              </div>
              <h3>Personal Touch</h3>
              <p>
                Save favorite products and make the experience your own.
              </p>
            </article>

            <article className="why-card">
              <div className="why-icon">
                <RotateCcw size={25} />
              </div>
              <h3>Simple Experience</h3>
              <p>
                Enjoy consistent layouts and intuitive page navigation.
              </p>
            </article>

            <article className="why-card">
              <div className="why-icon">
                <ShieldCheck size={25} />
              </div>
              <h3>Transparent Demo</h3>
              <p>
                Explore the interface and understand the shopping flow
                without making real purchases.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SHOPPING STORIES</span>
            <h2>A little love for good design.</h2>
            <p>Sample testimonials demonstrating a customer review layout.</p>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <Quote size={27} className="testimonial-quote" />

              <div className="testimonial-stars">
                {"★".repeat(review.rating)}
              </div>

              <p>"{review.text}"</p>

              <div className="review-author">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3>{review.name}</h3>
                  <span>{review.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 9. NEWSLETTER */}
      <section className="container section">
        <div className="newsletter">
          <div className="newsletter-icon">
            <MailIcon />
          </div>

          <span className="eyebrow">A NOTE FROM SHOPSPHERE</span>
          <h2>Stay in the loop.</h2>
          <p>
            Enter your email to try our newsletter subscription form.
          </p>

          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setNewsletterMessage("");
              }}
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />

            <button className="btn btn-primary" type="submit">
              Subscribe <Send size={16} />
            </button>
          </form>

          {newsletterMessage && (
            <p className="newsletter-message" role="status">
              {newsletterMessage}
            </p>
          )}

          <small>This demonstration does not store or send email addresses.</small>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="container section faq-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">NEED TO KNOW</span>
            <h2>Frequently asked questions</h2>
            <p>Quick answers about our demo shopping experience.</p>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={openFaq === index}
                onClick={() =>
                  setOpenFaq((current) =>
                    current === index ? -1 : index
                  )
                }
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={openFaq === index ? "faq-chevron open" : "faq-chevron"}
                />
              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="container cta">
        <div>
          <span className="eyebrow">YOUR NEXT DISCOVERY</span>
          <h2>Make room for something new.</h2>
          <p>Browse our collections and find your next favorite.</p>
        </div>

        <Link to="/services" className="btn btn-light">
          Start Exploring <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}

function MailIcon() {
  return <Send size={25} />;
}

export default Home;
