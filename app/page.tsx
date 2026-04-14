"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Comparison from "./components/Comparison";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  const [openExample, setOpenExample] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    pieces: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Demande — ${formData.name || "Nouveau prospect"}`
    );
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\nTéléphone : ${formData.phone}\nPlateforme : ${formData.platform}\nNombre de pièces : ${formData.pieces}\n\nMessage :\n${formData.message}`
    );
    window.location.href = `mailto:contact.atelierprovenance@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus("sent");
  };

  return (
    <>
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <main>
        <Hero />
        <section className="section border-top" id="probleme">
          {/* Contenu du constat */}
          <div className="container split">
            <div>
              <p className="eyebrow">Le constat</p>
              <h2>La plupart des annonces ne sont pas à la hauteur des pièces qu'elles présentent.</h2>
              <p>
                Sur Selency, Proantic, Leboncoin ou Catawiki, des milliers d'objets de qualité
                restent en ligne pendant des semaines. Pas parce qu'ils manquent de valeur,
                mais parce que rien dans leur présentation ne permet à l'acheteur de comprendre
                cette valeur.
              </p>
              <p>
                Descriptions en deux lignes. Vocabulaire approximatif. Aucun contexte historique.
                Le prix semble arbitraire. L'acheteur hésite, puis passe à autre chose.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <p className="stat-number">70 %</p>
                  <p className="stat-label">des annonces haut de gamme sans contexte historique</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">3×</p>
                  <p className="stat-label">plus de vues avec une description structurée</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">45 j.</p>
                  <p className="stat-label">temps moyen de vente sans description optimisée</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Comparison openExample={openExample} setOpenExample={setOpenExample} />
        <About openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <Cta
          formData={formData}
          setFormData={setFormData}
          formStatus={formStatus}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer />
      <style jsx global>{`
        /* Votre CSS global ici (celui que vous avez partagé) */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: Georgia, "Times New Roman", Times, serif;
          color: #1a1613;
          background: #f6efe4;
          line-height: 1.7;
          font-size: 16px;
        }
        /* ... (le reste de votre CSS) */
      `}</style>
    </>
  );
}
