import { CgAsterisk } from "react-icons/cg";

export default function Price() {
  return (
    <div id="price-wrapper">
      <h2>Priser</h2>
      <p>
        Pris på nettsiden vil variere etter valgene man tar underveis i
        prosessen, men det er to startpriser som gjelder for alle nettsider:
      </p>
      <ol>
        <li>
          Enkel landingside: <span className="n-price">10 000kr</span>
        </li>
        <li>
          Nettside med flere sider: <span className="n-price">15 000kr</span>
        </li>
      </ol>
      <p>
        Det vil være mulig å legge til flere funksjoner og tjenester underveis i
        prosessen. Dette vil kunne påvirke prisen på nettsiden. Eksempler på
        tjenester som kan legges til er:
      </p>
      <ul>
        <li>
          <CgAsterisk />
          Statistikktside
        </li>
        <li>
          <CgAsterisk />
          Flere sider
        </li>
        <li>
          <CgAsterisk />
          Epost-tjenester
        </li>
        <li>
          <CgAsterisk />
          Nettbutikk
        </li>
      </ul>
      <p>
        Ved enkelte funksjoner og ved vedlikehold av siden, vil det også kunne
        komme månedlige kostnader i tillegg.
      </p>
    </div>
  );
}
