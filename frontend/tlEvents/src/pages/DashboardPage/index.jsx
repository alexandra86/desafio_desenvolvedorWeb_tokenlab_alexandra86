/* eslint-disable react-hooks/exhaustive-deps */
import { StyledDashboardPage } from "./style";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import perfilImagem from "../../assets/perfilImage.png";
import { Footer } from "../../components/Footer";
import { CardEvent } from "../../components/CardEvent";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../../contexts/EventContext";
import { CreateEventtModal } from "../../components/CreateEventModal";
import { EditEventModal } from "../../components/EditEventModal";
import { DeleteEventModal } from "../../components/DeleteEventModal";

export const DashboardPage = () => {
  const { user, newLoading } = useContext(AuthContext);
  const {
    modalIsEventOpen,
    handleEventModal,
    modalIsEditEventOpen,
    modalIsDeleteEventOpen,
  } = useContext(EventContext);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENUSER");
    localStorage.removeItem("@USER_ID");
  };

  const goDashbord = () => {
    navigate("/dashboard");
  };

  const showEventsToday = () => {
    const today = new Date().toISOString().split("T")[0];
    const eventsToday = user.events.filter(
      (event) => event.dateEvent === today
    );

    return eventsToday;
  };

  return (
    <>
      {newLoading && <div>Loading...</div>}
      {user && (
        <StyledDashboardPage>
          <header className="headerDashboard">
            <img src={logo} alt="logo da TL Events" className="logo" />
            <nav className="navigation">
              <button className="buttonsNavigation" onClick={() => goHome()}>
                Home
              </button>
              <button
                className="buttonsNavigation"
                onClick={() => showEventsToday()}
              >
                Today
              </button>
              <button
                className="buttonsNavigation"
                onClick={() => goDashbord()}
              >
                My Events
              </button>
            </nav>
            {!user.user.image ? (
              <img
                src={perfilImagem}
                alt="Imagem do perfil"
                className="imageUser"
              />
            ) : (
              <img
                src={user.user.image}
                alt="Imagem do usuário"
                className="imageUser"
              />
            )}
          </header>
          <header className="welcome">
            <div className="areaFraseWelcome">
              <p className="fraseWelcome">Welcome,</p>
              <p className="fraseWelcome">{user.user.name}</p>
            </div>
            <button
              className="buttonNewEvent"
              onClick={() => handleEventModal()}
            >
              {" "}
              + Add New Event
            </button>
          </header>
          <main>
            <h1 className="tittleDashboard">Events</h1>
            <ul className="areaCards">
              {user.events.map((event) => (
                <CardEvent key={event.id} event={event} />
              ))}
            </ul>
          </main>
          <Footer />
          {modalIsEventOpen && <CreateEventtModal />}
          {modalIsEditEventOpen && <EditEventModal />}
          {modalIsDeleteEventOpen && <DeleteEventModal />}
        </StyledDashboardPage>
      )}
    </>
  );
};
