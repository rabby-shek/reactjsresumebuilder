import React from "react";

const Footer = () => {
  const getYear = new Date();
  let year = getYear.getFullYear().toString();
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {year} Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Smart Resume
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
