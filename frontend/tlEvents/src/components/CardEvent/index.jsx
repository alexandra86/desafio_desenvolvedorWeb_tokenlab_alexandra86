import { StyledCardEvent } from "./style";

export const CardEvent = () => {
  return (
    <StyledCardEvent>
      <h1 className="cardTitle">Reunião Diretoria</h1>
      <p className="cardDescription">
        Relativo as estratégias para o 1º semestre.
      </p>
      <span className="cardHours">15:00 às 16:30</span>
      <div className="cardDivButtons">
        <button className="cardEditButton">Edit</button>
        <button className="cardDeleteButton">Delete</button>
      </div>
    </StyledCardEvent>
  );
};
