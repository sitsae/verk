export default function Footer() {
  return (
    <footer id="footer-wrapper" className="light-text">
      <div id="contact-text">
        <h2>Tror du vi kan passe for dine behov?</h2>
        <p>
          Ta kontakt med Sigurd i dag for å få et uforpliktende tilbud på din
          nettside ved å fylle ut skjemaet under, eller ring oss på
          telefonnummeret
          <a href="tel:+4791234567"> +47 91 23 45 67</a>. Du kan også sende oss
          en epost via <a href="mailto:torve_s@live.no"> torve_s@live.no</a>
        </p>
      </div>
      <div id="contact" className="">
        <form action="POST">
          <h2 className="">Kontakt oss</h2>
          <label htmlFor="name">Navn:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Epost:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Melding:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
}
