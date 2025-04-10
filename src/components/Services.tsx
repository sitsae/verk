import { CgAsterisk } from "react-icons/cg";
export default function Services() {
  return (
    <section id="services">
      <div id="services-wrapper">
        <h2>Tjenester</h2>
        <div id="service-wrapper">
          <div className="service">
            <h3>Landingside</h3>
            <p>
              Ønsker du å gjøre deg synlig på nett? Vi lager en enkel
              landingside for deg som ønsker å vise frem din bedrift eller
              tjeneste. En landingsside gjør dine tjenester mer profersjonelle
              og mer synlig på nett.
            </p>
            <br />
            <h4> Dette kan du få på en landingsside</h4>
            <ul>
              <li>
                <CgAsterisk style={{ paddingTop: "0.2rem" }} />
                Enkelt, profesjonelt design
              </li>
              <li>
                <CgAsterisk style={{ paddingTop: "0.2rem" }} />
                Epost-tjenester
              </li>
              <li>
                <CgAsterisk style={{ paddingTop: "0.2rem" }} />
                All informasjon du trenger på en side
              </li>
            </ul>
          </div>
          <div className="service">
            <h3>Nettside med flere sider</h3>
            <p>
              Ønsker du å vise frem flere tjenester? Vi lager en nettside for
              deg som ønsker å vise frem flere tjenester. En nettside med flere
              sider gjør dine tjenester mer profersjonelle og mer synlig på
              nett.
            </p>
            <br />
            <h4>Dette kan du få på en nettside</h4>
            <ul>
              <li>
                <CgAsterisk style={{ paddingTop: "0.2rem" }} />
                Enkelt, profesjonelt design
              </li>
              <li>
                <CgAsterisk style={{ paddingTop: "0.2rem" }} />
                Epost-tjenester
              </li>
              <li>
                <CgAsterisk style={{ paddingTop: "0.2rem" }} />
                Flere sider
              </li>
              <li>
                <CgAsterisk style={{ paddingTop: "0.2rem" }} />
                Statistikktside
              </li>
            </ul>
          </div>
        </div>
        <div className="light-text">
          <h3>Full fleksibilitet</h3>
          <p>
            Du bestemmer selv omfanget av din side. Ønsker du en landingside med
            mange ekstra funskjoner, en enklere flersidig nettside eller mer
            avanserte funksjoner? Kontakt oss og få et tilbud.
          </p>
        </div>
        <button
          className="yellow"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p>Fortell oss hva du ønsker</p>
        </button>
      </div>
    </section>
  );
}
