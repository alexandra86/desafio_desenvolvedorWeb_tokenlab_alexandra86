import { StyledCardEvent } from "./style";
import { useContext } from "react";
import { EventContext } from "../../contexts/EventContext";
import { DateTime } from "luxon";
import moment from "moment";
import "moment/locale/pt-br";

export const CardEvent = (event) => {
  const currentDateTime = new Date(event.event.dateEvent);
  const currentStartTime = DateTime.fromISO(event.event.startTime);
  const currentEndTime = DateTime.fromISO(event.event.endTime);
  const formattedDate = moment(currentDateTime).format("DD/MM/YYYY");
  const formattedStartTime = currentStartTime.toFormat("HH:mm");
  const formattedEndTime = currentEndTime.toFormat("HH:mm");

  const { handleEditEventModal, setSelectedEvent } = useContext(EventContext);

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
        <button className="cardDeleteButton">Delete</button>
      </div>
    </StyledCardEvent>
  );
};
