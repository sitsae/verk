// Skal inneholde en Tekst og et call to action for å få brukeren til å ta kontakt
// Skal også inneholde en logo

import Logo from "../assets/img/Logo_ny_cropped.png";

export default function Hero() {
  return (
    <>
      <div id="hero-wrapper">
        <div id="hero">
          <div id="nav">
            <ul>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <li>Tjenester</li>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <li>Om oss</li>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#price-wrapper")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <li>Priser</li>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <li>Kontakt</li>
              </a>
            </ul>
          </div>
          <img src={Logo} alt="Logo" id="logo" />

          <div>
            <h1>Gjør din bedrift synlig på nett</h1>
            <p>Vi lager nettsider for små bedrifter og barnehager</p>
          </div>
          <div id="hero-buttons">
            <button
              className="compliment"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p>Hva tilbyr vi?</p>
            </button>
            <button
              className="yellow"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p>Send oss en melding</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
