import "./Information.css";

const eclipseTimeline = [
  { phase: "Inicio eclipse parcial", time: "19:38" },
  { phase: "Máximo eclipse", time: "20:31" },
  { phase: "Duración de la oscuridad total", time: "1 minuto 36 segundos" },
  { phase: "Fin del eclipse", time: "20:46" },
  { phase: "Puesta de sol", time: "20:48" },
];

const eclipseFacts = [
  "Será el primer eclipse total visible desde la península en más de un siglo.",
  "Cruzará zonas muy pobladas de España, desde Galicia y terminando en Baleares.",
  "Ocurrirá en pleno verano, al atardecer, con una luz extremadamente dramática y ópticamente con el sol en su máximo tamaño.",
  "Llega en una época hiperconectada, donde millones de personas lo vivirán simultáneamente como experiencia colectiva… ¡y tú estarás ahí!",
];

export default function Information() {
  return (
    <section id="eclipse-info" className="information">
      <div className="information__inner">
        <div className="information__header">
          <p className="information__eyebrow">Información del eclipse</p>

          <h2 className="information__title">
            Eclipse Solar Total
            <span>12 de agosto de 2026</span>
          </h2>

          <p className="information__lead">
            Nos encontramos ante el acontecimiento astronómico y emocional más
            importante que vivirá nuestro país en todo el siglo XXI.
          </p>
        </div>

        <div className="information__overview">
          <article className="information__facts-card">
            <p className="information__section-label">
              Una combinación irrepetible
            </p>

            <ul className="information__facts">
              {eclipseFacts.map((fact) => (
                <li key={fact}>
                  <span className="information__fact-marker" />
                  <p>{fact}</p>
                </li>
              ))}
            </ul>
          </article>

          <aside className="information__timeline-card">
            <div className="information__timeline-header">
              <p>Fases del eclipse</p>
              <span>Mallorca</span>
            </div>

            <div className="information__timeline">
              {eclipseTimeline.map((item) => (
                <div className="information__timeline-row" key={item.phase}>
                  <span>{item.phase}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="information__divider" />

        <div className="information__story-header">
          <p className="information__eyebrow">La teoría de Mhares</p>

          <h3>¿Pero qué creemos que va a pasar realmente ese día?</h3>

          <p>
            Hasta ahora los datos objetivos. A partir de aquí empieza la parte
            más incierta, cinematográfica y probablemente memorable de la noche.
          </p>
        </div>

        <div className="information__story-grid">
          <article className="information__story-card information__story-card--featured">
            <div className="information__card-number">01</div>

            <div className="information__card-content">
              <p className="information__section-label">La anomalía</p>

              <h4>La ciencia comparece</h4>

              <p>
                A las 11:13, pocas horas antes del famoso y esperado eclipse
                solar total, únicamente visible sobre Mallorca en el atardecer,
                la NASA, la ESA y varias agencias espaciales comparecen
                conjuntamente.
              </p>

              <p>
                El mensaje es breve y sorprendentemente poco tranquilizador.
              </p>

              <blockquote className="information__quote">
                <p>
                  “Estamos observando un fenómeno astronómico que no coincide
                  con ninguno de nuestros modelos actuales. No disponemos de una
                  explicación satisfactoria. Pero todo indica que la órbita
                  terrestre va a sufrir una fuerte alteración durante el eclipse
                  de hoy. Las consecuencias son desconocidas. Recomendamos a la
                  población permanecer cerca de sus hogares con medios básicos de
                  supervivencia mientras continuamos evaluando la situación.”
                </p>
              </blockquote>

              <p>
                Por primera vez, la ciencia no sabe qué va a ocurrir.
              </p>
            </div>
          </article>

          <article className="information__story-card">
            <div className="information__card-number">02</div>

            <div className="information__card-content">
              <p className="information__section-label">El rumor</p>

              <h4>Todo empieza a circular</h4>

              <p>
                La incredulidad da paso al miedo, y éste a la anarquía. Los
                supermercados se vacían. Las teorías se multiplican. Los
                gobiernos piden calma. El mundo se va a acabar.
              </p>

              <p>
                Y en las redes aparece un rumor. Nadie sabe de dónde sale ni si
                tiene algún fundamento científico. Pero el rumor se extiende con
                una velocidad extraordinaria.
              </p>

              <p>
                Según una combinación de cálculos improvisados, mapas
                compartidos, teorías improbables y una cantidad preocupante de
                memes, el rumor afirma que el Sea Club “MHARES” en la bella
                Bahía de Palma será uno de los primeros lugares donde volverá a
                verse la luz después del eclipse… eso si es que vuelve la luz.
              </p>
            </div>
          </article>

          <article className="information__story-card">
            <div className="information__card-number">03</div>

            <div className="information__card-content">
              <p className="information__section-label">La confluencia</p>

              <h4>Todos los caminos llevan al resort</h4>

              <p>
                Así que, ya sea por miedo, por curiosidad, por respeto, por
                oportunismo o por hedonismo, al caer la tarde, personas muy
                distintas comienzan a concentrarse allí, en el resort.
              </p>

              <p>
                Buscan verlo con sus propios ojos, quieren ser los primeros, o
                buscan respuestas, quizás señales, supervivencia, una posición
                privilegiada, prioridad en el nuevo mundo o simplemente evasión,
                diversión, compañía y una copa.
              </p>

              <p>
                Y mientras el eclipse se aproxima, MHARES se convierte en un
                inesperado punto de encuentro para todas las formas posibles de
                enfrentarse al fin del mundo.
              </p>

              <p>
                Tú, que tienes motivos de peso, decides también que no puedes
                faltar.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}