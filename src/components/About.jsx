import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        This is About page
      </p>

      <div className="blog-container">
        <div className="blog-card">
          <h2>Functional Food #1</h2>
          <p>
            Functional Food #1 might include nutrient-dense options such as leafy greens, 
            rich in folate and essential vitamins for prenatal health.
          </p>
        </div>

        <div className="blog-card">
          <h2>Functional Food #2</h2>
          <p>
            Functional Food #2 could focus on probiotic-rich foods like yogurt or kefir, 
            which can support digestive health during pregnancy.
          </p>
        </div>

        <div className="blog-card">
          <h2>Functional Food #3</h2>
          <p>
            Functional Food #3 may include omega-3-rich foods such as salmon or chia seeds, 
            which support fetal brain development.
          </p>
        </div>
      </div>

      <footer>
        <p>
          <strong>Links:</strong> &nbsp;
          <a href="https://example.com/group" target="_blank" rel="noreferrer">
            Our Group
          </a> | &nbsp;
          <a href="mailto:contact@example.com">Contact</a> | &nbsp;
          <a href="https://example.com/privacy" target="_blank" rel="noreferrer">
            Privacy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default About;
