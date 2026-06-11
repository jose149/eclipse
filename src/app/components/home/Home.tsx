import "./Home.css";

const FORM_URL = "https://URL_DEL_FORMULARIO.com";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home__inner">
        <div className="home__hero">
          <div className="home__copy">
            <p className="home__eyebrow">Mhares · 12 de agosto de 2026</p>

            <h1 className="home__title">The End of the World Party</h1>

            <p className="home__lead">
              Una celebración privada frente al mar para vivir el primer eclipse
              solar total en la España continental en 114 años.
            </p>

            <p className="home__intro">
              Estimados amig@s, sólo quedan dos meses para el clímax que
              supondrá este momento mágico y trascendental para nuestra
              generación. Y merece una celebración a lo grande.
            </p>

            <div className="home__actions">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="home__button home__button--primary"
              >
                Rellenar formulario
              </a>

              <a href="#eclipse-info" className="home__button home__button--secondary">
                Info eclipse
              </a>
            </div>
          </div>

          <aside className="home__event-card" aria-label="Detalles del evento">
            <div className="home__eclipse" />

            <p className="home__card-label">Evento privado</p>

            <div className="home__card-main">
              <span>12</span>
              <div>
                <p>Agosto</p>
                <p>2026</p>
              </div>
            </div>

            <div className="home__card-divider" />

            <p className="home__card-place">Mhares Sea Club</p>
            <p className="home__card-text">
              Day Party · Eclipse · EoW Vibes
            </p>
          </aside>
        </div>

        <div className="home__message">
          <p>
            Con tal de ultimar todos los detalles, los Buades Bros os pedimos
            por favor que rellenéis el formulario y aprovechamos para daros a
            continuación información detallada del evento.
          </p>
        </div>

        <div className="home__schedule">
          <article className="home__schedule-card">
            <p className="home__schedule-date">11 de agosto</p>

            <h2>Cena cocktail pre-eclipse</h2>

            <p>
              <strong>20:30 – 23:30</strong> · Mariluz – Es Baluard, Palma
              centro.
            </p>

            <p>
              Velada opcional para romper el hielo entre los invitados y
              disfrutar de las vistas sobre la muralla y el puerto.
            </p>
          </article>

          <article className="home__schedule-card home__schedule-card--featured">
            <p className="home__schedule-date">12 de agosto</p>

            <h2>EoW Party & Eclipse</h2>

            <ul>
              <li>
                <strong>11:00 – 11:15</strong>
                <span>Recogida en autobús.</span>
              </li>

              <li>
                <strong>12:00 – 18:00</strong>
                <span>
                  Day Party by the pool. Dress code: Mediterranean casual.
                </span>
              </li>

              <li>
                <strong>18:00 – 00:00</strong>
                <span>
                  EoW Party & Eclipse. Dress code: EoW vibes.
                </span>
              </li>

              <li>
                <strong>00:00 – 00:30</strong>
                <span>Vuelta en autocar.</span>
              </li>

              <li>
                <strong>00:30 – indefinido</strong>
                <span>After party opcional.</span>
              </li>
            </ul>
          </article>
        </div>

        <div className="home__notes">
          <p>
            Habrá cabinas para quien necesite un cambio de vestuario integral y
            la intimidad así lo requiera.
          </p>

          <p>
            Os recordamos que la invitación es personal, nominal e
            intransferible, y las plazas muy limitadas. Si al final no pudierais
            asistir, por favor hacédnoslo saber cuanto antes.
          </p>
        </div>
      </div>
    </section>
  );
}