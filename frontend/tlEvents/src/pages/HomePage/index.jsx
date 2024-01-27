import { StyledHomePage } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/login");
  };

  const goRegisterClick = () => {
    navigate("/register");
  };

  return (
    <StyledHomePage>
      <header className="headerHome">
        <img src={logo} alt="logo da TL Events" className="logo" />
        <div className="divButtons">
          <button className="btGoLogin" onClick={goLoginClick}>
            Login
          </button>
          <button className="btGoRegister" onClick={goRegisterClick}>
            Register
          </button>
        </div>
      </header>
      <main className="mainHome">
        <section className="sectionTlEvent"></section>
        <section className="sectionSlogan">
          <p className="slogan">
            For years, <br />
            scheduling and organizing your events.
          </p>
        </section>
      </main>
      <Footer />
    </StyledHomePage>
  );
};
