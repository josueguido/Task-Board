import React, { createContext, useContext, useState } from 'react';

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
  const [localStorageData, setLocalStorageData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });

  const updateLocalStorageData = (newData) => {
    setLocalStorageData((prevData) => {
      const updatedData = { ...prevData, [newData.id]: newData };
      localStorage.setItem('formData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const deleteNoteFromLocalStorage = (noteId) => {
    setLocalStorageData((prevData) => {
      const updatedData = { ...prevData };
      delete updatedData[noteId];
      localStorage.setItem('formData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const deleteAllLocalStorageData = () => {
    localStorage.clear();
    setLocalStorageData({}); // Eliminar todas las notas y forzar un renderizado
  };

  return (
    <LocalStorageContext.Provider value={{ localStorageData, updateLocalStorageData, deleteNoteFromLocalStorage, deleteAllLocalStorageData }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => useContext(LocalStorageContext);
