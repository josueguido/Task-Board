import React, { createContext, useContext, useState, useEffect } from 'react';

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {

  const [localStorageData, setLocalStorageData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    console.log('localStorageData:', parsedData);
    return parsedData instanceof Array ? parsedData : [parsedData];
  });

  // const updateLocalStorageData = (newData) => {
  //   const updatedData = [...localStorageData, newData]; // Fusionar la nueva nota con las existentes
  //   setLocalStorageData(updatedData);
  //   localStorage.setItem('formData', JSON.stringify(updatedData));
  //   console.log('Updated localStorageData:', updatedData);
  // };

  const updateLocalStorageData = (newData) => {
    const updatedData = [...localStorageData.filter(item => item.id !== newData.id), newData]; // Fusionar la nueva nota con las existentes
    setLocalStorageData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    console.log('Updated localStorageData:', updatedData);
  };
  
  

  return (
    <LocalStorageContext.Provider value={{ localStorageData, updateLocalStorageData }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => useContext(LocalStorageContext);
