import "./DressCode.css";

const characters = [
  "Navegantes de recreo queriendo volver a tierra",
  "Hippies cósmicos",
  "Milicias veganas",
  "Gurús solares",
  "Autoridades locales",
  "Escapados de un after de Magaluf",
  "Cazadores de ovnis",
  "Terapeutas alternativos.",
  "Hare Krishnas, franciscanos y clarisas",
  "Millonarios organizados con pasajes al nuevo mundo",
  "Adivinos bronceados",
  "Sectarios milenaristas",
  "El padre Ángel",
  "O una batukada.",
];

const inspiration = [
  "Eclipses.",
  "Cielos nocturnos.",
  "Glamour cósmico.",
  "Decadencia estival.",
  "Lujo mediterráneo.",
  "El fin del mundo, pero con buen gusto.",
];

const colors = [
  "Negro solar.",
  "Blanco roto.",
  "Plata.",
  "Azul medianoche.",
  "Arena.",
  "Reflejos metálicos.",
];

const yesList = [
  "Looks elegantes con un punto extraño.",
  "Sunglasses de noche.",
  "Brillos sutiles.",
  'Estética "rich people at the end of civilization".',
  "Detalles astrales, futuristas o discretamente apocalípticos",
];

const noList = [
  "Disfraces completos.",
  "Cosplay del fin del mundo.",
  "Maquillaje temático exagerado.",
  "Máscaras",
];

export default function DressCode() {
  return (
    <section id="dress-code" className="dress-code">
      <div className="dress-code__inner">
        <header className="dress-code__header">
          <p className="dress-code__eyebrow">LINK 3</p>

          <h2 className="dress-code__title">EoW Vibes</h2>

          <p className="dress-code__subtitle">
            INSPIRACIÓN & DRESS CODE
          </p>

          <div className="dress-code__intro">
            <p>
              Nadie sabe qué va a ocurrir, pero todo el mundo tiene una teoría.
            </p>

            <p>
              Algunos creen que comienza una nueva era.
              <br />
              Otros creen que todo es una exageración.
              <br />
              Algunos buscan una explicación científica.
              <br />
              Otros una explicación espiritual.
            </p>

            <p>
              Algunos han salido corriendo con lo puesto.
              <br />Y algunos simplemente han decidido vestirse para la ocasión.
            </p>
          </div>
        </header>

        <section className="dress-code__characters" aria-label="Puede que aparezcan">
          <div className="dress-code__section-heading">
            <p className="dress-code__section-label">
              Así que, por si te inspiran algo
            </p>

            <h3>Puede que aparezcan:</h3>
          </div>

          <div className="dress-code__character-grid">
            {characters.map((character) => (
              <article className="dress-code__character-card" key={character}>
                <span className="dress-code__character-dot" />
                <p>{character}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dress-code__concept-card">
          <p>
            Pero a la hora de vestirse, la idea no es replicar personajes. La
            idea es parecer personas que han recibido exactamente la misma
            noticia y reaccionan de formas completamente distintas.
          </p>
        </section>

        <section className="dress-code__guides">
          <article className="dress-code__guide-card">
            <p className="dress-code__section-label">Inspiración visual:</p>

            <div className="dress-code__chips">
              {inspiration.map((item) => (
                <span className="dress-code__chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="dress-code__guide-card dress-code__guide-card--palette">
            <p className="dress-code__section-label">Colores:</p>

            <div className="dress-code__color-list">
              {colors.map((color) => (
                <span className="dress-code__color-pill" key={color}>
                  {color}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="dress-code__rules">
          <article className="dress-code__rule-card dress-code__rule-card--yes">
            <p className="dress-code__rule-kicker">La</p>

            <h3>
              END OF THE WORLD PARTY <span>dice SÍ a:</span>
            </h3>

            <ul>
              {yesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="dress-code__rule-card dress-code__rule-card--no">
            <p className="dress-code__rule-kicker">La</p>

            <h3>
              END OF THE WORLD PARTY <span>dice NO WAY a:</span>
            </h3>

            <ul>
              {noList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <footer className="dress-code__closing">
          <p>
            Y sí, las túnicas de secta están permitidas, siempre que sean bonitas
            y parezcan de Missoni
          </p>
        </footer>
      </div>
    </section>
  );
}