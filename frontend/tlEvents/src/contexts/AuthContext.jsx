import { useState } from "react";
import { createContext } from "react";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(true);
  const [modalIsEventOpen, setIsEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  //   const navigate = useNavigate();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        newLoading,
        setNewLoading,
        modalIsEventOpen,
        setIsEventOpen,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
