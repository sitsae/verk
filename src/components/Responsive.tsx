import responsiveImg from "../assets/img/responsive.png";
export default function Responsive() {
  return (
    <div id="responsive-wrapper">
      <div className="resposive-text">
        <h2>Nettsider for alle enheter</h2>
        <p>
          Vi lager responsive nettsider som er tilpasset alle enheter, så din
          bedrift fremstår profesjonell og moderne.
        </p>
      </div>
      <div className="responsive-img">
        <img src={responsiveImg} alt="" />
      </div>
    </div>
  );
}
