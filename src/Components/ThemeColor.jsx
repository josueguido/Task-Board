import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function ThemeColor(props) {
  const { children } = props;

  // Estado para controlar el tema (light/dark)
  const [theme, setTheme] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
  });

  // Efecto para actualizar las clases del HTML cuando cambia el tema
  useEffect(() => {
    document.querySelector('html').classList.toggle('dark', theme === "dark");
  }, [theme]);

  // Función para cambiar el tema
  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Renderizamos el componente con el tema actual y un botón para cambiar el tema
    <div className={`theme-${theme} bg-gray-100 dark:bg-black`}>
      {children}
      <button
        onClick={handleChangeTheme}
      >
      </button>
    </div>
  );
}

ThemeColor.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeColor;
