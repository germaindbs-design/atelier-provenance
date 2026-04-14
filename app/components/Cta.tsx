import Link from 'next/link'

export default function Cta() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="cta-content">
          <h2 className="section-title">Prêt à valoriser vos pièces ?</h2>
          <p className="cta-text">Offrez à vos objets la description qu'ils méritent. Nous analysons chaque pièce avec expertise pour créer des textes qui justifient leur valeur et accélèrent leur vente.</p>

          <div className="cta-buttons">
            <Link href="#contact-form" className="btn">Demander un devis</Link>
            <Link href="#examples" className="btn btn-outline">Voir des exemples</Link>
          </div>
        </div>

        <div id="contact-form" className="contact-form">
          <h3>Contactez-nous</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Votre message (décrivez vos besoins)</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  )
}
