import Logo from "../assets/img/Logo_ny_cropped.PNG";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();
  return (
    <>
      <div id="hero-wrapper">
        <div id="hero">
          <img src={Logo} alt="Logo" id="logo" />

          <div>
            <h1>Takk for din henvendelse!</h1>
            <p>Vi vil snart komme tilbake til deg</p>
          </div>
          <div id="hero-buttons">
            <button
              className="compliment"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <p>Tilbake til siden</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
