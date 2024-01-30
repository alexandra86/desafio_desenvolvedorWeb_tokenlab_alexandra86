import { StyledCardEvent } from "./style";
import moment from "moment";
import "moment/locale/pt-br";

export const CardEvent = (event) => {
  const currentDateTime = new Date(event.event.dateEvent);
  const formattedDate = moment(currentDateTime).format("DD/MM/YYYY");

  return (
    <StyledCardEvent>
      <h1 className="cardTitle">{event.event.nameEvent}</h1>
      <p className="cardDescription">{event.event.description}</p>
      <span className="cardDate">{formattedDate}</span>
      <span className="cardHours">
        {event.event.startTime} às {event.event.endTime}
      </span>
      <div className="cardDivButtons">
        <button className="cardEditButton">Edit</button>
        <button className="cardDeleteButton">Delete</button>
      </div>
    </StyledCardEvent>
  );
};
