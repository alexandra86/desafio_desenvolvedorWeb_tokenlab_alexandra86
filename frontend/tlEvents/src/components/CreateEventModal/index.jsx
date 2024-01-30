import { useContext } from "react";
import { EventContext } from "../../contexts/EventContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createEventSchema } from "./createEventSchema";
import { createPortal } from "react-dom";
import InputMask from "react-input-mask";
import { StyledContainerModal } from "./style";

export const CreateEventtModal = () => {
  const { handleEventModal, CreateEvent } = useContext(EventContext);
  const { loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      nameEvent: "",
      description: "",
      dateEvent: "",
      startTime: "",
      endTime: "",
    },
    resolver: yupResolver(createEventSchema),
  });

  const submit = async (data) => {
    const information = { ...data };
    await CreateEvent(information);
    reset();
  };

  const modalContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Create Event</h2>
          <button onClick={() => handleEventModal()} className="btCloseModal">
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="nameEvent" className="labelModal">
            Name
          </label>
          <input
            type="text"
            name="nameEvent"
            placeholder="Enter he event name here..."
            className="inputModal"
            {...register("nameEvent")}
          />
          {errors.nameEvent && (
            <p className="areaError">{errors.nameEvent.message}</p>
          )}

          <label htmlFor="description" className="labelModal">
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Enter description here..."
            className="inputModal"
            {...register("description")}
          />
          {errors.description && (
            <p className="areaError">{errors.description.message}</p>
          )}

          <label htmlFor="dateEvent" className="labelModal">
            Date
          </label>
          <InputMask
            type="text"
            mask="99/99/9999"
            name="dateEvent"
            placeholder="Enter the event date here..."
            className="inputModal"
            {...register("dateEvent")}
          />
          {errors.dateEvent && (
            <p className="areaError">{errors.dateEvent.message}</p>
          )}

          <label htmlFor="startTime" className="labelModal">
            Start time
          </label>
          <InputMask
            type="text"
            mask="99:99"
            name="startTime"
            placeholder="Enter the event start time here..."
            className="inputModal"
            {...register("startTime")}
          />
          {errors.startTime && (
            <p className="areaError">{errors.startTime.message}</p>
          )}

          <label htmlFor="endTime" className="labelModal">
            End time
          </label>
          <InputMask
            type="text"
            mask="99:99"
            name="endTime"
            placeholder="Enter the event end time here..."
            className="inputModal"
            {...register("endTime")}
          />
          {errors.endTime && (
            <p className="areaError">{errors.endTime.message}</p>
          )}

          <button type="submit" className="btCreateModal" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(modalContent, document.getElementById("modal-root"));
};
