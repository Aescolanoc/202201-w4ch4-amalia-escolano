/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import * as api from '../services/api';

export const context = createContext({
  updateUser: () => {},
  updateUserState: () => {},
});

export function ContextProvider({ children }) {
  const [userData, setUser] = useState({});

  function updateUserState(data) {
    const newData = { ...userData, ...data };
    setUser(newData);
  }

  function updateUser(user) {
    api.update(user).then((resp) => {
      setUser(user);
    });
  }

  const finalContext = { updateUser, updateUserState };

  return <context.Provider value={finalContext}>{children}</context.Provider>;
}
