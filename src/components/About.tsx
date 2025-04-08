import { CgCheck } from "react-icons/cg";
export default function About() {
  return (
    <section id="about">
      <div id="about-wrapper">
        <div className="left">
          <h3>Hvem er vi?</h3>
          <p>
            Sæther Verk er startet av Sigurd T. Sæther. Sigurd er en webutvikler
            som ønsker å hjelpe deg med å lage en nettside som er tilpasset deg
            og dine brukere.
            <br />
            <br />
            Med en nettside fra oss får du noe å referere til når du snakker om
            din bedrift. du får en platform hvor du uforstyrret kan vise hvem du
            er og hva du tilbyr.
            <br />
            <br />
            Vi har fokus på å lage nettsider som svarer til deres mål og
            visuelle profil. Hos oss får du en nettside som er utformet etter
            brukernes mål, og som fører dem til den informasjonen dere ønsker å
            presentere, enklest mulig.
          </p>
        </div>

        <div className="right">
          <h3>Hva får du fra oss?</h3>
          <ul>
            <li>
              <p>
                <CgCheck
                  style={{
                    color: "green",
                    width: "2.5rem",
                  }}
                  size={"sm"}
                />
                Profesjonell, rask og sikker nettside
              </p>
            </li>
            <li>
              <p>
                <CgCheck
                  style={{
                    color: "green",
                    width: "2.5rem",
                  }}
                  size={"sm"}
                />
                Nettside tilpasset deg og dine brukere
              </p>
            </li>
            <li>
              <p>
                <CgCheck
                  style={{
                    color: "green",
                    width: "2.5rem",
                  }}
                  size={"sm"}
                />
                Valgfri funksjonalitet og design
              </p>
            </li>
            <li>
              <p>
                <CgCheck
                  style={{
                    color: "green",
                    width: "2.5rem",
                  }}
                  size={"sm"}
                />
                Hjelp til å utvikle deg videre på nett
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
