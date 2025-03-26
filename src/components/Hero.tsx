// Skal inneholde en Tekst og et call to action for å få brukeren til å ta kontakt
// Skal også inneholde en logo

import Logo from "../assets/img/Logo.png";

export default function Hero() {
  const style: any = {
    wrapper: {
      height: "100vh",
      padding: "2rem",
    },
    nav: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "3rem",
      position: "absolute",
      top: "0",
      right: "0",
    },
    ul: {
      display: "flex",
      listStyle: "none",
      gap: "1rem",
    },
    buttons: { zIndex: 2 },
    img: {
      position: "fixed",
      top: "0%",
      left: "0",
      padding: "3rem",
      width: "300px",
    },
    textWrapper: { zIndex: 2 },
    h1: {},
    p: {},
    hero: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      background: `radial-gradient(circle at 200px -100px, rgb(246, 247, 182) 40%, rgb(240, 155, 168) 50%)`,
      gap: "2rem",
    },
  };

  return (
    <>
      <div id="wrapper" style={style.wrapper}>
        <div id="hero" style={style.hero}>
          <div id="nav" style={style.nav}>
            <ul style={style.ul}>
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
          <img src={Logo} alt="Logo" style={style.img} id="logo" />

          <div style={style.textWrapper}>
            <h1>Gjør din bedrift synlig på nett</h1>
            <p>Vi lager nettsider for små bedrifter og barnehager</p>
          </div>
          <div style={style.buttons}>
            <button>This</button>
            <button>Or This</button>
          </div>
        </div>
      </div>
    </>
  );
}
