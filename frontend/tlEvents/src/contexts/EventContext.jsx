import { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/axiosUser";
import { toast } from "react-toastify";

export const EventContext = createContext({});

// eslint-disable-next-line react/prop-types
export const EventProvider = ({ children }) => {
  const { user, GetUser, setLoading } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [modalIsEventOpen, setIsEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsEditEventOpen, setIsEditEventOpen] = useState(false);
  const [modalIsDeleteEventOpen, setIsDeleteEventOpen] = useState(false);
  const [selectDeleteEvent, setSelectDeleteEvent] = useState(null);

  const handleEventModal = () => {
    setIsEventOpen(!modalIsEventOpen);
  };

  const handleEditEventModal = () => {
    setIsEditEventOpen(!modalIsEditEventOpen);
  };

  const handleDeleteEventModal = (event) => {
    setSelectDeleteEvent(event);
    setIsDeleteEventOpen(!modalIsDeleteEventOpen);
  };

  const CreateEvent = async (data) => {
    try {
      setLoading(true);

      await api.post("/events", data);

      GetUser();

      setIsOpen(false);

      toast.success("Event successfully! 😎");
    } catch (error) {
      toast.error("Something went wrong! 😢");
    } finally {
      setLoading(false);
    }
  };

  const RemoveEvent = async (eventId) => {
    try {
      setLoading(true);

      await api.delete(`/events/${eventId}`);
      GetUser();

      toast.info("Contact removed successfully! 😎");
    } catch (error) {
      toast.error("Something went wrong! 😢");
    } finally {
      setLoading(false);
    }
  };

  const EditEvent = async (data) => {
    try {
      setLoading(true);

      await api.patch(`/events/${data.eventId}`, data);
      GetUser();

      setIsEditOpen(false);
      toast.success("Contact edited successfully! 😎");
    } catch (error) {
      toast.error("Something went wrong! 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventContext.Provider
      value={{
        user,
        modalIsOpen,
        setIsOpen,
        modalIsEditOpen,
        setIsEditOpen,
        modalIsEventOpen,
        setIsEventOpen,
        selectedEvent,
        setSelectedEvent,
        handleEventModal,
        modalIsEditEventOpen,
        setIsEditEventOpen,
        handleEditEventModal,
        modalIsDeleteEventOpen,
        setIsDeleteEventOpen,
        selectDeleteEvent,
        setSelectDeleteEvent,
        handleDeleteEventModal,
        CreateEvent,
        RemoveEvent,
        EditEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
