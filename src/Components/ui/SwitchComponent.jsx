import { Toggle } from "keep-react";
import { useState } from "react";

const SwitchComponent = ({ onChangeTheme }) => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => {
    setToggle(!toggle); 
    onChangeTheme(!toggle);
  };

  

  return (
    <Toggle
      bgColor="slate"
      label="Toggle"
      size="md"
      withIcon={true}
      onChange={handleChangeToggle} 
    />
  );
};

export default SwitchComponent;
