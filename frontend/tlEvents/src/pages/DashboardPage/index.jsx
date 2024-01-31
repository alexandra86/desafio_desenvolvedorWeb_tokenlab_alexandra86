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
    displayEventsToday,
    showMyEvents,
    showEventsTodayAgain,
  } = useContext(EventContext);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENUSER");
    localStorage.removeItem("@USER_ID");
  };

  const showEventsToday = () => {
    const dateToday = new Date();
    const formateddDate = dateToday.toLocaleDateString("pt-BR");

    const eventToday = user.events.filter((date) => {
      const partsData = date.dateEvent.split("-");
      const dateEventoFormatada = `${partsData[2]}/${partsData[1]}/${partsData[0]}`;

      return dateEventoFormatada === formateddDate;
    });

    return eventToday;
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
                onClick={showEventsTodayAgain}
              >
                Today
              </button>
              <button className="buttonsNavigation" onClick={showMyEvents}>
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

            {displayEventsToday && (
              <ul className="areaCards">
                {showEventsToday().length > 0 ? (
                  showEventsToday().map((event) => (
                    <CardEvent key={event.id} event={event} />
                  ))
                ) : (
                  <p className="fraseNotEvent">You have no events today!</p>
                )}
              </ul>
            )}

            {!displayEventsToday && (
              <ul className="areaCards">
                {user.events.length > 0 ? (
                  user.events.map((event) => (
                    <CardEvent key={event.id} event={event} />
                  ))
                ) : (
                  <p className="fraseNotEvent">You have no events scheduled!</p>
                )}
              </ul>
            )}
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
