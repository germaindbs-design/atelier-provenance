"use client";

export default function Cta({
  formData,
  setFormData,
  formStatus,
  handleSubmit
}: {
  formData: any;
  setFormData: (value: any) => void;
  formStatus: string | null;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <section className="section border-top" id="contact">
      <div className="container split">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Un objet suffit<br /><em>pour commencer.</em></h2>
          <p>
            Envoyez-nous les photos et quelques informations sur votre pièce —
            période, matière, état, prix envisagé. Nous vous répondons sous
            48 heures avec la notice rédigée, gratuitement et sans engagement.
          </p>
          <div className="contact-methods">
            <a href="mailto:contact.atelierprovenance@gmail.com" className="contact-method">
              <span className="contact-icon">✉</span>
              <span>contact.atelierprovenance@gmail.com</span>
            </a>
            <a href="tel:+33751420733" className="contact-method">
              <span className="contact-icon">☏</span>
              <span>07 51 42 07 33</span>
            </a>
          </div>
        </div>
        <div>
          {formStatus === "sent" ? (
            <div className="form-success">
              <h3>Message préparé.</h3>
              <p>Votre client email s'est ouvert avec les informations pré-remplies. Si ce n'est pas le cas, écrivez-nous directement à contact.atelierprovenance@gmail.com</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="platform">Plateforme de vente</label>
                  <input
                    id="platform"
                    type="text"
                    placeholder="Selency, Proantic, autre…"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="pieces">Nombre de pièces à décrire</label>
                <input
                  id="pieces"
                  type="number"
                  min="1"
                  value={formData.pieces}
                  onChange={(e) => setFormData({ ...formData, pieces: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message (optionnel)</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="button button-primary">
                Envoyer la demande
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
