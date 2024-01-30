import { StyledCardEvent } from "./style";
import { useContext } from "react";
import { EventContext } from "../../contexts/EventContext";
import { DateTime } from "luxon";
import moment from "moment";
import "moment/locale/pt-br";

export const CardEvent = (event) => {
  const currentDate = moment(event.event.dateEvent, moment.ISO_8601, true);
  const currentStartTime = DateTime.fromISO(event.event.startTime);
  const currentEndTime = DateTime.fromISO(event.event.endTime);
  const formattedDate = moment(currentDate).format("DD/MM/YYYY");
  const formattedStartTime = currentStartTime.toFormat("HH:mm");
  const formattedEndTime = currentEndTime.toFormat("HH:mm");

  const { handleEditEventModal, setSelectedEvent, handleDeleteEventModal } =
    useContext(EventContext);

  return (
    <StyledCardEvent>
      <h1 className="cardTitle">{event.event.nameEvent}</h1>
      <p className="cardDescription">{event.event.description}</p>
      <span className="cardDate">{formattedDate}</span>
      <span className="cardHours">
        {formattedStartTime} às {formattedEndTime}
      </span>
      <div className="cardDivButtons">
        <button
          className="cardEditButton"
          onClick={() => {
            handleEditEventModal();
            setSelectedEvent(event.event);
          }}
        >
          Edit
        </button>
        <button
          className="cardDeleteButton"
          onClick={() => handleDeleteEventModal(event.event.id)}
        >
          Delete
        </button>
      </div>
    </StyledCardEvent>
  );
};
