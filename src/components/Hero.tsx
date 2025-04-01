// Skal inneholde en Tekst og et call to action for å få brukeren til å ta kontakt
// Skal også inneholde en logo

import Logo from "../assets/img/Logo.png";

export default function Hero() {
  return (
    <>
      <div id="hero-wrapper">
        <div id="hero">
          <div id="nav">
            <ul>
              <a href="#">
                <li>Tjenester</li>
              </a>
              <a href="#">
                <li>Om oss</li>
              </a>
              <a href="#">
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
            <button className="compliment">
              <p>This</p>
            </button>
            <button className="yellow">
              <p>Or This</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
