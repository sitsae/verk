import { useState } from "react";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <footer id="footer-wrapper" className="light-text">
      <div id="contact-text">
        <h2>Tror du vi kan passe for dine behov?</h2>
        <p>
          Ta kontakt med Sigurd i dag for å få et uforpliktende tilbud på din
          nettside ved å fylle ut skjemaet under, ring på telefonnummeret
          <a href="tel:+4791234567"> +47 91 23 45 67</a> eller send oss en epost
          til{" "}
          <a href="mailto:torve_s@live.no?subject=Jeg ønsker en nettside">
            torve_s@live.no
          </a>
        </p>
      </div>
      <div id="contact" className="">
        <form
          action="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = { name: name, email: email, message: message };
            console.log(formData);
            const params = {
              name: name,
              email: email,
              message: message,
            };
            const response = await fetch(
              "https://erfaringeras-89fa2e105c06.herokuapp.com/verk/",
              {
                body: JSON.stringify(params),
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (!response.ok) {
              console.error("Error sending message:", response.statusText);
              return;
            } else if (response.status === 200) {
              const data = await response;
              console.log("Message sent successfully:", data);
              alert("Meldingen ble sendt!");
              setName("");
              setEmail("");
              setMessage("");
            }
          }}
        >
          <h2 className="">Kontakt oss</h2>
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Epost:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="message">Melding:</label>
          <textarea
            id="message"
            value={message}
            name="message"
            rows={5}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="pink" type="submit">
            <p>Send</p>
          </button>
        </form>
      </div>
    </footer>
  );
}
