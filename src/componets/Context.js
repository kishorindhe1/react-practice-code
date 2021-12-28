import React, { createContext, useContext, useState } from "react";
const userContext = createContext();
const setUserContext = createContext();

export function useUser() {
  return useContext(userContext);
}
export const useUserUpdate = () =>  useContext(setUserContext);

export function Context(props) {
  const [user, setUser] = useState({
    name: "kishor",
  });
  return (
    <userContext.Provider value={user}>
      <setUserContext.Provider value={setUser}>
        {props.children}{" "}
      </setUserContext.Provider>
    </userContext.Provider>
  );
}
