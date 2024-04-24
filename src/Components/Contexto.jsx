import React, { createContext, useContext, useState } from 'react';

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
  const [localStorageData, setLocalStorageData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const updateLocalStorageData = (newData) => {
    setLocalStorageData(prevData => {
        const updatedData = { ...prevData, [newData.id]: newData }; // Estructurar la nota con su ID
        localStorage.setItem('formData', JSON.stringify(updatedData));
        return updatedData;
    });
};
  

  return (
    <LocalStorageContext.Provider value={{ localStorageData, updateLocalStorageData }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => useContext(LocalStorageContext);