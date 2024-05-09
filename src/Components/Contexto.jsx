import { createContext, useContext, useState } from 'react';

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
    

    const deleteAllLocalStorageData = () => {
        localStorage.clear();
        setLocalStorageData({});
    };

    return (
        <LocalStorageContext.Provider value={{ localStorageData, updateLocalStorageData, deleteNoteFromLocalStorage, deleteAllLocalStorageData, setLocalStorageData }}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export const useLocalStorage = () => useContext(LocalStorageContext);

const deleteNoteFromLocalStorage = (noteId, setLocalStorageData) => {
    setLocalStorageData((prevData) => {
        const updatedData = { ...prevData };
        delete updatedData[noteId];
        localStorage.setItem('formData', JSON.stringify(updatedData));
        return updatedData;
    });
};


export { deleteNoteFromLocalStorage };
