import "./Banner.css";
import amiiboLogo from "../../assetsProject/toppng.com-amiibo-logo-1280x292.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <img
          className="banner-logo"
          src={amiiboLogo}
          alt="Amiibo logo"
        />
       
        <p className="banner-subtitle">Colecciona, descubre y compra tus Amiibos favoritos</p>
        <a className="banner-cta" href="#productos">
          Ver productos
        </a>
      </div>
    </div>
  );
};

export default Banner;
