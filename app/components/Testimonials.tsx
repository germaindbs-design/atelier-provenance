export default function Testimonials() {
  const testimonials = [
    {
      quote: "Grâce à Atelier Provenance, nous avons pu vendre notre collection de fauteuils Art Déco en seulement deux semaines, à un prix supérieur à nos estimations. Les descriptions ont vraiment fait la différence auprès des collectionneurs.",
      author: "Marie L.",
      role: "Galerie d'antiquités - Paris",
      avatar: "/avatars/marie.jpg"
    },
    {
      quote: "Je ne pensais pas qu'une simple description pouvait changer autant la perception de mes pièces. Les clients posent maintenant des questions plus pertinentes et sont prêts à payer le prix que je demande.",
      author: "Thomas R.",
      role: "Antiquaire - Lyon",
      avatar: "/avatars/thomas.jpg"
    },
    {
      quote: "Le service est impeccable. Les textes sont précis, élégants et surtout, ils parlent aux collectionneurs. Nous avons intégré ce service à notre processus de mise en vente et les résultats sont immédiats.",
      author: "Sophie D.",
      role: "Responsable vente - Selency",
      avatar: "/avatars/sophie.jpg"
    }
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Ils nous font confiance</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.author} />
                <div className="testimonial-author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
