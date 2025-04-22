import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Policy() {
  const navigate = useNavigate();
  return (
    <div id="policy-wrapper">
      <button id="back-button" onClick={() => navigate(-1)}>
        <BiArrowBack size={"30px"} />
      </button>

      <h1>Personvernerklæring for saetherverk.no</h1>

      <h2>1. Innledning</h2>
      <p>
        Velkommen til <strong>saetherverk.no</strong>! Denne
        personvernerklæringen forklarer hvordan Sæther Verk, drevet av Sigurd T.
        Sæther, samler inn, behandler og lagrer dine personopplysninger når du
        besøker vår nettside og benytter våre tjenester. Vi behandler dine data
        i tråd med kravene i personvernforordningen (GDPR) og norsk
        personopplysningslovgivning. Målet vårt er å ivareta ditt personvern og
        sikre åpenhet rundt vår databehandling.
      </p>

      <h2>2. Ansvarlig for behandlingen</h2>
      <p>
        <strong>Sæther Verk</strong> er behandlingsansvarlig for informasjonen
        vi samler inn på denne nettsiden.
        <br />
        <strong>Kontaktinformasjon:</strong>
        <br />- <strong>Navn:</strong> Sigurd T. Sæther
        <br />- <strong>Telefon:</strong> +47 93 06 97 10
        <br />- <strong>E-post:</strong> torve_s@live.no
      </p>
      <p>
        Spørsmål om denne erklæringen eller dine rettigheter kan rettes direkte
        til oss via overnevnte kontaktinformasjon.
      </p>

      <h2>3. Hvilke personopplysninger samler vi inn?</h2>
      <p>
        Vi kan samle inn og behandle følgende kategorier av personopplysninger:
      </p>
      <ul>
        <li>
          <strong>Opplysninger du aktivt gir oss:</strong>
          <ul>
            <li>
              Data sendt inn via kontaktskjema, for eksempel navn, e-postadresse
              og melding.
            </li>
          </ul>
        </li>
        <li>
          <strong>Automatisk innsamlede data ved besøk:</strong>
          <ul>
            <li>
              Informasjon om din enhet og nettleser, IP-adresse, tidspunkt for
              besøk og hvilke sider du navigerer til. Disse dataene benyttes
              primært for å forbedre brukeropplevelsen og for å kunne
              dokumentere bruken av nettsiden.
            </li>
          </ul>
        </li>
      </ul>

      <h2>4. Formålet med behandlingen</h2>
      <p>Vi behandler dine personopplysninger for følgende formål:</p>
      <ul>
        <li>
          <strong>Henvendelser og kundekontakt:</strong> Å behandle og besvare
          dine henvendelser, gi deg informasjon og sende deg et uforpliktende
          tilbud på våre tjenester.
        </li>
        <li>
          <strong>Drift og videreutvikling:</strong> For å sikre en optimal
          drift av nettsiden og for å forbedre våre tjenester, inkludert
          statistikk og analyse av bruk.
        </li>
        <li>
          <strong>Tilpasning av tjenester:</strong> Å skreddersy våre løsninger,
          som blant annet inkluderer design og utvikling av nettsider, slik at
          de møter dine og din bedrifts behov.
        </li>
      </ul>
      <p>
        Behandlingen skjer enten med ut fra ditt samtykke (f.eks. når du sender
        inn informasjon via kontaktskjemaet) eller på bakgrunn av våre legitime
        interesser for å drive og utvikle virksomheten.
      </p>

      <h2>5. Rettslig grunnlag</h2>
      <p>Behandlingen av dine personopplysninger skjer i henhold til:</p>
      <ul>
        <li>
          <strong>Ditt samtykke:</strong> Når du aktivt oppgir informasjon
          gjennom nettsidens kontaktskjema eller andre interaktive funksjoner.
        </li>
        <li>
          <strong>Nødvendighet for kontrakt:</strong> Dersom vi skal levere en
          tjeneste eller et tilbud til deg, behandler vi opplysningene for å
          oppfylle en kontrakt.
        </li>
        <li>
          <strong>Våre legitime interesser:</strong> For eksempel for å forbedre
          nettsiden, drive markedsføring og sikre en trygg og stabil drift, så
          lenge dine rettigheter ikke går tapt.
        </li>
      </ul>

      <h2>6. Lagring og sletting av data</h2>
      <p>
        Vi lagrer dine personopplysninger så lenge det er nødvendig for å
        oppfylle formålene beskrevet ovenfor. Dersom det ikke lenger er behov
        for opplysningene, eller du ber om sletting og ingen rettslig grunn for
        videre lagring foreligger, vil dataene bli slettet eller anonymisert.
      </p>

      <h2>7. Dine rettigheter</h2>
      <p>Som registrert har du en rekke rettigheter under GDPR:</p>
      <ul>
        <li>
          <strong>Innsyn:</strong> Du har rett til å få vite hvilke opplysninger
          vi behandler om deg.
        </li>
        <li>
          <strong>Rettelse:</strong> Du kan be om å få feil eller mangelfulle
          opplysninger korrigert.
        </li>
        <li>
          <strong>Sletting:</strong> Under visse forutsetninger kan du be om at
          vi sletter dine personopplysninger.
        </li>
        <li>
          <strong>Begrensning:</strong> Du kan kreve at vi begrenser
          behandlingen av dine data.
        </li>
        <li>
          <strong>Dataportabilitet:</strong> Du har rett til å motta dine data i
          et strukturert og maskinlesbart format.
        </li>
        <li>
          <strong>Innsigelse:</strong> Du kan protestere mot behandlingen dersom
          du mener den går utover dine rettigheter.
        </li>
        <li>
          <strong>Klage:</strong> Du har rett til å klage til Datatilsynet
          dersom du mener behandlingen av dine opplysninger strider mot GDPR.
        </li>
      </ul>
      <p>
        For å utøve noen av disse rettighetene, vennligst ta kontakt med oss på
        e-post eller telefon.
      </p>

      <h2>8. Informasjonskapsler (cookies)</h2>
      <p>
        Dersom nettsiden benytter informasjonskapsler, informerer vi deg om
        dette ved første besøk. Informasjonskapslene benyttes til å forbedre
        brukeropplevelsen, samle anonym statistikk og tilpasse innholdet ut fra
        dine interesser. Du kan når som helst endre innstillingene for
        informasjonskapsler i din nettleser.
      </p>

      <h2>9. Sikkerhetstiltak</h2>
      <p>
        Vi setter din sikkerhet høyt og har iverksatt nødvendige tekniske og
        organisatoriske tiltak for å beskytte dine personopplysninger mot
        uautorisert tilgang, tap eller misbruk. Disse tiltakene evalueres og
        oppdateres jevnlig for å møte dagens teknologiske standarder.
      </p>

      <h2>10. Endringer i personvernerklæringen</h2>
      <p>
        Vi forbeholder oss retten til å endre denne personvernerklæringen ved
        behov, for eksempel ved endringer i vår databehandling eller dersom nye
        krav etter GDPR trer i kraft. Oppdateringer vil bli publisert på denne
        siden, og vi anbefaler derfor at du periodisk gjennomgår erklæringen for
        å holde deg oppdatert.
      </p>

      <p>
        Denne erklæringen er utarbeidet for å gi deg en tydelig oversikt over
        hvordan vi hos Sæther Verk behandler dine personopplysninger. Er du i
        tvil om noe eller har spørsmål, ikke nøl med å kontakte oss. Ved
        eventuelle bekymringer oppfordrer vi deg også til å kontakte
        Datatilsynet.
      </p>
    </div>
  );
}
