// Componente donde se muestra la información guardada en localStorage
import React from 'react';
import { useLocalStorage } from './Contexto';

const DisplayDataComponent = () => {
  const { localStorageData } = useLocalStorage();

  return (
    <div>
      <h2>Información Guardada</h2>
      <p>{JSON.stringify(localStorageData)}</p>
    </div>
  );
};

export default DisplayDataComponent;
