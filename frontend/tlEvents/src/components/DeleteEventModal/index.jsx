import { useContext } from "react";
import { createPortal } from "react-dom";
import { StyledContainerDeleteModal } from "./style.js";
import { EventContext } from "../../contexts/EventContext.jsx";

export const DeleteEventModal = () => {
  const {
    handleDeleteEventModal,
    RemoveEvent,
    selectDeleteEvent,
    setIsDeleteEventOpen,
  } = useContext(EventContext);

  const modalDeleteEventContent = (
    <StyledContainerDeleteModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Delete Event</h2>
          <button
            onClick={() => handleDeleteEventModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <div className="areaDeleteInfo">
          <p className="freseDelete">
            Are you sure you want to delete this event?
          </p>
          <div className="areaButtonsDelete">
            <button
              className="btConfirmDelete"
              onClick={() => {
                RemoveEvent(selectDeleteEvent);
                setIsDeleteEventOpen(false);
              }}
            >
              Confirmar
            </button>
            <button
              className="btCancelDelete"
              onClick={() => handleDeleteEventModal()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </StyledContainerDeleteModal>
  );
  return createPortal(
    modalDeleteEventContent,
    document.getElementById("modalEventDelete-root")
  );
};
