import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">
          The End of the World Party
        </h1>
        <p className="home__eyebrow">Mhares · 12 de agosto de 2026</p>

        <p className="home__intro">
          Estimados amig@s,
        </p>

        <p className="home__intro">
          Sólo quedan dos meses para el clímax que supondrá el primer eclipse
          solar total en la España continental en 114 años. Sin duda será un
          momento mágico y trascendental para nuestra generación, y merece una
          celebración a lo grande.
        </p>

        <div className="home__actions">
          <a href="#eclipse-info" className="home__link">
            Info eclipse
          </a>

          <p className="home__intro">
            Con tal de ultimar todos los detalles los Buades Bros os pedimos por favor que 
            rellenéis el siguiente formulario 
            <a
              href="https://URL_DEL_FORMULARIO.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home__button"
            >
              Rellenar formulario
            </a>
           y aprovechamos para daros a 
            continuación información detallada del evento. 
          </p>

          
        </div>

        <div className="home__schedule">
          <div>
            <h2>11 de agosto</h2>
            <p>
              <strong>20:30 – 23:30</strong> · Cena cocktail pre-eclipse en
              Mariluz – Es Baluard, Palma centro. Velada opcional para romper el hielo entre los invitados y
              disfrutar de las vistas sobre la muralla y el puerto.
            </p>
          </div>

          <div>
            <h2>12 de agosto</h2>
            <ul>
              <li>
                <strong>11:00 – 11:15</strong> · Recogida en autobús.
              </li>
              <li>
                <strong>12:00 – 18:00</strong> · Day Party by the pool.
                Dress code: Mediterranean casual.
              </li>
              <li>
                <strong>18:00 – 00:00</strong> · EoW Party & Eclipse.
                Dress code: EoW vibes.
              </li>
              <li>
                <strong>00:00 – 00:30</strong> · Vuelta en autocar.
              </li>
              <li>
                <strong>00:30 – indefinido</strong> · After party opcional.
              </li>
            </ul>
          </div>
        </div>

        <p className="home__note">
          Habrá cabinas para quien necesite un cambio de vestuario integral y la intimidad 
          así lo requiera 
        </p>
        
        <p className="home__note">
          Os recordamos que la invitación es personal, nominal e intransferible, y las plazas 
          muy limitadas ya que cada hermano tiene su cupo. Si al final no pudierais asistir 
          por favor hacédnoslo saber cuánto antes 
        </p>
      </div>
    </section>
  );
}