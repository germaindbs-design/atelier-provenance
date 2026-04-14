"use client";

export default function Header({
  mobileMenu,
  setMobileMenu
}: {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Atelier Provenance</a>
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Menu"
        >
          {mobileMenu ? "✕" : "☰"}
        </button>
        <div className={`nav-links ${mobileMenu ? "nav-open" : ""}`}>
          <a href="#approche" onClick={() => setMobileMenu(false)}>Approche</a>
          <a href="#offres" onClick={() => setMobileMenu(false)}>Prestations</a>
          <a href="#exemples" onClick={() => setMobileMenu(false)}>Exemples</a>
          <a href="#parcours" onClick={() => setMobileMenu(false)}>À propos</a>
          <a href="#contact" className="button button-primary button-sm" onClick={() => setMobileMenu(false)}>Prendre contact</a>
        </div>
      </div>
    </nav>
  );
}
